import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { Database } from "../_shared/types/supabase.ts";
import { M } from "./mappings.ts";
import * as Sentry from "npm:@sentry/deno";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseAnonKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const jotformApiKey = Deno.env.get("JOTFORM_API_KEY");
const sentryDsn = Deno.env.get("SENTRY_DSN");
const truvClientId = Deno.env.get("TRUV_CLIENT_ID");
const truvAccessSecret = Deno.env.get("TRUV_ACCESS_SECRET");

if (
  !supabaseUrl ||
  !supabaseAnonKey ||
  !jotformApiKey ||
  !sentryDsn ||
  !truvClientId ||
  !truvAccessSecret
) {
  throw new Error("Supabase URL and/or anon key not set");
}

if (sentryDsn) {
  Sentry.init({ dsn: sentryDsn });
}

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

Deno.serve(async (req) => {
  try {
    if (req.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const data = await req.formData();

    const submissionId = data.get("submissionID");
    console.log("Jotform ID:", submissionId);
    const rawRequest = data.get("rawRequest");

    if (submissionId === null || typeof submissionId !== "string") {
      return new Response("No submissionId found", { status: 400 });
    }

    if (rawRequest === null || typeof rawRequest !== "string") {
      return new Response("No rawRequest found", { status: 400 });
    }

    const jsonData = JSON.parse(rawRequest);

    const jotformRes = await fetch(
      `https://api.jotform.com/submission/${submissionId}?apiKey=${jotformApiKey}`,
    );
    const { content: jotformData } = await jotformRes.json();

    const getDocumentUrls = (questionNumber: number): string[] => {
      return jotformData.answers[questionNumber].answer;
    };

    let income = M.yearlyIncome.get(jsonData);
    if (M.incomeFrequency.get(jsonData) === "By Month") {
      const monthlyIncome = M.monthlyIncome.get(jsonData);
      if (monthlyIncome !== null) {
        income = monthlyIncome * 12;
      }
    }

    const primaryName = M.primaryGuardian.name.get(jsonData);
    const primaryAddress = M.primaryGuardian.address.get(jsonData);
    const secondaryName = M.secondaryGuardian.name.get(jsonData);
    const secondaryAddress = M.secondaryGuardian.address.get(jsonData);
    const firstChildName = M.firstChild.name.get(jsonData);
    const secondChildName = M.secondChild.name.get(jsonData);

    const { data: supabaseResponse, error } = await supabase
      .from("family_application")
      .insert({
        submission_id: submissionId,
        preferred_language: M.selectedLanguage.get(jsonData),
        referrer_cap_provider: M.providerName.get(jsonData),
        first_name_primary: primaryName.first,
        last_name_primary: primaryName.last,
        dob_primary:
          M.primaryGuardian.birthdate.get(jsonData)?.toISOString() ?? null,
        email_primary: M.primaryGuardian.email.get(jsonData),
        phone_primary: M.primaryGuardian.phone.get(jsonData),
        address_1_primary: primaryAddress.addr_line1,
        address_2_primary: primaryAddress.addr_line2,
        city_primary: primaryAddress.city,
        state_primary: primaryAddress.state,
        zip_primary: primaryAddress.postal,
        race_ethnicity_primary: M.primaryGuardian.raceOrEthnicity.get(jsonData),
        add_additional: M.hasSecondaryGuardian.get(jsonData),
        first_name_additional: secondaryName.first,
        last_name_additional: secondaryName.last,
        dob_additional:
          M.secondaryGuardian.birthdateParser.get(jsonData)?.toISOString() ??
          null,
        email_additional: M.secondaryGuardian.email.get(jsonData),
        phone_additional: M.secondaryGuardian.phone.get(jsonData),
        address_1_additional: secondaryAddress.addr_line1,
        address_2_additional: secondaryAddress.addr_line2,
        city_additional: secondaryAddress.city,
        state_additional: secondaryAddress.state,
        zip_additional: secondaryAddress.postal,
        race_ethnicity_additional:
          M.secondaryGuardian.raceOrEthnicity.get(jsonData),
        household_size: M.householdSize.get(jsonData),
        income_monthly_yearly: M.incomeFrequency.get(jsonData),
        income_yearly: income,
        assets_one_million: M.assetsOverMillion.get(jsonData),
        current_childcare_benefits: M.currentChildCarePrograms.get(jsonData),
        child_first_name_primary: firstChildName.first,
        child_last_name_primary: firstChildName.last,
        child_dob_primary:
          M.firstChild.birthdate.get(jsonData)?.toISOString() ?? null,
        child_receiving_care_primary:
          M.firstChild.currentlyReceivingCare.get(jsonData),
        child_current_care_primary: M.firstChild.typeOfCare.get(jsonData),
        child_satisfaction_current_care_primary:
          M.firstChild.satisfaction.get(jsonData),
        child_satisfaction_current_care_explanation_primary:
          M.firstChild.satisfactionExplanation.get(jsonData),
        child_starting_next_month_primary:
          M.firstChild.childCareStartingNextMonth.get(jsonData),
        child_hours_per_week_primary: M.firstChild.childCareNeeds.get(jsonData),
        child_care_length_primary: M.firstChild.childCarePeriod.get(jsonData),
        child_race_ethnicity_primary:
          M.firstChild.raceOrEthnicity.get(jsonData),
        child_language_primary: M.firstChild.language.get(jsonData),
        additional_child: M.hasSecondChild.get(jsonData),
        child_first_name_additional: secondChildName.first,
        child_last_name_additional: secondChildName.last,
        child_dob_additional:
          M.secondChild.birthdate.get(jsonData)?.toISOString() ?? null,
        child_receiving_care_additional:
          M.secondChild.currentlyReceivingCare.get(jsonData),
        child_current_care_additional: M.secondChild.typeOfCare.get(jsonData),
        child_satisfaction_current_care_additional:
          M.secondChild.satisfaction.get(jsonData),
        child_satisfaction_current_care_explanation_additional:
          M.secondChild.satisfactionExplanation.get(jsonData),
        child_starting_next_month_additional:
          M.secondChild.childCareStartingNextMonth.get(jsonData),
        child_hours_per_week_additional:
          M.secondChild.childCareNeeds.get(jsonData),
        child_care_length_additional:
          M.secondChild.childCarePeriod.get(jsonData),
        child_race_ethnicity_additional:
          M.secondChild.raceOrEthnicity.get(jsonData),
        child_language_additional: M.secondChild.language.get(jsonData),
        "current_benefits_pre-eligibility":
          M.currentBenefitsPrograms.get(jsonData),
        tc_responsible_for_finding_care:
          M.agreements.responsibleForFindingCare.get(jsonData),
        tc_dependent_on_CAP_approval:
          M.agreements.dependentOnCapApproval.get(jsonData),
        tc_change_providers: M.agreements.changeProviders.get(jsonData),
        tc_terms_and_conditions: M.agreements.termsAndConditions.get(jsonData),
        tc_privacy_policy: M.agreements.privacyPolicy.get(jsonData),
        tc_TCPA: M.agreements.tcpa.get(jsonData),
        photo_release: M.agreements.photoRelease.get(jsonData),
        timer: M.timer.get(jsonData),
        link_id: M.linkId.get(jsonData),
        submission_ip: jotformData.ip,
        submitted_at: jotformData.created_at,
        last_update_date: jotformData.updated_at,
        signature: jotformData.answers[144].answer,
        proof_of_residence: getDocumentUrls(123),
        verification_child_age: getDocumentUrls(122),
        proof_of_income: getDocumentUrls(63),
        current_benefits_proof: getDocumentUrls(62),
      })
      .select(
        `id, tc_terms_and_conditions,
         phone_primary, email_primary, first_name_primary, last_name_primary,
         add_additional, phone_additional, email_additional, first_name_additional, last_name_additional`,
      );

    if (error !== null) {
      console.error(error);
      Sentry.captureException(error);
      return new Response("failed to insert data", { status: 500 });
    }

    if (supabaseResponse === null || supabaseResponse.length === 0) {
      return new Response("failed to get Supabase ID", { status: 500 });
    }

    const supabaseData = supabaseResponse[0];

    if (!supabaseData.tc_terms_and_conditions) {
      return new Response("Success", { status: 200 });
    }

    const truvOrders: {
      products: string[];
      order_number: string;
      first_name: string | undefined;
      last_name: string | undefined;
      email: string | undefined;
      phone?: string;
    }[] = [
      {
        products: ["income"],
        order_number: `${supabaseData.id}-primary`,
        first_name: supabaseData.first_name_primary ?? undefined,
        last_name: supabaseData.last_name_primary ?? undefined,
        email: supabaseData.email_primary ?? undefined,
        phone: supabaseData.phone_primary ?? undefined,
      },
    ];

    if (supabaseData.add_additional) {
      truvOrders.push({
        products: ["income"],
        order_number: `${supabaseData.id}-additional`,
        first_name: supabaseData.first_name_additional ?? undefined,
        last_name: supabaseData.last_name_additional ?? undefined,
        email: supabaseData.email_additional ?? undefined,
      });
    }

    for (let i = 0; i < truvOrders.length; i++) {
      const order = truvOrders[i];
      const res = await fetch("https://prod.truv.com/v1/orders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Access-Client-Id": truvClientId,
          "X-Access-Secret": truvAccessSecret,
        },
        body: JSON.stringify(order),
      });

      const truvResponse = await res.json();
      const { user_id: userId } = truvResponse;

      const dbField = i === 0 ? "truv_id_primary" : "truv_id_additional";
      console.log(`Truv ID (${dbField}):`, userId);

      const { error: truvSupabaseError } = await supabase
        .from("family_application")
        .update({ [dbField]: userId })
        .eq("id", supabaseData.id);

      if (truvSupabaseError !== null) {
        console.error(error);
        Sentry.captureException(error);
        return new Response("failed to update truv_id data", { status: 500 });
      }
    }

    return new Response("Success", { status: 200 });
  } catch (error) {
    console.error("Error in jotform-family function:", error);
    Sentry.captureException(error);
    return new Response("Internal Server Error", { status: 500 });
  }
});
