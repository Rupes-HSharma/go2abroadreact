import js from "@eslint/js";
import tseslint from "typescript-eslint";
export default tseslint.config(
  {
    ignores: [
      "**/node_modules/**",
      "**/.next*/**",
      "**/dist/**",
      "html/**",
      "**/next-env.d.ts",
      "**/coverage/**",
      "**/test-results/**",
      "**/playwright-report/**",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
);
