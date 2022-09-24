module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    parserOptions: {
      
    },
    extends: [
      '@nuxtjs',
      'prettier',
      'prettier/vue',
      'plugin:nuxt/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['nuxt', 'prettier'],
    // add your custom rules here
    rules: {
      "no-console": "off",
      "prettier/prettier": ["error", {
       "endOfLine":"auto"
     }],
    },
  }
  