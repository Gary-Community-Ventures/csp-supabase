-- Add training columns to provider table
ALTER TABLE public."provider"
ADD COLUMN "cpr_online_training_completed_at" timestamptz,
ADD COLUMN "child_safety_module_training_completed_at" timestamptz,
ADD COLUMN "safe_sleep_for_infants_training_completed_at" timestamptz,
ADD COLUMN "home_safety_and_injury_prevention_training_completed_at" timestamptz,
ADD COLUMN "cpr_certified" text;
