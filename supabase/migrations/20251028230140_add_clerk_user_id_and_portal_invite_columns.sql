-- Add columns to family table
ALTER TABLE family ADD COLUMN clerk_user_id TEXT;
ALTER TABLE family ADD COLUMN portal_invite_sent_at TIMESTAMPTZ;

-- Add columns to provider table
ALTER TABLE provider ADD COLUMN clerk_user_id TEXT;
ALTER TABLE provider ADD COLUMN portal_invite_sent_at TIMESTAMPTZ;
