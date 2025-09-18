import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { Database } from "../_shared/types/supabase.ts";
import { M } from "./mappings.ts";
import * as Sentry from "npm:@sentry/deno";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseAnonKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const jotformApiKey = Deno.env.get("JOTFORM_API_KEY");
const sentryDsn = Deno.env.get("SENTRY_DSN");

if (!supabaseUrl || !supabaseAnonKey || !jotformApiKey) {
  throw new Error("Missing environment variables");
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
    console.log(submissionId);
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

    const name = M.name.get(jsonData);
    const gpqcAttestation = M.selfAttestation.gpqc.get(jsonData);
    const hsceAttestation = M.selfAttestation.hsce.get(jsonData);
    const ccprAttestation = M.selfAttestation.ccpr.get(jsonData);
    const carAttestation = M.selfAttestation.car.get(jsonData);

    const notLicensedHomeAddress = M.addresses.notLicensedHome.get(jsonData);

    const licenseAddress = M.addresses.licensed.get(jsonData);
    const notLicensedCareAddress = M.addresses.notLicensedCare.get(jsonData);

    let careAddress = notLicensedCareAddress;
    if (M.isLicensed.get(jsonData)) {
      careAddress = licenseAddress;
    } else if (M.careSetting.get(jsonData) === "My Home") {
      careAddress = notLicensedHomeAddress;
    }

    const { error } = await supabase.from("provider_application").insert({
      submission_id: submissionId,
      preferred_language: M.preferredLanguage.get(jsonData),
      referrer_cap_family: M.familyName.get(jsonData),
      licensed: M.isLicensed.get(jsonData),
      license_name: M.licenseName.get(jsonData),
      license_number: M.licenseNumber.get(jsonData),
      license_type: M.licenseType.get(jsonData),
      first_name: name.first,
      last_name: name.last,
      email: M.email.get(jsonData),
      phone: M.phone.get(jsonData),
      care_location_address_1: careAddress.addr_line1,
      care_location_address_2: careAddress.addr_line2,
      care_location_city: careAddress.city,
      care_location_state: careAddress.state,
      care_location_zip: careAddress.postal,
      address_1: notLicensedHomeAddress.addr_line1,
      address_2: notLicensedHomeAddress.addr_line2,
      city: notLicensedHomeAddress.city,
      state: notLicensedHomeAddress.state,
      zip: notLicensedHomeAddress.postal,
      cares_for_disabled: M.caresForDisabled.get(jsonData),
      ssn_or_itin: M.hasSsnOrItin.get(jsonData),
      care_setting: M.careSetting.get(jsonData),
      related_to_some_children: M.relatedToSomeChildren.get(jsonData),
      related_to_relationship: M.relatedToRelationship.get(jsonData),
      related_to_all_children: M.relatedToAllChildren.get(jsonData),
      number_of_children: M.numberOfChildren.get(jsonData),
      children_under_2: M.childrenUnder2.get(jsonData),
      cpr_certified: M.cprCertified.get(jsonData),
      other_adults: M.otherAdults.get(jsonData),
      pay_types: M.payTypes.get(jsonData),
      pay_rate: M.payRate.get(jsonData),
      pay_per_month: M.payMonth.get(jsonData),
      satisfaction_current_pay: M.currentPaySatisfaction.get(jsonData),
      satisfaction_current_experience:
        M.currentExperienceSatisfaction.get(jsonData),
      satisfaction_current_experience_explanation:
        M.currentExperienceExplanation.get(jsonData),
      "monthly_rate_0-18": M.monthlyRate0To18Months.get(jsonData),
      "monthly_rate_19-36": M.monthyRate19To36Months.get(jsonData),
      accepted_forms_of_payment: M.acceptedFormsOfPayment.get(jsonData),
      attendance_tracking_system: M.attendanceTracking.get(jsonData),
      when_families_pay: M.whenFamiliesPay.get(jsonData),
      current_benefits: M.currentBenefits.get(jsonData),
      benefits_impact_follow_up: M.benefitsImpactFollowUp.get(jsonData),
      gpqc_capabilities: gpqcAttestation[0],
      gpqc_experienced: gpqcAttestation[1],
      gpqc_punishment: gpqcAttestation[2],
      gpqc_parental_access: gpqcAttestation[3],
      gpqc_children_removed: gpqcAttestation[4],
      hsce_working_detectors: hsceAttestation[0],
      hsce_communicable_diseases: hsceAttestation[1],
      hsce_play_areas: hsceAttestation[2],
      hsce_protect_from_dangers: hsceAttestation[3],
      hsce_disasters: hsceAttestation[4],
      hsce_emergencies: hsceAttestation[5],
      ccpr_meals: ccprAttestation[0],
      ccpr_activities: ccprAttestation[1],
      ccpr_medications: ccprAttestation[2],
      ccpr_materials_and_equipment: ccprAttestation[3],
      ccpr_transportation: ccprAttestation[4],
      car_immediately_report: carAttestation[0],
      car_failure_to_report: carAttestation[1],
      tc_read_form: M.agreements.readForm.get(jsonData),
      tc_asked_questions: M.agreements.askedQuestions.get(jsonData),
      tc_accurate_and_truthful: M.agreements.acurateAndTruthful.get(jsonData),
      tc_background_check: M.agreements.backgroundCheck.get(jsonData),
      tc_voluntary_participation:
        M.agreements.voluntaryParticipation.get(jsonData),
      tc_terms_and_conditions: M.agreements.termsAndConditions.get(jsonData),
      tc_privacy_policy: M.agreements.privacyPolicy.get(jsonData),
      tc_tcpa: M.agreements.tcpa.get(jsonData),
      time_tracker: M.timeTracker.get(jsonData),
      link_id: M.linkId.get(jsonData),
      submission_ip: jotformData.ip,
      application_submitted_at: jotformData.created_at,
      last_update_date: jotformData.updated_at,
      attestation_signature: jotformData.answers[119].answer,
      signature: jotformData.answers[131].answer,
      w9: getDocumentUrls(132),
      cpr_upload: getDocumentUrls(153),
      id_upload: getDocumentUrls(186), 
    });

    if (error !== null) {
      console.error(error);
      Sentry.captureException(error);
      return new Response("failed to insert provider data", { status: 500 });
    }

    return new Response(JSON.stringify(jsonData), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in jotform-providers function:", error);
    Sentry.captureException(error);
    return new Response("Internal Server Error", { status: 500 });
  }
});
