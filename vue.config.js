const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '',
  pwa: {
    themeColor: "#42b983",
    msTileColor: "#42b983",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
      background_color: "#42b983"
    },
    workboxPluginMode: "InjectManifest",
        workboxOptions:{
            swSrc:"./src/service-worker.js",
            swDest: "service-worker.js"
        }
  }
})
