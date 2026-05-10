package service

import (
	"context"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/pkg/pagination"
)

const (
	CreditLedgerEntryTypeAdminSet            = "admin_set"
	CreditLedgerEntryTypeAdminAdd            = "admin_add"
	CreditLedgerEntryTypeAdminSubtract       = "admin_subtract"
	CreditLedgerEntryTypeUsageDeduct         = "usage_deduct"
	CreditLedgerEntryTypeRedeemGrant         = "redeem_grant"
	CreditLedgerEntryTypePromoGrant          = "promo_grant"
	CreditLedgerEntryTypeRefundRollback      = "refund_rollback"
	CreditLedgerEntryTypeMigrationAdjustment = "migration_adjustment"
)

const (
	CreditLedgerSourceAdmin        = "admin"
	CreditLedgerSourceUsageBilling = "usage_billing"
	CreditLedgerSourceRedeem       = "redeem"
	CreditLedgerSourcePromo        = "promo"
	CreditLedgerSourceRefund       = "refund"
	CreditLedgerSourceSystem       = "system"
)

type CreditLedgerEntry struct {
	ID             int64
	UserID         int64
	Amount         float64
	BalanceBefore  float64
	BalanceAfter   float64
	EntryType      string
	Source         string
	OperatorUserID *int64
	RequestID      *string
	APIKeyID       *int64
	UsageLogID     *int64
	AccountID      *int64
	GroupID        *int64
	SubscriptionID *int64
	IdempotencyKey *string
	Notes          *string
	Metadata       map[string]any
	CreatedAt      time.Time
	UpdatedAt      time.Time
}

type CreditLedgerListFilter struct {
	UserID    int64
	EntryType string
	Source    string
}

type CreateCreditLedgerEntryInput struct {
	UserID         int64
	Amount         float64
	BalanceBefore  float64
	BalanceAfter   float64
	EntryType      string
	Source         string
	OperatorUserID *int64
	RequestID      *string
	APIKeyID       *int64
	UsageLogID     *int64
	AccountID      *int64
	GroupID        *int64
	SubscriptionID *int64
	IdempotencyKey *string
	Notes          *string
	Metadata       map[string]any
}

type CreditLedgerRepository interface {
	Create(ctx context.Context, input CreateCreditLedgerEntryInput) (*CreditLedgerEntry, error)
	List(ctx context.Context, params pagination.PaginationParams, filter CreditLedgerListFilter) ([]CreditLedgerEntry, *pagination.PaginationResult, error)
}
