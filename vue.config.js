const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "components": "@/components",
        "router": "@/router",
        "store": "@/store",
        "views": "@/views"
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
  }
}
