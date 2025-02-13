import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {rules: {
    "prefer-const": 1, // "warn"  // 0 "off", 2 "error"
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/no-explicit-any": 1,
    "no-constant-condition": 1
  }}
];