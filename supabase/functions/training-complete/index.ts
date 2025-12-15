import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import * as Sentry from "npm:@sentry/deno";
import { createClient } from "jsr:@supabase/supabase-js@2";
import { Database } from "../_shared/types/supabase.ts";
import { GoogleGenAI, Language } from "npm:@google/genai";
import { Buffer } from "node:buffer";
import { generatePrompt, parse, type Training, trainings } from "./prompt.ts";
import { corsHeaders } from "../_shared/cors.ts";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const sentryDsn = Deno.env.get("SENTRY_DSN");
const geminiApiKey = Deno.env.get("GEMINI_API_KEY");

if (!supabaseUrl || !supabaseAnonKey || !geminiApiKey || !supabaseServiceKey) {
  throw new Error("Missing environment variables");
}

if (sentryDsn) {
  Sentry.init({ dsn: sentryDsn });
}

const ai = new GoogleGenAI({ apiKey: geminiApiKey });

Deno.serve(async (req) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response("Unauthorized", {
        status: 401,
        headers: corsHeaders,
      });
    }

    const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
      global: {
        headers: { Authorization: authHeader },
      },
    });
    const adminSupabase = createClient<Database>(
      supabaseUrl,
      supabaseServiceKey,
    );

    if (req.method !== "POST") {
      return new Response("Method not allowed", {
        status: 405,
        headers: corsHeaders,
      });
    }

    const reqData = await req.json();
    const { path, language } = reqData as {
      path: string;
      language: string;
    };

    console.log(path);

    const { data: fileData, error } = await supabase.storage
      .from("application-documents")
      .download(path);

    if (error !== null) {
      console.error(error);
      Sentry.captureException(error);
      return new Response("failed to get document", {
        status: 500,
        headers: corsHeaders,
      });
    }

    const { data, error: selectError } = await supabase
      .from("provider")
      .select(
        "id, training_complete_call_count, cpr_online_training_completed_at, pdis_first_aid_cpr_completed_at, pdis_standard_precautions_completed_at, pdis_preventing_child_abuse_completed_at, pdis_infant_safe_sleep_completed_at, pdis_emergency_preparedness_completed_at, pdis_playground_safety_completed_at, pdis_injury_prevention_completed_at, pdis_preventing_shaken_baby_completed_at, pdis_recognizing_impact_of_bias_completed_at, pdis_medication_administration_part_one_completed_at",
      )
      .single();

    if (selectError !== null) {
      console.error(selectError);
      Sentry.captureException(selectError);
      return new Response("failed to get training data", {
        status: 500,
        headers: corsHeaders,
      });
    }

    if (data.training_complete_call_count >= 100) {
      return new Response("Rate limit exceeded", {
        status: 429,
        headers: corsHeaders,
      });
    }

    await adminSupabase
      .from("provider")
      .update({ training_complete_call_count: data.training_complete_call_count + 1 })
      .eq("id", data.id);

    const trainingsWithStatus: { [key: string]: Training } = {};
    for (const [code, training] of Object.entries(trainings)) {
      trainingsWithStatus[code] = {
        ...training,
        status: data[training.dbFieldName] !== null ? "complete" : "pending",
      };
    }

    const prompt = generatePrompt(trainingsWithStatus, language);

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
      return new Response("failed to process document", {
        status: 500,
        headers: corsHeaders,
      });
    }

    const { message, code } = parse(result.text);

    if (code === undefined || message === undefined) {
      console.error("failed to parse AI response");
      return new Response("failed to parse AI response", {
        status: 500,
        headers: corsHeaders,
      });
    }

    if (code === "none") {
      return new Response(JSON.stringify({ message, code }), {
        status: 200,
        headers: corsHeaders,
      });
    }

    const trainingToComplete = trainings[code as keyof typeof trainings];

    if (trainingToComplete === undefined) {
      console.error("failed to find training to complete");
      return new Response("failed to get training to complete", {
        status: 500,
        headers: corsHeaders,
      });
    }

    const { error: updateError } = await adminSupabase
      .from("provider")
      .update({ [trainingToComplete.dbFieldName]: new Date() })
      .eq("id", data.id);

    if (updateError !== null) {
      console.error(updateError);
      Sentry.captureException(updateError);
      return new Response("failed to update training status", {
        status: 500,
        headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify({ message, code }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("Error in ocr function:", error);
    Sentry.captureException(error);
    return new Response("Internal Server Error", {
      status: 500,
      headers: corsHeaders,
    });
  }
});
