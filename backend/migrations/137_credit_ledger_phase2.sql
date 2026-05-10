-- Phase 2 credit ledger for credit_balance auditability.

CREATE TABLE IF NOT EXISTS user_credit_ledger (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    amount DECIMAL(20,8) NOT NULL,
    balance_before DECIMAL(20,8) NOT NULL,
    balance_after DECIMAL(20,8) NOT NULL,
    entry_type VARCHAR(32) NOT NULL,
    source VARCHAR(16) NOT NULL DEFAULT 'system',
    operator_user_id BIGINT NULL REFERENCES users(id) ON DELETE SET NULL,
    request_id VARCHAR(255) NULL,
    api_key_id BIGINT NULL REFERENCES api_keys(id) ON DELETE SET NULL,
    usage_log_id BIGINT NULL REFERENCES usage_logs(id) ON DELETE SET NULL,
    account_id BIGINT NULL REFERENCES accounts(id) ON DELETE SET NULL,
    group_id BIGINT NULL REFERENCES groups(id) ON DELETE SET NULL,
    subscription_id BIGINT NULL REFERENCES user_subscriptions(id) ON DELETE SET NULL,
    idempotency_key VARCHAR(255) NULL,
    notes TEXT NULL,
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_user_credit_ledger_user_created
    ON user_credit_ledger(user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_user_credit_ledger_request_api_key
    ON user_credit_ledger(request_id, api_key_id);

CREATE INDEX IF NOT EXISTS idx_user_credit_ledger_usage_log_id
    ON user_credit_ledger(usage_log_id);

CREATE INDEX IF NOT EXISTS idx_user_credit_ledger_entry_type_created
    ON user_credit_ledger(entry_type, created_at DESC);

CREATE UNIQUE INDEX IF NOT EXISTS uq_user_credit_ledger_usage_entry
    ON user_credit_ledger(request_id, api_key_id, entry_type)
    WHERE request_id IS NOT NULL
      AND api_key_id IS NOT NULL
      AND entry_type IN ('usage_deduct', 'usage_refund');

COMMENT ON TABLE user_credit_ledger IS 'Credit balance ledger for audit and user-visible credit history.';
COMMENT ON COLUMN user_credit_ledger.amount IS 'Signed amount: positive = grant, negative = deduct.';
COMMENT ON COLUMN user_credit_ledger.entry_type IS 'admin_set|admin_add|admin_subtract|usage_deduct|redeem_grant|promo_grant|refund_rollback|migration_adjustment';
COMMENT ON COLUMN user_credit_ledger.source IS 'admin|usage_billing|redeem|promo|refund|system';
