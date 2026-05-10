//go:build unit

package service

import (
	"testing"
)

// TestBuildUsageBillingCommand_SubscriptionAppliesRateMultiplier locks in the fix
// that subscription-mode billing honours the group (and any user-specific) rate
// multiplier — i.e. cmd.SubscriptionCost tracks ActualCost (= TotalCost *
// RateMultiplier), not raw TotalCost.
func TestBuildUsageBillingCommand_SubscriptionAppliesRateMultiplier(t *testing.T) {
	t.Parallel()

	groupID := int64(7)
	subID := int64(42)

	tests := []struct {
		name             string
		totalCost        float64
		actualCost       float64
		isSubscription   bool
		isCreditFallback bool
		wantSub          float64
		wantBalance      float64
		wantCredit       float64
	}{
		{
			name:           "subscription with 2x multiplier consumes 2x quota",
			totalCost:      1.0,
			actualCost:     2.0,
			isSubscription: true,
			wantSub:        2.0,
			wantBalance:    0,
			wantCredit:     0,
		},
		{
			name:           "subscription with 0.5x multiplier consumes 0.5x quota",
			totalCost:      1.0,
			actualCost:     0.5,
			isSubscription: true,
			wantSub:        0.5,
			wantBalance:    0,
			wantCredit:     0,
		},
		{
			name:           "free subscription (multiplier 0) consumes no quota",
			totalCost:      1.0,
			actualCost:     0,
			isSubscription: true,
			wantSub:        0,
			wantBalance:    0,
			wantCredit:     0,
		},
		{
			name:           "balance billing keeps using ActualCost (regression)",
			totalCost:      1.0,
			actualCost:     2.0,
			isSubscription: false,
			wantSub:        0,
			wantBalance:    2.0,
			wantCredit:     0,
		},
		{
			name:             "subscription credit fallback uses credit balance only",
			totalCost:        1.0,
			actualCost:       2.0,
			isSubscription:   false,
			isCreditFallback: true,
			wantSub:          0,
			wantBalance:      0,
			wantCredit:       2.0,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			p := &postUsageBillingParams{
				Cost:                         &CostBreakdown{TotalCost: tt.totalCost, ActualCost: tt.actualCost},
				User:                         &User{ID: 1},
				APIKey:                       &APIKey{ID: 2, GroupID: &groupID},
				Account:                      &Account{ID: 3},
				Subscription:                 &UserSubscription{ID: subID},
				IsSubscriptionBill:           tt.isSubscription,
				IsSubscriptionCreditFallback: tt.isCreditFallback,
			}

			cmd := buildUsageBillingCommand("req-1", nil, p)
			if cmd == nil {
				t.Fatal("buildUsageBillingCommand returned nil")
			}
			if cmd.SubscriptionCost != tt.wantSub {
				t.Errorf("SubscriptionCost = %v, want %v", cmd.SubscriptionCost, tt.wantSub)
			}
			if cmd.BalanceCost != tt.wantBalance {
				t.Errorf("BalanceCost = %v, want %v", cmd.BalanceCost, tt.wantBalance)
			}
			if cmd.CreditBalanceCost != tt.wantCredit {
				t.Errorf("CreditBalanceCost = %v, want %v", cmd.CreditBalanceCost, tt.wantCredit)
			}
		})
	}
}

