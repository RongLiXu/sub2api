package repository

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"strings"

	dbent "github.com/Wei-Shaw/sub2api/ent"
	"github.com/Wei-Shaw/sub2api/internal/pkg/pagination"
	"github.com/Wei-Shaw/sub2api/internal/service"
)

type creditLedgerRepository struct {
	client *dbent.Client
	sql    sqlExecutor
}

func NewCreditLedgerRepository(client *dbent.Client, sqlDB *sql.DB) service.CreditLedgerRepository {
	return &creditLedgerRepository{
		client: client,
		sql:    sqlDB,
	}
}

func (r *creditLedgerRepository) Create(ctx context.Context, input service.CreateCreditLedgerEntryInput) (*service.CreditLedgerEntry, error) {
	exec := txAwareSQLExecutor(ctx, r.sql, r.client)
	metadata := input.Metadata
	if metadata == nil {
		metadata = map[string]any{}
	}
	metadataJSON, err := json.Marshal(metadata)
	if err != nil {
		return nil, fmt.Errorf("marshal credit ledger metadata: %w", err)
	}

	entry := &service.CreditLedgerEntry{}
	if err = scanSingleRow(ctx, exec, `
		INSERT INTO user_credit_ledger (
			user_id,
			amount,
			balance_before,
			balance_after,
			entry_type,
			source,
			operator_user_id,
			request_id,
			api_key_id,
			usage_log_id,
			account_id,
			group_id,
			subscription_id,
			idempotency_key,
			notes,
			metadata,
			created_at,
			updated_at
		) VALUES (
			$1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
			$11, $12, $13, $14, $15, $16::jsonb, NOW(), NOW()
		)
		RETURNING
			id,
			user_id,
			amount::double precision,
			balance_before::double precision,
			balance_after::double precision,
			entry_type,
			source,
			operator_user_id,
			request_id,
			api_key_id,
			usage_log_id,
			account_id,
			group_id,
			subscription_id,
			idempotency_key,
			notes,
			metadata,
			created_at,
			updated_at
	`, []any{
		input.UserID,
		input.Amount,
		input.BalanceBefore,
		input.BalanceAfter,
		input.EntryType,
		input.Source,
		nullableInt64Arg(input.OperatorUserID),
		nullableStringArg(input.RequestID),
		nullableInt64Arg(input.APIKeyID),
		nullableInt64Arg(input.UsageLogID),
		nullableInt64Arg(input.AccountID),
		nullableInt64Arg(input.GroupID),
		nullableInt64Arg(input.SubscriptionID),
		nullableStringArg(input.IdempotencyKey),
		nullableStringArg(input.Notes),
		string(metadataJSON),
	},
		&entry.ID,
		&entry.UserID,
		&entry.Amount,
		&entry.BalanceBefore,
		&entry.BalanceAfter,
		&entry.EntryType,
		&entry.Source,
		&entry.OperatorUserID,
		&entry.RequestID,
		&entry.APIKeyID,
		&entry.UsageLogID,
		&entry.AccountID,
		&entry.GroupID,
		&entry.SubscriptionID,
		&entry.IdempotencyKey,
		&entry.Notes,
		&metadataJSON,
		&entry.CreatedAt,
		&entry.UpdatedAt,
	); err != nil {
		return nil, err
	}
	_ = json.Unmarshal(metadataJSON, &entry.Metadata)
	return entry, nil
}

func (r *creditLedgerRepository) List(ctx context.Context, params pagination.PaginationParams, filter service.CreditLedgerListFilter) ([]service.CreditLedgerEntry, *pagination.PaginationResult, error) {
	if r.sql == nil {
		return nil, nil, fmt.Errorf("sql executor is not configured")
	}
	where := []string{"user_id = $1"}
	args := []any{filter.UserID}
	argIndex := 2
	if strings.TrimSpace(filter.EntryType) != "" {
		where = append(where, fmt.Sprintf("entry_type = $%d", argIndex))
		args = append(args, strings.TrimSpace(filter.EntryType))
		argIndex++
	}
	if strings.TrimSpace(filter.Source) != "" {
		where = append(where, fmt.Sprintf("source = $%d", argIndex))
		args = append(args, strings.TrimSpace(filter.Source))
		argIndex++
	}

	countSQL := `SELECT COUNT(*) FROM user_credit_ledger WHERE ` + strings.Join(where, " AND ")
	var total int64
	if err := scanSingleRow(ctx, r.sql, countSQL, args, &total); err != nil {
		return nil, nil, err
	}

	args = append(args, params.Limit(), params.Offset())
	querySQL := `
		SELECT
			id,
			user_id,
			amount::double precision,
			balance_before::double precision,
			balance_after::double precision,
			entry_type,
			source,
			operator_user_id,
			request_id,
			api_key_id,
			usage_log_id,
			account_id,
			group_id,
			subscription_id,
			idempotency_key,
			notes,
			metadata,
			created_at,
			updated_at
		FROM user_credit_ledger
		WHERE ` + strings.Join(where, " AND ") + `
		ORDER BY created_at DESC, id DESC
		LIMIT $` + fmt.Sprint(argIndex) + ` OFFSET $` + fmt.Sprint(argIndex+1)

	rows, err := r.sql.QueryContext(ctx, querySQL, args...)
	if err != nil {
		return nil, nil, err
	}
	defer func() { _ = rows.Close() }()

	items := make([]service.CreditLedgerEntry, 0)
	for rows.Next() {
		var (
			item         service.CreditLedgerEntry
			metadataJSON []byte
		)
		if err := rows.Scan(
			&item.ID,
			&item.UserID,
			&item.Amount,
			&item.BalanceBefore,
			&item.BalanceAfter,
			&item.EntryType,
			&item.Source,
			&item.OperatorUserID,
			&item.RequestID,
			&item.APIKeyID,
			&item.UsageLogID,
			&item.AccountID,
			&item.GroupID,
			&item.SubscriptionID,
			&item.IdempotencyKey,
			&item.Notes,
			&metadataJSON,
			&item.CreatedAt,
			&item.UpdatedAt,
		); err != nil {
			return nil, nil, err
		}
		item.Metadata = map[string]any{}
		_ = json.Unmarshal(metadataJSON, &item.Metadata)
		items = append(items, item)
	}
	if err := rows.Err(); err != nil {
		return nil, nil, err
	}

	return items, paginationResultFromTotal(total, params), nil
}

func nullableStringArg(v *string) any {
	if v == nil {
		return nil
	}
	value := strings.TrimSpace(*v)
	if value == "" {
		return nil
	}
	return value
}
