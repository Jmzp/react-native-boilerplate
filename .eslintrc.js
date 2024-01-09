module.exports = {
  env: {
    es2020: true,
    jest: true,
  },
  extends: [
    '@react-native-community',
    'plugin:import/recommended',
    'plugin:react-native-a11y/basic',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['module-resolver'],
  parser: '@babel/eslint-parser',
  root: true,
  rules: {
    'module-resolver/use-alias': 'error',
    'no-console': 'warn',
    'import/order': [
      'error',
      { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] },
    ],
  },
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
    'import/resolver': {
      'babel-module': {},
    },
  },
};
