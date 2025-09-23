-- Create looker_user role for local development
-- This role exists in production for Looker analytics/reporting
-- This file is only used locally and never pushed to production
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'looker_user') THEN
    CREATE ROLE looker_user;
  END IF;
END $$;