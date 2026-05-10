ALTER TABLE usage_logs
    ADD COLUMN IF NOT EXISTS credit_cost DECIMAL(20,10) NOT NULL DEFAULT 0,
    ADD COLUMN IF NOT EXISTS balance_cost DECIMAL(20,10) NOT NULL DEFAULT 0,
    ADD COLUMN IF NOT EXISTS subscription_cost DECIMAL(20,10) NOT NULL DEFAULT 0;

COMMENT ON COLUMN usage_logs.credit_cost IS 'Actual cost deducted from users.credit_balance.';
COMMENT ON COLUMN usage_logs.balance_cost IS 'Actual cost deducted from users.balance.';
COMMENT ON COLUMN usage_logs.subscription_cost IS 'Actual cost deducted from subscription quota.';
