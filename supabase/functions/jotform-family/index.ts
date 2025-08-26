import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { Database } from "../_shared/types/supabase.ts";
import { M } from "./mappings.ts";

// Initialize Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseAnonKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const jotformApiKey = Deno.env.get("JOTFORM_API_KEY");

if (!supabaseUrl || !supabaseAnonKey || !jotformApiKey) {
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
  const submissionId = data.get("submissionID");

  if (rawRequest === null || typeof rawRequest !== "string") {
    return new Response("No rawRequest found", { status: 400 });
  }

  const jsonData = JSON.parse(rawRequest);
  console.log(submissionId);

  // TODO: documents, ip address, submission url, edit url, and last update date
  const jotformRes = await fetch(
    `https://api.jotform.com/submission/${submissionId}?apiKey=${jotformApiKey}`,
  );

  console.log(await jotformRes.clone().text());
  const { content: jotformData } = await jotformRes.json();

  const getDocumentUrl = (questionNumber: number): string[] =>
    jotformData.answers[questionNumber].answers;

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

  const { error } = await supabase.from("family_application").insert({
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
      M.secondaryGuardian.birthdateParser.get(jsonData)?.toISOString() ?? null,
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
    // child_starting_next_month_primary: // TODO: fix this
    //   M.firstChild.childCareNeeds.get(jsonData),
    child_hours_per_week_primary: M.firstChild.childCarePeriod.get(jsonData),
    child_race_ethnicity_primary: M.firstChild.raceOrEthnicity.get(jsonData),
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
      M.secondChild.childCareNeeds.get(jsonData),
    child_hours_per_week_additional:
      M.secondChild.childCarePeriod.get(jsonData),
    child_care_length_additional: M.secondChild.childCarePeriod.get(jsonData),
    child_race_ethnicity_additional:
      M.secondChild.raceOrEthnicity.get(jsonData),
    child_language_additional: M.secondChild.language.get(jsonData),
    "current_benefits_pre-eligibility": M.currentBenefitsPrograms.get(jsonData),
    tc_responsible_for_finding_care:
      M.agreements.responsibleForFindingCare.get(jsonData),
    tc_dependent_on_CAP_approval:
      M.agreements.dependentOnCapApproval.get(jsonData),
    tc_change_providers: M.agreements.changeProviders.get(jsonData),
    tc_terms_and_conditions: M.agreements.termsAndConditions.get(jsonData),
    tc_privacy_policy: M.agreements.privacyPolicy.get(jsonData),
    tc_TCPA: M.agreements.tcpa.get(jsonData),
    photo_release: M.agreements.photoRelease.get(jsonData),
    link_id: M.linkId.get(jsonData),
    submission_ip: jotformData.ip,
    submitted_at: jotformData.created_at,
    last_update_date: jotformData.updated_at,
    signature: jotformData.answers[144].answer,
    proof_of_residence: getDocumentUrl(123),
    verification_child_age: getDocumentUrl(122),
    proof_of_income: getDocumentUrl(63),
    current_benefits_proof: getDocumentUrl(62),
  });

  if (error !== null) {
    console.error(error);
    return new Response("failed to insert data", { status: 500 });
  }

  return new Response(JSON.stringify(jsonData), {
    headers: { "Content-Type": "application/json" },
  });
});
