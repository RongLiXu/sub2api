package openai

import "testing"

func TestDefaultModelsContainGPT55AheadOfGPT54(t *testing.T) {
	positions := make(map[string]int, len(DefaultModels))
	for i, model := range DefaultModels {
		positions[model.ID] = i
	}

	for _, id := range []string{"gpt-5.5-pro", "gpt-5.5", "gpt-5.4"} {
		if _, ok := positions[id]; !ok {
			t.Fatalf("expected model %q in DefaultModels", id)
		}
	}

	if positions["gpt-5.5-pro"] > positions["gpt-5.5"] {
		t.Fatalf("expected gpt-5.5-pro to be listed before gpt-5.5")
	}
	if positions["gpt-5.5"] > positions["gpt-5.4"] {
		t.Fatalf("expected gpt-5.5 to be listed before gpt-5.4")
	}
}
