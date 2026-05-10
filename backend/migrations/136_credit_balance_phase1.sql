-- Phase 1 credit balance backend loop.

ALTER TABLE users
    ADD COLUMN IF NOT EXISTS credit_balance DECIMAL(20,8) NOT NULL DEFAULT 0;

ALTER TABLE groups
    ADD COLUMN IF NOT EXISTS subscription_credit_fallback_enabled BOOLEAN NULL;

ALTER TABLE usage_logs
    ADD COLUMN IF NOT EXISTS billing_source VARCHAR(32) NOT NULL DEFAULT '';

INSERT INTO settings (key, value)
VALUES ('subscription_credit_fallback_enabled', 'false')
ON CONFLICT (key) DO NOTHING;

COMMENT ON COLUMN users.credit_balance IS 'Platform granted credit balance; wallet billing consumes this before balance.';
COMMENT ON COLUMN groups.subscription_credit_fallback_enabled IS 'Nullable group override for subscription over-limit fallback to credit balance. NULL inherits the global setting.';
COMMENT ON COLUMN usage_logs.billing_source IS 'Actual charge source: subscription, credit_balance, balance, mixed, or subscription_credit_fallback.';
