// @rushstack/eslint-patch is a patch that improves how ESLint loads plugins
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'turbo',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    ...require('./rules/eslint'),
    ...require('./rules/import'),
    ...require('./rules/react'),
    ...require('./rules/react-hooks'),
    ...require('./rules/typescript'),
  },
};
