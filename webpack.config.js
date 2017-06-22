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
        path: path.join(__dirname, './dist/js'),
        filename: '[name]-[chunkhash].js'
    },
    plugins: [
        new htmlWebpackPlugin()
    ]
}