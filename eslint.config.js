import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      "react-hooks/exhaustive-deps": "error",
    },
  },
];
