module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  globals: {
    React: true,
    globalThis: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    'react',
    'import',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'class-methods-use-this': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-duplicate-imports': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-duplicates': 2,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 'off',
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    'react/jsx-indent-props': [2, 2],
    'react/display-name': 0,
    'react/prop-types': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['packages/*'],
      },
    },
    project: ['packages/*/tsconfig.json'],
    react: {
      version: 'detect',
    },
  },
}
