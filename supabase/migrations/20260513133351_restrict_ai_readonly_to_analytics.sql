-- Tightens ai_readonly so it can query analytics views but not raw public tables.
--
-- This should be run by a role that can alter grants/default privileges.

BEGIN;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'ai_readonly') THEN
    CREATE ROLE ai_readonly NOLOGIN;
  END IF;
END $$;

REVOKE ALL ON SCHEMA public FROM ai_readonly;
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM ai_readonly;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA public FROM ai_readonly;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  REVOKE SELECT ON TABLES FROM ai_readonly;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  REVOKE SELECT ON SEQUENCES FROM ai_readonly;

GRANT USAGE ON SCHEMA analytics TO ai_readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA analytics TO ai_readonly;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA analytics
  GRANT SELECT ON TABLES TO ai_readonly;

ALTER ROLE ai_readonly SET statement_timeout = '15s';
ALTER ROLE ai_readonly SET idle_in_transaction_session_timeout = '30s';
ALTER ROLE ai_readonly SET lock_timeout = '5s';
ALTER ROLE ai_readonly SET search_path = analytics;

COMMIT;