func TestResolveUsageLogBillingSource(t *testing.T) {
	t.Parallel()

	tests := []struct {
		name              string
		subscription      bool
		creditFallback    bool
		result            *UsageBillingApplyResult
		wantBillingSource string
	}{
		{name: "subscription", subscription: true, result: &UsageBillingApplyResult{}, wantBillingSource: BillingSourceSubscription},
		{name: "subscription credit fallback", creditFallback: true, result: &UsageBillingApplyResult{}, wantBillingSource: BillingSourceSubscriptionCreditFallback},
		{name: "credit balance", result: &UsageBillingApplyResult{CreditBalanceDeducted: 1}, wantBillingSource: BillingSourceCreditBalance},
		{name: "balance", result: &UsageBillingApplyResult{BalanceDeducted: 1}, wantBillingSource: BillingSourceBalance},
		{name: "mixed wallet", result: &UsageBillingApplyResult{CreditBalanceDeducted: 1, BalanceDeducted: 2}, wantBillingSource: BillingSourceMixed},
		{name: "fallback balance", result: &UsageBillingApplyResult{}, wantBillingSource: BillingSourceBalance},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			got := resolveUsageLogBillingSource(tt.subscription, tt.creditFallback, tt.result)
			if got != tt.wantBillingSource {
				t.Fatalf("billing source = %q, want %q", got, tt.wantBillingSource)
			}
		})
	}
}

func TestApplyUsageLogBillingResult(t *testing.T) {
	t.Parallel()

	tests := []struct {
		name                 string
		cost                 *CostBreakdown
		subscription         bool
		creditFallback       bool
		result               *UsageBillingApplyResult
		wantBillingSource    string
		wantCreditCost       float64
		wantBalanceCost      float64
		wantSubscriptionCost float64
	}{
		{
			name:                 "subscription",
			cost:                 &CostBreakdown{ActualCost: 2},
			subscription:         true,
			result:               &UsageBillingApplyResult{},
			wantBillingSource:    BillingSourceSubscription,
			wantSubscriptionCost: 2,
		},
		{
			name:              "subscription credit fallback",
			cost:              &CostBreakdown{ActualCost: 3},
			creditFallback:    true,
			result:            &UsageBillingApplyResult{},
			wantBillingSource: BillingSourceSubscriptionCreditFallback,
			wantCreditCost:    3,
		},
		{
			name:              "wallet mixed",
			cost:              &CostBreakdown{ActualCost: 5},
			result:            &UsageBillingApplyResult{CreditBalanceDeducted: 2, BalanceDeducted: 3},
			wantBillingSource: BillingSourceMixed,
			wantCreditCost:    2,
			wantBalanceCost:   3,
		},
		{
			name:              "wallet fallback to balance cost",
			cost:              &CostBreakdown{ActualCost: 4},
			result:            nil,
			wantBillingSource: BillingSourceBalance,
			wantBalanceCost:   4,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			log := &UsageLog{}
			applyUsageLogBillingResult(log, tt.cost, tt.subscription, tt.creditFallback, tt.result)
			if log.BillingSource != tt.wantBillingSource {
				t.Fatalf("BillingSource = %q, want %q", log.BillingSource, tt.wantBillingSource)
			}
			if log.CreditCost != tt.wantCreditCost {
				t.Fatalf("CreditCost = %v, want %v", log.CreditCost, tt.wantCreditCost)
			}
			if log.BalanceCost != tt.wantBalanceCost {
				t.Fatalf("BalanceCost = %v, want %v", log.BalanceCost, tt.wantBalanceCost)
			}
			if log.SubscriptionCost != tt.wantSubscriptionCost {
				t.Fatalf("SubscriptionCost = %v, want %v", log.SubscriptionCost, tt.wantSubscriptionCost)
			}
		})
	}
}

func TestResolveOldBalanceUsesActualBalanceDeduction(t *testing.T) {
	t.Parallel()

	p := &postUsageBillingParams{
		Cost: &CostBreakdown{ActualCost: 5},
		User: &User{ID: 1, Balance: 20},
	}
	newBalance := 17.0
	result := &UsageBillingApplyResult{
		NewBalance:            &newBalance,
		CreditBalanceDeducted: 2,
		BalanceDeducted:       3,
	}

	if got := resolveOldBalance(p, result); got != 20 {
		t.Fatalf("old balance = %v, want 20", got)
	}
	if got := resolveBalanceDeducted(p, result); got != 3 {
		t.Fatalf("balance deducted = %v, want 3", got)
	}
}
