module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    "vue/no-v-html": 0,
    "vue/no-multiple-template-root": 0,
    "no-useless-constructor": 0,
    "@typescript-eslint/no-useless-constructor": ["error"],
    "@typescript-eslint/no-explicit-any": "error",
  },
};
