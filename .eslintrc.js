module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-unused-vars': 0,
    'arrow-parens': [1, 'as-needed'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': [0, 'none'],
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-namespace': [2, { allowDeclarations: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
