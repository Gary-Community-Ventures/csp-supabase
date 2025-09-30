-- Add pdis training columns to provider table
ALTER TABLE public."provider"
ADD COLUMN "pdis_first_aid_cpr_completed_at" timestamptz,
ADD COLUMN "pdis_standard_precautions_completed_at" timestamptz,
ADD COLUMN "pdis_preventing_child_abuse_completed_at" timestamptz,
ADD COLUMN "pdis_infant_safe_sleep_completed_at" timestamptz,
ADD COLUMN "pdis_emergency_preparedness_completed_at" timestamptz,
ADD COLUMN "pdis_injury_prevention_completed_at" timestamptz,
ADD COLUMN "pdis_preventing_shaken_baby_completed_at" timestamptz,
ADD COLUMN "pdis_recognizing_impact_of_bias_completed_at" timestamptz,
ADD COLUMN "pdis_medication_administration_part_one_completed_at" timestamptz;