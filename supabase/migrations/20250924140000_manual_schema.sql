-- Types
DO $$ BEGIN CREATE TYPE public."Language" AS ENUM ('en', 'es'); EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN CREATE TYPE public."Status" AS ENUM ('Approved', 'Not Eligible', 'Pending', 'Hold', 'Duplicate', 'Waitlist'); EXCEPTION WHEN duplicate_object THEN null; END $$;
DO $$ BEGIN CREATE TYPE public."Provider Type" AS ENUM ('ffn', 'center', 'lhb'); EXCEPTION WHEN duplicate_object THEN null; END $$;

-- Tables based on seed file structure

CREATE TABLE public."family" (
  "id" bigint PRIMARY KEY,
  "language" public."Language" NOT NULL DEFAULT 'en'
);

CREATE TABLE public."guardian" (
  "id" bigint PRIMARY KEY,
  "type" text NOT NULL,
  "family_id" bigint REFERENCES public."family"(id),
  "first_name" text,
  "last_name" text,
  "email" text,
  "phone_number" text,
  "address_1" text,
  "address_2" text,
  "city" text,
  "state" text,
  "zip" text
);

CREATE TABLE public."child" (
  "id" bigint PRIMARY KEY,
  "family_id" bigint REFERENCES public."family"(id),
  "first_name" text,
  "last_name" text,
  "monthly_allocation" numeric NOT NULL DEFAULT 0,
  "prorated_allocation" numeric NOT NULL DEFAULT 0,
  "status" public."Status" NOT NULL DEFAULT 'Pending',
  "payment_enabled" boolean NOT NULL DEFAULT false
);

CREATE TABLE public."provider" (
  "id" bigint PRIMARY KEY,
  "name" text,
  "first_name" text,
  "last_name" text,
  "email" text,
  "phone" text,
  "care_location_address_1" text,
  "care_location_address_2" text,
  "care_location_city" text,
  "care_location_state" text,
  "care_location_zip" text,
  "preferred_language" public."Language" NOT NULL DEFAULT 'en',
  "status" public."Status" NOT NULL DEFAULT 'Pending',
  "type" public."Provider Type",
  "payment_enabled" boolean NOT NULL DEFAULT false,
  "cpr_training_link" text
);

CREATE TABLE public."provider_child_mapping" (
  "provider_id" bigint REFERENCES public."provider"(id),
  "child_id" bigint REFERENCES public."child"(id),
  PRIMARY KEY ("provider_id", "child_id")
);

-- Enable Row Level Security
ALTER TABLE public."family" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."guardian" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."child" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."provider" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."provider_child_mapping" ENABLE ROW LEVEL SECURITY;

-- Service role policies (allows backend/edge functions to bypass RLS)
CREATE POLICY "Service role full access" ON public."family" FOR ALL TO service_role USING (true);
CREATE POLICY "Service role full access" ON public."guardian" FOR ALL TO service_role USING (true);
CREATE POLICY "Service role full access" ON public."child" FOR ALL TO service_role USING (true);
CREATE POLICY "Service role full access" ON public."provider" FOR ALL TO service_role USING (true);
CREATE POLICY "Service role full access" ON public."provider_child_mapping" FOR ALL TO service_role USING (true);
