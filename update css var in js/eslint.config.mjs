import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.browser, // or globals.node if using Node.js environment
    },
    rules: {
      semi: ["warn", "always"],
      "no-unused-vars": "warn",
      "arrow-body-style": ["error", "always"],
      "no-empty": "off",
    },
  },
  // Directly include recommended rules if necessary
  pluginJs.configs.recommended,
];
