//go:build unit

package service

import (
	"context"
	"errors"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/pkg/pagination"
	"github.com/stretchr/testify/require"
)

type balanceUserRepoStub struct {
	*userRepoStub
	updateErr error
	updated   []*User
}

func (s *balanceUserRepoStub) Update(ctx context.Context, user *User) error {
	if s.updateErr != nil {
		return s.updateErr
	}
	if user == nil {
		return nil
	}
	clone := *user
	s.updated = append(s.updated, &clone)
	if s.userRepoStub != nil {
		s.userRepoStub.user = &clone
	}
	return nil
}

type balanceRedeemRepoStub struct {
	*redeemRepoStub
	created []*RedeemCode
}

func (s *balanceRedeemRepoStub) Create(ctx context.Context, code *RedeemCode) error {
	if code == nil {
		return nil
	}
	clone := *code
	s.created = append(s.created, &clone)
	return nil
}

type creditLedgerRepoStub struct {
	createErr error
	entries   []CreateCreditLedgerEntryInput
}

func (s *creditLedgerRepoStub) Create(ctx context.Context, input CreateCreditLedgerEntryInput) (*CreditLedgerEntry, error) {
	if s.createErr != nil {
		return nil, s.createErr
	}
	s.entries = append(s.entries, input)
	return &CreditLedgerEntry{
		UserID:        input.UserID,
		Amount:        input.Amount,
		BalanceBefore: input.BalanceBefore,
		BalanceAfter:  input.BalanceAfter,
		EntryType:     input.EntryType,
		Source:        input.Source,
		Notes:         input.Notes,
	}, nil
}

func (s *creditLedgerRepoStub) List(ctx context.Context, params pagination.PaginationParams, filter CreditLedgerListFilter) ([]CreditLedgerEntry, *pagination.PaginationResult, error) {
	panic("unexpected List call")
}

type authCacheInvalidatorStub struct {
	userIDs  []int64
	groupIDs []int64
	keys     []string
}

func (s *authCacheInvalidatorStub) InvalidateAuthCacheByKey(ctx context.Context, key string) {
	s.keys = append(s.keys, key)
}

func (s *authCacheInvalidatorStub) InvalidateAuthCacheByUserID(ctx context.Context, userID int64) {
	s.userIDs = append(s.userIDs, userID)
}

func (s *authCacheInvalidatorStub) InvalidateAuthCacheByGroupID(ctx context.Context, groupID int64) {
	s.groupIDs = append(s.groupIDs, groupID)
}

func TestAdminService_UpdateUserBalance_InvalidatesAuthCache(t *testing.T) {
	baseRepo := &userRepoStub{user: &User{ID: 7, Balance: 10}}
	repo := &balanceUserRepoStub{userRepoStub: baseRepo}
	redeemRepo := &balanceRedeemRepoStub{redeemRepoStub: &redeemRepoStub{}}
	invalidator := &authCacheInvalidatorStub{}
	svc := &adminServiceImpl{
		userRepo:             repo,
		redeemCodeRepo:       redeemRepo,
		authCacheInvalidator: invalidator,
	}

	_, err := svc.UpdateUserBalance(context.Background(), 7, 5, "add", "")
	require.NoError(t, err)
	require.Equal(t, []int64{7}, invalidator.userIDs)
	require.Len(t, redeemRepo.created, 1)
}

func TestAdminService_UpdateUserBalance_NoChangeNoInvalidate(t *testing.T) {
	baseRepo := &userRepoStub{user: &User{ID: 7, Balance: 10}}
	repo := &balanceUserRepoStub{userRepoStub: baseRepo}
	redeemRepo := &balanceRedeemRepoStub{redeemRepoStub: &redeemRepoStub{}}
	invalidator := &authCacheInvalidatorStub{}
	svc := &adminServiceImpl{
		userRepo:             repo,
		redeemCodeRepo:       redeemRepo,
		authCacheInvalidator: invalidator,
	}

	_, err := svc.UpdateUserBalance(context.Background(), 7, 10, "set", "")
	require.NoError(t, err)
	require.Empty(t, invalidator.userIDs)
	require.Empty(t, redeemRepo.created)
}

