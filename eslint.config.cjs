const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended, 
});

module.exports = [
  js.configs.recommended,

  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'prettier'
  ),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'script',
      ecmaFeatures: { jsx: true },
      globals: { __dirname: 'readonly' }
    },
    env: {
      browser: true,
      node: true,
      es6: true,
      'react-native/react-native': true,
    },
    plugins: {
      react: require('eslint-plugin-react'),
      'react-native': require('eslint-plugin-react-native'),
    },
    rules: {
      'react/prop-types': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
];
