const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
//   禁用eslint
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/sph_qiantai/'
        : '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://gmall-h5-api.atguigu.cn',
            },
            '/mock':{
                target: 'http://localhost:8000',
            }
        }
    }
})