func TestAdminService_UpdateUserCreditBalance_AdjustsAndWritesLedger(t *testing.T) {
	tests := []struct {
		name          string
		operation     string
		amount        float64
		start         float64
		want          float64
		wantDelta     float64
		wantEntryType string
	}{
		{name: "set", operation: "set", amount: 12.5, start: 5, want: 12.5, wantDelta: 7.5, wantEntryType: CreditLedgerEntryTypeAdminSet},
		{name: "add", operation: "add", amount: 3.25, start: 5, want: 8.25, wantDelta: 3.25, wantEntryType: CreditLedgerEntryTypeAdminAdd},
		{name: "subtract", operation: "subtract", amount: 2, start: 5, want: 3, wantDelta: -2, wantEntryType: CreditLedgerEntryTypeAdminSubtract},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			baseRepo := &userRepoStub{user: &User{ID: 7, Email: "user@example.com", CreditBalance: tt.start}}
			repo := &balanceUserRepoStub{userRepoStub: baseRepo}
			ledgerRepo := &creditLedgerRepoStub{}
			invalidator := &authCacheInvalidatorStub{}
			svc := &adminServiceImpl{
				userRepo:             repo,
				creditLedgerRepo:     ledgerRepo,
				authCacheInvalidator: invalidator,
			}

			user, err := svc.UpdateUserCreditBalance(context.Background(), 7, tt.amount, tt.operation, "manual grant")
			require.NoError(t, err)
			require.InDelta(t, tt.want, user.CreditBalance, 0.000001)
			require.Len(t, repo.updated, 1)
			require.InDelta(t, tt.want, repo.updated[0].CreditBalance, 0.000001)
			require.Len(t, ledgerRepo.entries, 1)
			require.Equal(t, tt.wantEntryType, ledgerRepo.entries[0].EntryType)
			require.Equal(t, CreditLedgerSourceAdmin, ledgerRepo.entries[0].Source)
			require.InDelta(t, tt.wantDelta, ledgerRepo.entries[0].Amount, 0.000001)
			require.InDelta(t, tt.start, ledgerRepo.entries[0].BalanceBefore, 0.000001)
			require.InDelta(t, tt.want, ledgerRepo.entries[0].BalanceAfter, 0.000001)
			require.Equal(t, []int64{7}, invalidator.userIDs)
		})
	}
}

func TestAdminService_UpdateUserCreditBalance_NoChangeDoesNotWriteLedger(t *testing.T) {
	baseRepo := &userRepoStub{user: &User{ID: 7, Email: "user@example.com", CreditBalance: 10}}
	repo := &balanceUserRepoStub{userRepoStub: baseRepo}
	ledgerRepo := &creditLedgerRepoStub{}
	invalidator := &authCacheInvalidatorStub{}
	svc := &adminServiceImpl{
		userRepo:             repo,
		creditLedgerRepo:     ledgerRepo,
		authCacheInvalidator: invalidator,
	}

	user, err := svc.UpdateUserCreditBalance(context.Background(), 7, 10, "set", "")
	require.NoError(t, err)
	require.InDelta(t, 10, user.CreditBalance, 0.000001)
	require.Len(t, repo.updated, 1)
	require.Empty(t, ledgerRepo.entries)
	require.Equal(t, []int64{7}, invalidator.userIDs)
}

func TestAdminService_UpdateUserCreditBalance_RejectsNegativeResult(t *testing.T) {
	baseRepo := &userRepoStub{user: &User{ID: 7, Email: "user@example.com", CreditBalance: 5}}
	repo := &balanceUserRepoStub{userRepoStub: baseRepo}
	ledgerRepo := &creditLedgerRepoStub{}
	svc := &adminServiceImpl{
		userRepo:         repo,
		creditLedgerRepo: ledgerRepo,
	}

	_, err := svc.UpdateUserCreditBalance(context.Background(), 7, 6, "subtract", "")
	require.Error(t, err)
	require.Contains(t, err.Error(), "credit_balance cannot be negative")
	require.Empty(t, repo.updated)
	require.Empty(t, ledgerRepo.entries)
}

func TestAdminService_UpdateUserCreditBalance_LedgerFailureReturnsError(t *testing.T) {
	baseRepo := &userRepoStub{user: &User{ID: 7, Email: "user@example.com", CreditBalance: 5}}
	repo := &balanceUserRepoStub{userRepoStub: baseRepo}
	ledgerRepo := &creditLedgerRepoStub{createErr: errors.New("ledger unavailable")}
	invalidator := &authCacheInvalidatorStub{}
	svc := &adminServiceImpl{
		userRepo:             repo,
		creditLedgerRepo:     ledgerRepo,
		authCacheInvalidator: invalidator,
	}

	_, err := svc.UpdateUserCreditBalance(context.Background(), 7, 2, "add", "")
	require.ErrorContains(t, err, "ledger unavailable")
	require.Len(t, repo.updated, 1)
	require.Empty(t, invalidator.userIDs)
}
