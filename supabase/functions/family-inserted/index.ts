import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import * as Sentry from "npm:@sentry/deno";
import { createClient } from "npm:@supabase/supabase-js@2";
import { Database } from "../_shared/types/supabase.ts";
import { isAuthorized } from "../_shared/auth.ts";
import { Client } from "npm:@hubspot/api-client";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const sentryDsn = Deno.env.get("SENTRY_DSN");
const hubspotApiKey = Deno.env.get("HUBSPOT_API_KEY");

if (!supabaseUrl || !supabaseServiceKey || !hubspotApiKey) {
  throw new Error("Missing environment variables");
}

if (sentryDsn) {
  Sentry.init({ dsn: sentryDsn });
}

const supabase = createClient<Database>(supabaseUrl, supabaseServiceKey);
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

    console.log(data);
    let family_id = null;
    if (data.table === "family") {
      family_id = data.record.id;
    } else {
      family_id = data.record.family_id;
    }

    console.log(family_id);

    if (!family_id) {
      const message = `No family id found for ${data.table} on ${data.type}`;
      console.error(message);
      Sentry.captureException(message);
      return new Response("failed to get family id", { status: 500 });
    }

    const { data: familyData, error } = await supabase
      .from("family")
      .select(
        "language, submission_id, tc_tcpa, custom_message, submission_id, first_payment_sent_at, child(status, first_name, last_name, monthly_allocation, prorated_allocation), guardian(email, phone_number, family_id, first_name, last_name, type, id)",
      )
      .eq("id", family_id)
      .single();

    if (error !== null) {
      console.error(error);
      Sentry.captureException(error);
      return new Response("failed to get family data", { status: 500 });
    }

    let guardian = null;
    for (const guardianData of familyData.guardian) {
      if (guardianData.type === "primary") {
        guardian = guardianData;
      }
      break;
    }

    if (guardian === null || guardian.email === null) {
      console.error("No primary guardian found");
      Sentry.captureException(error);
      return new Response("failed to get family data", { status: 500 });
    }

    await hubspot.crm.contacts.batchApi.upsert({
      inputs: [
        {
          idProperty: "email",
          id: guardian.email,
          properties: {
            firstname: guardian.first_name ?? "",
            lastname: guardian.last_name ?? "",
            email: guardian.email,
            phone: guardian.phone_number ?? "",
            hs_language: familyData.language,
            cap_applicant_type: "cap_family",
            family_id: familyData.submission_id ?? "",
            // @ts-ignore - hubspot type is wrong have a field for this
            cap___tcpa__family_: familyData.tc_tcpa,
            cap___child1_status: familyData.child[0]?.status ?? "",
            cap___child2_status: familyData.child[1]?.status ?? "",
            cap___parent_user_message: familyData.custom_message ?? "",
            cap___child1_name: `${familyData.child[0]?.first_name} ${familyData.child[0]?.last_name}`,
            cap___child2_name: `${familyData.child[1]?.first_name} ${familyData.child[1]?.last_name}`,
            // @ts-ignore - hubspot type is wrong have a field for this
            cap___child1_monthly_allocation:
              familyData.child[0]?.monthly_allocation ?? "",
            // @ts-ignore - hubspot type is wrong have a field for this
            cap___child2_monthly_allocation:
              familyData.child[1]?.monthly_allocation ?? "",
            // @ts-ignore - hubspot type is wrong have a field for this
            cap___child1_prorated_allocation:
              familyData.child[0]?.prorated_allocation ?? "",
            // @ts-ignore - hubspot type is wrong have a field for this
            cap___child2_prorated_allocation:
              familyData.child[1]?.prorated_allocation ?? "",
            // @ts-ignore - hubspot type is wrong have a field for this
            cap__family_payment_first_made_date:
              familyData.first_payment_sent_at,
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
