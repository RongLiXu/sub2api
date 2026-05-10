package service

import (
	"context"
	"errors"
	"sync/atomic"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/stretchr/testify/require"
)

type billingCacheWorkerStub struct {
	balanceUpdates      int64
	subscriptionUpdates int64
	creditBalance       float64
	creditErr           error
}

func (b *billingCacheWorkerStub) GetUserBalance(ctx context.Context, userID int64) (float64, error) {
	return 0, nil
}

func (b *billingCacheWorkerStub) SetUserBalance(ctx context.Context, userID int64, balance float64) error {
	atomic.AddInt64(&b.balanceUpdates, 1)
	return nil
}

func (b *billingCacheWorkerStub) DeductUserBalance(ctx context.Context, userID int64, amount float64) error {
	atomic.AddInt64(&b.balanceUpdates, 1)
	return nil
}

func (b *billingCacheWorkerStub) GetUserCreditBalance(ctx context.Context, userID int64) (float64, error) {
	if b.creditErr != nil {
		return 0, b.creditErr
	}
	return b.creditBalance, nil
}

func (b *billingCacheWorkerStub) SetUserCreditBalance(ctx context.Context, userID int64, balance float64) error {
	atomic.AddInt64(&b.balanceUpdates, 1)
	return nil
}

func (b *billingCacheWorkerStub) DeductUserCreditBalance(ctx context.Context, userID int64, amount float64) error {
	atomic.AddInt64(&b.balanceUpdates, 1)
	return nil
}

func (b *billingCacheWorkerStub) InvalidateUserBalance(ctx context.Context, userID int64) error {
	return nil
}

func (b *billingCacheWorkerStub) GetSubscriptionCache(ctx context.Context, userID, groupID int64) (*SubscriptionCacheData, error) {
	return nil, errors.New("not implemented")
}

func (b *billingCacheWorkerStub) SetSubscriptionCache(ctx context.Context, userID, groupID int64, data *SubscriptionCacheData) error {
	atomic.AddInt64(&b.subscriptionUpdates, 1)
	return nil
}

func (b *billingCacheWorkerStub) UpdateSubscriptionUsage(ctx context.Context, userID, groupID int64, cost float64) error {
	atomic.AddInt64(&b.subscriptionUpdates, 1)
	return nil
}

func (b *billingCacheWorkerStub) InvalidateSubscriptionCache(ctx context.Context, userID, groupID int64) error {
	return nil
}

func (b *billingCacheWorkerStub) GetAPIKeyRateLimit(ctx context.Context, keyID int64) (*APIKeyRateLimitCacheData, error) {
	return nil, errors.New("not implemented")
}

func (b *billingCacheWorkerStub) SetAPIKeyRateLimit(ctx context.Context, keyID int64, data *APIKeyRateLimitCacheData) error {
	return nil
}

func (b *billingCacheWorkerStub) UpdateAPIKeyRateLimitUsage(ctx context.Context, keyID int64, cost float64) error {
	return nil
}

func (b *billingCacheWorkerStub) InvalidateAPIKeyRateLimit(ctx context.Context, keyID int64) error {
	return nil
}

func TestBillingCacheServiceQueueHighLoad(t *testing.T) {
	cache := &billingCacheWorkerStub{}
	svc := NewBillingCacheService(cache, nil, nil, nil, nil, nil, &config.Config{})
	t.Cleanup(svc.Stop)

	start := time.Now()
	for i := 0; i < cacheWriteBufferSize*2; i++ {
		svc.QueueDeductBalance(1, 1)
	}
	require.Less(t, time.Since(start), 2*time.Second)

	svc.QueueUpdateSubscriptionUsage(1, 2, 1.5)

	require.Eventually(t, func() bool {
		return atomic.LoadInt64(&cache.balanceUpdates) > 0
	}, 2*time.Second, 10*time.Millisecond)

	require.Eventually(t, func() bool {
		return atomic.LoadInt64(&cache.subscriptionUpdates) > 0
	}, 2*time.Second, 10*time.Millisecond)
}

func TestBillingCacheServiceEnqueueAfterStopReturnsFalse(t *testing.T) {
	cache := &billingCacheWorkerStub{}
	svc := NewBillingCacheService(cache, nil, nil, nil, nil, nil, &config.Config{})
	svc.Stop()

	enqueued := svc.enqueueCacheWrite(cacheWriteTask{
		kind:   cacheWriteDeductBalance,
		userID: 1,
		amount: 1,
	})
	require.False(t, enqueued)
}

type subscriptionCreditFallbackSettingStub struct {
	enabled bool
}

func (s subscriptionCreditFallbackSettingStub) IsSubscriptionCreditFallbackEnabled(ctx context.Context) bool {
	return s.enabled
}

func TestBillingCacheServiceHandleSubscriptionLimitExceeded(t *testing.T) {
	enabled := true
	disabled := false

	tests := []struct {
		name          string
		groupOverride *bool
		globalEnabled bool
		creditBalance float64
		wantErr       error
		wantFallback  bool
	}{
		{
			name:          "global enabled allows credit fallback",
			globalEnabled: true,
			creditBalance: 1,
			wantFallback:  true,
		},
		{
			name:          "group enabled overrides global disabled",
			groupOverride: &enabled,
			globalEnabled: false,
			creditBalance: 1,
			wantFallback:  true,
		},
		{
			name:          "group disabled overrides global enabled",
			groupOverride: &disabled,
			globalEnabled: true,
			creditBalance: 1,
			wantErr:       ErrDailyLimitExceeded,
		},
		{
			name:          "global disabled returns original limit error",
			globalEnabled: false,
			creditBalance: 1,
			wantErr:       ErrDailyLimitExceeded,
		},
		{
			name:          "enabled but credit empty returns insufficient credit",
			globalEnabled: true,
			creditBalance: 0,
			wantErr:       ErrInsufficientCreditBalance,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			cache := &billingCacheWorkerStub{creditBalance: tt.creditBalance}
			svc := NewBillingCacheService(cache, nil, nil, nil, nil, nil, &config.Config{}, subscriptionCreditFallbackSettingStub{enabled: tt.globalEnabled})
			t.Cleanup(svc.Stop)

			user := &User{ID: 7}
			apiKey := &APIKey{}
			group := &Group{ID: 11, SubscriptionCreditFallbackEnabled: tt.groupOverride}

			err := svc.handleSubscriptionLimitExceeded(context.Background(), user, apiKey, group, ErrDailyLimitExceeded)
			if tt.wantErr != nil {
				require.ErrorIs(t, err, tt.wantErr)
				require.False(t, apiKey.SubscriptionCreditFallback)
				return
			}
			require.NoError(t, err)
			require.Equal(t, tt.wantFallback, apiKey.SubscriptionCreditFallback)
			require.InDelta(t, tt.creditBalance, user.CreditBalance, 0.000001)
		})
	}
}
