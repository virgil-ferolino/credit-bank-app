// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: ["/dist/*"],
  rules: {
    "no-console": "error",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react/jsx-filename-extension": [
      "warn",
      { extensions: [".jsx", ".js", ".tsx", ".ts"] },
    ],
  },
};
