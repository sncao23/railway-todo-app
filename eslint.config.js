import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      react: pluginReact,
    },
    extends: [
      js.configs.recommended,              // ESLintコア推奨
      pluginReact.configs.flat.recommended // React推奨
      // Prettierとの衝突は "eslint-config-prettier" が解決
    ],
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-undef": "error",
      "no-unused-vars": "error",
      "react/prop-types": "off",
    },
    settings: {
      react: { version: "detect" }
    }
  }
]);
