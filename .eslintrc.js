module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:@next/next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint', 'unused-imports'],
  ignorePatterns: ['.eslintrc.js', 'public/images/*'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        png: "always",
        jpg: "always"
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    "react/no-children-prop": "off",
    'react/no-children-prop': 0,
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: ['to'],
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    // 使用していないimportを削除
    'unused-imports/no-unused-imports': 'warn',
    // defaultpropsの設定の強制をやめる
    'react/require-default-props': 'off',
    // import のソート順
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '@alias/**',
            group: 'parent',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    // 以下一旦OFF
    'react/jsx-fragments': ['error', 'element'],
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'no-param-reassign': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
