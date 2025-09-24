import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import * as Sentry from "npm:@sentry/deno";
import { createClient } from "npm:@supabase/supabase-js@2";
import { Database } from "../_shared/types/supabase.ts";
import { isAuthorized } from "../_shared/auth.ts";
import { Client } from "npm:@hubspot/api-client";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseAnonKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const sentryDsn = Deno.env.get("SENTRY_DSN");
const hubspotApiKey = Deno.env.get("HUBSPOT_API_KEY");

if (!supabaseUrl || !supabaseAnonKey || !hubspotApiKey) {
  throw new Error("Missing environment variables");
}

if (sentryDsn) {
  Sentry.init({ dsn: sentryDsn });
}

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
const hubspot = new Client({ accessToken: hubspotApiKey });

Deno.serve(async (req) => {
  try {
    if (!isAuthorized(req)) {
      return new Response("Unauthorized", { status: 401 });
    }

    if (req.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const data = await req.json();
    const { email, phone_number, family_id, first_name, last_name, type, id } =
      data.record;

    console.log(id);

    if (type !== "primary") {
      return new Response("Not a primary family", { status: 200 });
    }

    const { data: familyData, error } = await supabase
      .from("family")
      .select("language")
      .eq("id", family_id)
      .single();

    if (error !== null) {
      console.error(error);
      Sentry.captureException(error);
      return new Response("failed to get family data", { status: 500 });
    }

    await hubspot.crm.contacts.batchApi.upsert({
      inputs: [
        {
          idProperty: "email",
          id: email,
          properties: {
            firstname: first_name,
            lastname: last_name,
            email: email,
            phone: phone_number,
            hs_language: familyData.language,
            cap_applicant_type: "cap_family",
            family_id: String(id),
          },
        },
      ],
    });

    return new Response(JSON.stringify({ message: "Ok" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in family-inserted function:", error);
    Sentry.captureException(error);
    return new Response("Internal Server Error", { status: 500 });
  }
});
