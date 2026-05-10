package service

import (
	"context"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/pkg/pagination"
	"github.com/stretchr/testify/require"
)

func TestPromoServiceCreate_RejectsZeroBonusAndCreditBonus(t *testing.T) {
	svc := NewPromoService(nil, nil, nil, nil, nil)

	_, err := svc.Create(context.Background(), &CreatePromoCodeInput{
		Code:              "PROMO-ZERO",
		BonusAmount:       0,
		CreditBonusAmount: 0,
		MaxUses:           1,
	})
	require.ErrorIs(t, err, ErrPromoCodeInvalid)
}

func TestPromoServiceCreate_AllowsCreditBonusOnly(t *testing.T) {
	repo := &promoRepoCreateStub{}
	svc := NewPromoService(repo, nil, nil, nil, nil)

	code, err := svc.Create(context.Background(), &CreatePromoCodeInput{
		Code:              "PROMO-CREDIT",
		BonusAmount:       0,
		CreditBonusAmount: 8.5,
		MaxUses:           1,
	})
	require.NoError(t, err)
	require.NotNil(t, code)
	require.Equal(t, 8.5, code.CreditBonusAmount)
	require.Equal(t, "PROMO-CREDIT", code.Code)
}

type promoRepoCreateStub struct{}

func (s *promoRepoCreateStub) Create(ctx context.Context, code *PromoCode) error {
	code.ID = 1
	return nil
}
func (s *promoRepoCreateStub) GetByID(context.Context, int64) (*PromoCode, error) {
	panic("unexpected call")
}
func (s *promoRepoCreateStub) GetByCode(context.Context, string) (*PromoCode, error) {
	panic("unexpected call")
}
func (s *promoRepoCreateStub) GetByCodeForUpdate(context.Context, string) (*PromoCode, error) {
	panic("unexpected call")
}
func (s *promoRepoCreateStub) Update(context.Context, *PromoCode) error {
	panic("unexpected call")
}
func (s *promoRepoCreateStub) Delete(context.Context, int64) error {
	panic("unexpected call")
}
func (s *promoRepoCreateStub) List(context.Context, pagination.PaginationParams) ([]PromoCode, *pagination.PaginationResult, error) {
	panic("unexpected call")
}
func (s *promoRepoCreateStub) ListWithFilters(context.Context, pagination.PaginationParams, string, string) ([]PromoCode, *pagination.PaginationResult, error) {
	panic("unexpected call")
}
func (s *promoRepoCreateStub) CreateUsage(context.Context, *PromoCodeUsage) error {
	panic("unexpected call")
}
func (s *promoRepoCreateStub) GetUsageByPromoCodeAndUser(context.Context, int64, int64) (*PromoCodeUsage, error) {
	panic("unexpected call")
}
func (s *promoRepoCreateStub) ListUsagesByPromoCode(context.Context, int64, pagination.PaginationParams) ([]PromoCodeUsage, *pagination.PaginationResult, error) {
	panic("unexpected call")
}
func (s *promoRepoCreateStub) IncrementUsedCount(context.Context, int64) error {
	panic("unexpected call")
}
