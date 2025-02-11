module.exports = {
  extends: ["expo", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: ["/dist/*"],
  rules: {
    "no-console": "warn",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react/jsx-filename-extension": [
      "warn",
      { extensions: [".jsx", ".js", ".tsx", ".ts"] },
    ],
    "@typescript-eslint/no-require-imports": "off",
  },
};
