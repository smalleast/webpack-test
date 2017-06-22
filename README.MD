#webpack-test

## usage:
```学习笔记
1、output.path的路径，必须写成绝对路径，相对路径会找错，目的是为了避免容错
2、package.json->script->"webpack":"webpack --config webpack.config.js --progress --display-modules --colors --display-reasons"
注：webpack --config webpack.config.js  指定webpack配置文件路径
--progress 查看打包的进度
--display-modules 查看打包的模块
--colors 设置打包的文字是彩色的
--display-reasons 查看打包的原因
3、let path = require('path');
module.exports = {
    entry: {
        main: './src/script/main.js',
        app: './src/script/app.js'
    },
    output: {
        path: path.join(__dirname, './dist/js'),
        filename: '[name]-[hash].js'
        filename: '[name]-[chunkhash].js'
    }
}
注：[name] 与entry的文件名相对应
      [hash] 打包时的主要hash
      [chunkhash]打包时，每个文件生成一个hash值，修改，才会发生变化，用来记录每个文件版本
4、"clean": "rimraf dist","dev": "npm run clean&&webpack"
注：rimraf是删除文件夹，需要npm安装
```
