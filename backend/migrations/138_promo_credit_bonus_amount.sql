ALTER TABLE promo_codes
    ADD COLUMN IF NOT EXISTS credit_bonus_amount DECIMAL(20,8) NOT NULL DEFAULT 0;

ALTER TABLE promo_code_usages
    ADD COLUMN IF NOT EXISTS credit_bonus_amount DECIMAL(20,8) NOT NULL DEFAULT 0;

COMMENT ON COLUMN promo_codes.credit_bonus_amount IS 'Promo code granted credit balance amount.';
COMMENT ON COLUMN promo_code_usages.credit_bonus_amount IS 'Actual credit balance amount granted by promo code usage.';
