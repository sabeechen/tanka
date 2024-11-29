package native

import (
	"encoding/json"
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

// callNative calls a native function used by jsonnet VM.
func callNative(name string, extCode map[string]string, data []interface{}) (res interface{}, err error, callerr error) {
	for _, fun := range Funcs(extCode) {
		if fun.Name == name {
			// Call the function
			ret, err := fun.Func(data)
			return ret, err, nil
		}
	}

	return nil, nil, fmt.Errorf("could not find native function %s", name)
}

func TestSha256(t *testing.T) {
	ret, err, callerr := callNative("sha256", map[string]string{}, []interface{}{"foo"})

	assert.Empty(t, callerr)
	assert.Equal(t, "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae", ret)
	assert.Empty(t, err)
}

func TestParseJSONEmptyDict(t *testing.T) {
	ret, err, callerr := callNative("parseJson", map[string]string{}, []interface{}{"{}"})

	assert.Empty(t, callerr)
	assert.Equal(t, map[string]interface{}{}, ret)
	assert.Empty(t, err)
}

func TestParseJSONkeyValuet(t *testing.T) {
	ret, err, callerr := callNative("parseJson", map[string]string{}, []interface{}{"{\"a\": 47}"})

	assert.Empty(t, callerr)
	assert.Equal(t, map[string]interface{}{"a": 47.0}, ret)
	assert.Empty(t, err)
}

func TestParseJSONInvalid(t *testing.T) {
	ret, err, callerr := callNative("parseJson", map[string]string{}, []interface{}{""})

	assert.Empty(t, callerr)
	assert.Empty(t, ret)
	assert.IsType(t, &json.SyntaxError{}, err)
}

func TestParseYAMLEmpty(t *testing.T) {
	ret, err, callerr := callNative("parseYaml", map[string]string{}, []interface{}{""})

	assert.Empty(t, callerr)
	assert.Equal(t, []interface{}{}, ret)
	assert.Empty(t, err)
}

func TestParseYAMLKeyValue(t *testing.T) {
	ret, err, callerr := callNative("parseYaml", map[string]string{}, []interface{}{"a: 47"})

	assert.Empty(t, callerr)
	assert.Equal(t, []interface{}{map[string]interface{}{"a": 47.0}}, ret)
	assert.Empty(t, err)
}

func TestParseYAMLInvalid(t *testing.T) {
	ret, err, callerr := callNative("parseYaml", map[string]string{}, []interface{}{"'"})

	assert.Empty(t, callerr)
	assert.Empty(t, ret)
	assert.NotEmpty(t, err)
}

func TestManifestJSONFromJSON(t *testing.T) {
	ret, err, callerr := callNative("manifestJsonFromJson", map[string]string{}, []interface{}{"{}", float64(4)})

	assert.Empty(t, callerr)
	assert.Equal(t, "{}\n", ret)
	assert.Empty(t, err)
}

func TestManifestJSONFromJSONReindent(t *testing.T) {
	ret, err, callerr := callNative("manifestJsonFromJson", map[string]string{}, []interface{}{"{ \"a\": 47}", float64(4)})

	assert.Empty(t, callerr)
	assert.Equal(t, "{\n    \"a\": 47\n}\n", ret)
	assert.Empty(t, err)
}

func TestManifestJSONFromJSONInvalid(t *testing.T) {
	ret, err, callerr := callNative("manifestJsonFromJson", map[string]string{}, []interface{}{"", float64(4)})

	assert.Empty(t, callerr)
	assert.Empty(t, ret)
	assert.NotEmpty(t, err)
}

func TestManifestYAMLFromJSONEmpty(t *testing.T) {
	ret, err, callerr := callNative("manifestYamlFromJson", map[string]string{}, []interface{}{"{}"})

	assert.Empty(t, callerr)
	assert.Equal(t, "{}\n", ret)
	assert.Empty(t, err)
}

func TestManifestYAMLFromJSONKeyValue(t *testing.T) {
	ret, err, callerr := callNative("manifestYamlFromJson", map[string]string{}, []interface{}{"{ \"a\": 47}"})

	assert.Empty(t, callerr)
	assert.Equal(t, "a: 47\n", ret)
	assert.Empty(t, err)
}

func TestManifestYAMLFromJSONList(t *testing.T) {
	ret, err, callerr := callNative("manifestYamlFromJson", map[string]string{}, []interface{}{`{ "list": ["a", "b", "c"]}`})

	assert.Empty(t, callerr)
	assert.Equal(t, `list:
    - a
    - b
    - c
`, ret)
	assert.Empty(t, err)
}

func TestManifestYAMLFromJSONInvalid(t *testing.T) {
	ret, err, callerr := callNative("manifestYamlFromJson", map[string]string{}, []interface{}{""})

	assert.Empty(t, callerr)
	assert.Empty(t, ret)
	assert.NotEmpty(t, err)
}

func TestEscapeStringRegex(t *testing.T) {
	ret, err, callerr := callNative("escapeStringRegex", map[string]string{}, []interface{}{""})

	assert.Empty(t, callerr)
	assert.Equal(t, "", ret)
	assert.Empty(t, err)
}

func TestEscapeStringRegexValue(t *testing.T) {
	ret, err, callerr := callNative("escapeStringRegex", map[string]string{}, []interface{}{"([0-9]+).*\\s"})

	assert.Empty(t, callerr)
	assert.Equal(t, "\\(\\[0-9\\]\\+\\)\\.\\*\\\\s", ret)
	assert.Empty(t, err)
}

func TestEscapeStringRegexInvalid(t *testing.T) {
	ret, err, callerr := callNative("escapeStringRegex", map[string]string{}, []interface{}{"([0-9]+"})

	assert.Empty(t, callerr)
	assert.Equal(t, "\\(\\[0-9\\]\\+", ret)
	assert.Empty(t, err)
}

func TestRegexMatch(t *testing.T) {
	ret, err, callerr := callNative("regexMatch", map[string]string{}, []interface{}{"", "a"})

	assert.Empty(t, callerr)
	assert.Equal(t, true, ret)
	assert.Empty(t, err)
}

func TestRegexMatchNoMatch(t *testing.T) {
	ret, err, callerr := callNative("regexMatch", map[string]string{}, []interface{}{"a", "b"})

	assert.Empty(t, callerr)
	assert.Equal(t, false, ret)
	assert.Empty(t, err)
}

func TestRegexMatchInvalidRegex(t *testing.T) {
	ret, err, callerr := callNative("regexMatch", map[string]string{}, []interface{}{"[0-", "b"})

	assert.Empty(t, callerr)
	assert.Empty(t, ret)
	assert.NotEmpty(t, err)
}

func TestRegexSubstNoChange(t *testing.T) {
	ret, err, callerr := callNative("regexSubst", map[string]string{}, []interface{}{"a", "b", "c"})

	assert.Empty(t, callerr)
	assert.Equal(t, "b", ret)
	assert.Empty(t, err)
}

func TestRegexSubstValid(t *testing.T) {
	ret, err, callerr := callNative("regexSubst", map[string]string{}, []interface{}{"p[^m]*", "pm", "poe"})

	assert.Empty(t, callerr)
	assert.Equal(t, "poem", ret)
	assert.Empty(t, err)
}

func TestRegexSubstInvalid(t *testing.T) {
	ret, err, callerr := callNative("regexSubst", map[string]string{}, []interface{}{"p[^m*", "pm", "poe"})

	assert.Empty(t, callerr)
	assert.Empty(t, ret)
	assert.NotEmpty(t, err)
}

func TestHasExtVarFalse(t *testing.T) {
	ret, err, callerr := callNative("hasExtVar", map[string]string{}, []interface{}{"variableName"})

	assert.Empty(t, callerr)
	assert.Empty(t, err)
	assert.Equal(t, false, ret)
}

func TestHasExtVarTrue(t *testing.T) {
	ret, err, callerr := callNative("hasExtVar", map[string]string{"variableName": "value"}, []interface{}{"variableName"})

	assert.Empty(t, callerr)
	assert.Empty(t, err)
	assert.Equal(t, true, ret)
}
