ALTER TABLE provider ADD COLUMN family_invited_at TIMESTAMPTZ;
ALTER TABLE provider ADD COLUMN rates_configured_at TIMESTAMPTZ;
ALTER TABLE provider ADD COLUMN payment_method_configured_at TIMESTAMPTZ;

ALTER TABLE family ADD COLUMN provider_invited_at TIMESTAMPTZ;
