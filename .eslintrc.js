module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/strongly-recommended',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
  },
}
