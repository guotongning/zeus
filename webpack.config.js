//导入path
const path = require('path')
//引入vue-loader 插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // 打包入口文件
    entry: './src/main.js',
    // 打包出口文件
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    //配置打包规则
    module: {
        rules: [{
            // 正则 遇到vue结尾的文件，使用vue-loader进行打包
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    //插件配置
    plugins: [
        new VueLoaderPlugin()
    ]
}