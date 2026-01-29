DO $$ BEGIN
  CREATE TYPE public."DevelopmentStatus" AS ENUM ('Not Started', 'Making Progress', 'Achieved');
EXCEPTION WHEN duplicate_object THEN null;
END $$;

CREATE TABLE public."development_response" (
  "id" bigserial PRIMARY KEY,
  "child_id" bigint NOT NULL REFERENCES public."child"(id) ON DELETE CASCADE,
  "question_id" varchar(20) NOT NULL,
  "age_group_months" integer NOT NULL,
  "status" public."DevelopmentStatus" NOT NULL DEFAULT 'Not Started',
  "created_at" timestamptz DEFAULT NOW(),
  UNIQUE("child_id", "question_id")
);

CREATE INDEX idx_development_response_child_id ON public."development_response"("child_id");
CREATE INDEX idx_development_response_age_group ON public."development_response"("child_id", "age_group_months");

ALTER TABLE public."development_response" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role full access" ON public."development_response" FOR ALL TO service_role USING (true);
