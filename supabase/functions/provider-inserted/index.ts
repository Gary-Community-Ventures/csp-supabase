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
const tazApiKey = Deno.env.get("TAZ_API_KEY");
const tazHost = Deno.env.get("TAZ_HOST");
const tazClientId = Deno.env.get("TAZ_CLIENT_ID");
const tazEnglishProductId = Deno.env.get("TAZ_ENGLISH_PRODUCT_ID");
const tazSpanishProductId = Deno.env.get("TAZ_SPANISH_PRODUCT_ID");

if (
  !supabaseUrl ||
  !supabaseAnonKey ||
  !hubspotApiKey ||
  !tazApiKey ||
  !tazHost ||
  !tazClientId ||
  !tazEnglishProductId ||
  !tazSpanishProductId
) {
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
    const {
      email, // both
      phone, // both
      first_name, // both
      last_name, // both
      type, // both
      preferred_language, // both
      id, // both
      other_adults: other_adults_raw, // background check
    } = data.record;

    console.log(id);

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
            hs_language: preferred_language,
            cap_applicant_type: "cap_provider",
            cap_provider_licensed: type !== "ffn" ? "true" : "false",
            provider_id: String(id),
          },
        },
      ],
    });

    if (type !== "ffn") {
      return new Response(JSON.stringify({ message: "Ok" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const applicants: {
      applicantData: {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber?: string;
        textingEnabled?: true;
      };
      id: string;
    }[] = [];
    applicants.push({
      applicantData: {
        firstName: first_name,
        lastName: last_name,
        email: email,
        phoneNumber: `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`,
        textingEnabled: true,
      },
      id: `${id}-0`,
    });

    const otherAdults = other_adults_raw ?? [];
    for (let i = 0; i < otherAdults.length; i++) {
      const otherAdult = otherAdults[i];
      applicants.push({
        applicantData: {
          firstName: otherAdult["First Name"],
          lastName: otherAdult["Last Name"],
          email: otherAdult["Email"],
        },
        id: `${id}-${i}`,
      });
    }

    const applicantUrl = `${tazHost}/v1/clients/${tazClientId}/applicants`;
    const orderUrl = `${tazHost}/v1/clients/${tazClientId}/orders`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tazApiKey}`,
    };
    let productId = tazEnglishProductId;
    if (preferred_language === "es") {
      productId = tazSpanishProductId;
    }

    const applicantIds: string[] = [];
    const backgroundCheckLinks: string[] = [];
    const fileNumbers: string[] = [];
    const orderIds: string[] = [];
    try {
      for (const applicant of applicants) {
        const applicantRes = await fetch(applicantUrl, {
          headers: headers,
          method: "POST",
          body: JSON.stringify(applicant.applicantData),
        });

        const applicantData = await applicantRes.json();
        console.log(applicantData);

        const applicantId = applicantData.applicantGuid;
        applicantIds.push(applicantId);

        const orderRes = await fetch(orderUrl, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({
            applicantGuid: applicantId,
            clientProductGuid: productId,
            useQuickApp: true,
            externalIdentifier: applicant.id,
            quickappNotifyApplicants: "true",
          }),
        });
        const orderData = await orderRes.json();
        console.log(orderData);

        backgroundCheckLinks.push(orderData.quickappApplicantLink);
        fileNumbers.push(orderData.fileNumber);
        orderIds.push(orderData.orderGuid);
      }
    } catch (error) {
      console.error("Error in provider-inserted function:", error);
      Sentry.captureException(error);
      return new Response("Internal Server Error", { status: 500 });
    }

    const adminLinks = fileNumbers.map(
      (fileNumber) =>
        `https://www.jdpalatine.net/workspace/results.taz?file=${fileNumber}`,
    );

    const { error } = await supabase
      .from("provider")
      .update({
        background_check_links: backgroundCheckLinks,
        jdp_applicant_ids: applicantIds,
        jdp_order_ids: orderIds,
        jdp_file_numbers: fileNumbers,
        jdp_admin_links: adminLinks,
      })
      .eq("id", id);

    if (error) {
      console.error(error);
      Sentry.captureException(error);
      return new Response("failed to insert provider background check links", {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ message: "Ok" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in provider-inserted function:", error);
    Sentry.captureException(error);
    return new Response("Internal Server Error", { status: 500 });
  }
});
