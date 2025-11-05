import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import * as Sentry from "npm:@sentry/deno";
import { createClient } from "jsr:@supabase/supabase-js@2";
import { Database } from "../_shared/types/supabase.ts";
import { GoogleGenAI } from "npm:@google/genai";
import { Buffer } from "node:buffer";
import { PROMPTS, Prompt, parse } from "./prompts.ts";
import { isAuthorized } from "../_shared/auth.ts";
import z from "npm:zod";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const sentryDsn = Deno.env.get("SENTRY_DSN");
const geminiApiKey = Deno.env.get("GEMINI_API_KEY");

if (!supabaseUrl || !supabaseServiceKey || !geminiApiKey) {
  throw new Error("Missing environment variables");
}

if (sentryDsn) {
  Sentry.init({ dsn: sentryDsn });
}

const ai = new GoogleGenAI({ apiKey: geminiApiKey });

Deno.serve(async (req) => {
  try {
    if (!isAuthorized(req)) {
      return new Response("Unauthorized", { status: 401 });
    }

    if (req.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const reqData = await req.json();
    const { type, path, data } = reqData as {
      type: keyof typeof PROMPTS;
      path: string;
      data: unknown;
    };

    console.log(type, path);
    console.log(data);

    if (!(type in PROMPTS)) {
      return new Response("Invalid type", { status: 400 });
    }

    const supabase = createClient<Database>(supabaseUrl, supabaseServiceKey);

    const { data: fileData, error } = await supabase.storage
      .from("application-documents")
      .download(path);

    if (error !== null) {
      console.error(error);
      Sentry.captureException(error);
      return new Response("failed to get family data", { status: 500 });
    }

    let prompt: Prompt;
    try {
      prompt = PROMPTS[type](data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(JSON.stringify(error.issues), { status: 400 });
      }
      console.error(error);
      Sentry.captureException(error);
      return new Response("failed to parse prompt", { status: 500 });
    }
    const arrayBuffer = await fileData.arrayBuffer();
    const base64Data = Buffer.from(arrayBuffer).toString("base64");
    const mimeType = fileData.type || "application/octet-stream";

    console.log(prompt);

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: prompt.system,
      },
      contents: [
        { text: prompt.user },
        { inlineData: { data: base64Data, mimeType } },
      ],
    });

    console.log(result.text);

    if (result.text === undefined) {
      return new Response("failed to process document", { status: 500 });
    }

    return new Response(JSON.stringify(parse(result.text)));
  } catch (error) {
    console.error("Error in ocr function:", error);
    Sentry.captureException(error);
    return new Response("Internal Server Error", { status: 500 });
  }
});
