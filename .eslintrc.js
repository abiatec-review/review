module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'max-line-length': ['true', { limit: 140 }],
    'max-len': [
      'off',
      {
        code: 60,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
  },
};
