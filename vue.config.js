const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('autoprefixer')(),
            require('postcss-preset-env')(),
            require('postcss-pxtorem')({
              rootValue: 16,
              unitPrecision: 5,
              propList: ['*'],
              selectorBlackList: [],
              replace: true,
              mediaQuery: false,
              minPixelValue: 0,
              exclude: /node_modules/i,
            }),
          ],
        },
      },
    },
  },
})
