module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.html$/i,
          use: ['raw-loader'],
        },
        {
          test: /\.(ico)$/,
          exclude: /(node_modules|public)/,
          use: ['file-loader'],
        },
      ],
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
  },
}
