import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { Database } from "./types/supabase.ts";

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseAnonKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL and/or anon key not set");
}

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const data = await req.formData();

  const rawRequest = data.get("rawRequest");
  console.log(rawRequest);

  if (rawRequest === null || typeof rawRequest !== "string") {
    return new Response("No rawRequest found", { status: 400 });
  }

  const jsonData = JSON.parse(rawRequest);
  console.log(jsonData);

  await supabase.from("testing").insert({first_name: jsonData.q11_pleaseEnter.first, last_name: jsonData.q11_pleaseEnter.last});

  return new Response(JSON.stringify(jsonData), {
    headers: { "Content-Type": "application/json" },
  });
});
