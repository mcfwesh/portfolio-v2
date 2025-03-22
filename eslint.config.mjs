import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  globalIgnores(["tailwind.config.cjs", "postcss.config.cjs"]),
  ...compat.config({
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "prettier",
      "next/core-web-vitals",
      "next/typescript",
    ],
    plugins: ["simple-import-sort", "react", "react-hooks"],
    rules: {
      ...reactHooks.configs.recommended.rules,
      // "no-unused-vars": "warn",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
    parserOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
  }),
];

export default eslintConfig;
