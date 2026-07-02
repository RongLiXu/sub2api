package service

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestDefaultSparkShadowModelMapping(t *testing.T) {
	mapping := defaultSparkShadowModelMapping()

	expected := []string{
		"gpt-5.3-codex-spark",
		"gpt-5.3-codex-spark-low",
		"gpt-5.3-codex-spark-medium",
		"gpt-5.3-codex-spark-high",
		"gpt-5.3-codex-spark-xhigh",
	}

	require.Len(t, mapping, len(expected), "spark 默认映射应覆盖 codexModelMap 中归一到 spark 的全部别名")
	for _, model := range expected {
		require.Equal(t, model, mapping[model], "恒等映射：%s 映射到自身", model)
	}
}

func TestSparkModelVariantsDerivedFromAliases(t *testing.T) {
	got := sparkModelVariants()
	require.ElementsMatch(t, []string{
		"gpt-5.3-codex-spark",
		"gpt-5.3-codex-spark-low",
		"gpt-5.3-codex-spark-medium",
		"gpt-5.3-codex-spark-high",
		"gpt-5.3-codex-spark-xhigh",
	}, got, "spark 变体集合应从 codexModelMap 派生，避免别名表与影子账号默认映射漂移")
}
