import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import * as Sentry from "npm:@sentry/deno";
import { Client } from "npm:@hubspot/api-client";

const sentryDsn = Deno.env.get("SENTRY_DSN");
const hubspotApiKey = Deno.env.get("HUBSPOT_API_KEY");

if (!hubspotApiKey) {
  throw new Error("Missing environment variables");
}

if (sentryDsn) {
  Sentry.init({ dsn: sentryDsn });
}

const hubspot = new Client({ accessToken: hubspotApiKey });

Deno.serve(async (req) => {
  try {
    if (req.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const data = await req.json();
    const {
      email,
      phone,
      first_name,
      last_name,
      type,
      preferred_language,
      id,
    } = data.record;
    console.log(id);

    const language =
      preferred_language.toLowerCase() === "español" ? "es" : "en";

    await hubspot.crm.contacts.batchApi.upsert({
      inputs: [
        {
          idProperty: "email",
          id: email,
          properties: {
            firstname: first_name,
            lastname: last_name,
            email: email,
            phone: phone,
            hs_language: language,
            cap_applicant_type: "cap_provider",
            cap_provider_licensed: type !== "ffn" ? "true" : "false",
            provider_id: String(id),
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
