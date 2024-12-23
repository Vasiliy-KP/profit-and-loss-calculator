import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      }
    }
  },
  pluginJs.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      "no-unused-vars": "warn",
      quotes: ["error", "single"],
      semi: ["error", "always"],
    },
  },
];