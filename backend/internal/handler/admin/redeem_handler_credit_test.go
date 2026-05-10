package admin

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

func TestGenerateRedeemCodesRequest_AllowsCreditBalanceType(t *testing.T) {
	gin.SetMode(gin.TestMode)

	handler := &RedeemHandler{}
	router := gin.New()
	router.POST("/admin/redeem", func(c *gin.Context) {
		var req GenerateRedeemCodesRequest
		if err := c.ShouldBindJSON(&req); err != nil {
			c.String(http.StatusBadRequest, err.Error())
			return
		}
		c.Status(http.StatusOK)
	})

	req := httptest.NewRequest(http.MethodPost, "/admin/redeem", bytes.NewBufferString(`{"count":1,"type":"credit_balance","value":10}`))
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()
	router.ServeHTTP(rec, req)
	require.Equal(t, http.StatusOK, rec.Code)

	_ = handler
}
