package repository

import (
	"context"
	"database/sql"
	"testing"
	"time"

	"github.com/DATA-DOG/go-sqlmock"
	"github.com/Wei-Shaw/sub2api/internal/pkg/pagination"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/stretchr/testify/require"
)

func newCreditLedgerSQLMock(t *testing.T) (*sql.DB, sqlmock.Sqlmock) {
	t.Helper()
	db, mock, err := sqlmock.New(sqlmock.QueryMatcherOption(sqlmock.QueryMatcherRegexp))
	require.NoError(t, err)
	t.Cleanup(func() { _ = db.Close() })
	return db, mock
}

func TestCreditLedgerRepositoryCreate(t *testing.T) {
	db, mock := newCreditLedgerSQLMock(t)
	repo := &creditLedgerRepository{sql: db}

	now := time.Date(2026, 5, 10, 12, 0, 0, 0, time.UTC)
	mock.ExpectQuery("INSERT INTO user_credit_ledger").
		WithArgs(
			int64(7),
			1.25,
			10.0,
			11.25,
			service.CreditLedgerEntryTypeAdminAdd,
			service.CreditLedgerSourceAdmin,
			nil,
			nil,
			nil,
			nil,
			nil,
			nil,
			nil,
			nil,
			nil,
			"{}",
		).
		WillReturnRows(sqlmock.NewRows([]string{
			"id", "user_id", "amount", "balance_before", "balance_after",
			"entry_type", "source", "operator_user_id", "request_id", "api_key_id",
			"usage_log_id", "account_id", "group_id", "subscription_id", "idempotency_key",
			"notes", "metadata", "created_at", "updated_at",
		}).AddRow(
			int64(99), int64(7), 1.25, 10.0, 11.25,
			service.CreditLedgerEntryTypeAdminAdd, service.CreditLedgerSourceAdmin, nil, nil, nil,
			nil, nil, nil, nil, nil,
			nil, `{"x":1}`, now, now,
		))

	entry, err := repo.Create(context.Background(), service.CreateCreditLedgerEntryInput{
		UserID:        7,
		Amount:        1.25,
		BalanceBefore: 10,
		BalanceAfter:  11.25,
		EntryType:     service.CreditLedgerEntryTypeAdminAdd,
		Source:        service.CreditLedgerSourceAdmin,
	})
	require.NoError(t, err)
	require.Equal(t, int64(99), entry.ID)
	require.Equal(t, 11.25, entry.BalanceAfter)
	require.NoError(t, mock.ExpectationsWereMet())
}

func TestCreditLedgerRepositoryList(t *testing.T) {
	db, mock := newCreditLedgerSQLMock(t)
	repo := &creditLedgerRepository{sql: db}

	now := time.Date(2026, 5, 10, 12, 0, 0, 0, time.UTC)
	mock.ExpectQuery("SELECT COUNT\\(\\*\\) FROM user_credit_ledger").
		WithArgs(int64(7), service.CreditLedgerEntryTypeUsageDeduct, service.CreditLedgerSourceUsageBilling).
		WillReturnRows(sqlmock.NewRows([]string{"count"}).AddRow(int64(1)))
	mock.ExpectQuery("SELECT").
		WithArgs(int64(7), service.CreditLedgerEntryTypeUsageDeduct, service.CreditLedgerSourceUsageBilling, 20, 0).
		WillReturnRows(sqlmock.NewRows([]string{
			"id", "user_id", "amount", "balance_before", "balance_after",
			"entry_type", "source", "operator_user_id", "request_id", "api_key_id",
			"usage_log_id", "account_id", "group_id", "subscription_id", "idempotency_key",
			"notes", "metadata", "created_at", "updated_at",
		}).AddRow(
			int64(1), int64(7), -0.25, 10.25, 10.0,
			service.CreditLedgerEntryTypeUsageDeduct, service.CreditLedgerSourceUsageBilling, nil, "local:abc", int64(11),
			nil, nil, nil, nil, nil,
			nil, `{}`, now, now,
		))

	items, result, err := repo.List(context.Background(), pagination.PaginationParams{Page: 1, PageSize: 20}, service.CreditLedgerListFilter{
		UserID:    7,
		EntryType: service.CreditLedgerEntryTypeUsageDeduct,
		Source:    service.CreditLedgerSourceUsageBilling,
	})
	require.NoError(t, err)
	require.Equal(t, int64(1), result.Total)
	require.Len(t, items, 1)
	require.Equal(t, -0.25, items[0].Amount)
	require.NoError(t, mock.ExpectationsWereMet())
}
