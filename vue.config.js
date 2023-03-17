const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
//   禁用eslint
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/sph_qiantai/'
        : '/'
})
