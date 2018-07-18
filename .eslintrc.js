module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/prettier',
    '@vue/typescript'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attribute-hyphenation': [
      'error',
      'always'
    ],
    'vue/html-end-tags': 'error'
  }
}