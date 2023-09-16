const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            sass: {
                implementation: require('sass')
            }
        }
    },
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                ws: true,
                secure: false
            }
        }
    }
})
