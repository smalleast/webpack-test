/**
 * Created by dcpai on 2017/6/22.
 */
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/script/main.js',
        app: './src/script/app.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash:5].js',
        publicPath: "http://cdn.com"
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'main.html',
            template: 'index.html',
            inject: 'head',
            title: 'this is main.html',
            chunks:['main']
        }),
        new htmlWebpackPlugin({
            filename: 'app.html',
            template: 'index.html',
            inject: 'head',
            title: 'this is app.html',
            chunks:['app']
        })
    ]
}