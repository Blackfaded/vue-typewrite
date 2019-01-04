module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 0,
    'operator-linebreak': 0,
    'no-param-reassign': 0,
    'no-mixed-operators': 0,
    'arrow-parens': 0,
    'import/extensions': 0,
    'no-new': 0,
    'no-plusplus': 0,
    'class-methods-use-this': 0
    // 'import/no-unresolved': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js')
      }
    }
  },
  globals: {
    game: true
  }
};
