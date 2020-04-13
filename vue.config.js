const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/static/css/index.scss";`
      }
    }
  }
}