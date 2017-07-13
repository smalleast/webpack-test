/**
 * Created by dcpai on 2017/6/22.
 */
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash:5].js',
        publicPath: "http://cdn.com"
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            inject: 'head',
            title: 'this is a.html',
            chunks: ['main', 'a']
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            inject: 'head',
            title: 'this is b.html',
            chunks: ['b']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            inject: 'head',
            title: 'this is c.html',
            chunks: ['c']
        })
    ]
}