// 模块化打包，平常项目有webpack.config.dev.js或者...product.js或者其他阶段的config文件
// 在这里，我们就暂时使用webpack.config.js进行演示
module.exports = {
    // 模块的打包，需要最重要的两个属性，一个是entry，另外一个是output
    // entry代表程序的入口,相当于输入一样
    entry:'./modoules/main.js',
    // 输入之后需要输出，也就是output：
    output:{
        // 最规范的是输出bundle.js，以下是作为规范性输出，也可以输出到其他的JS中
        filename: "./js/bundle.js"
        // 完成这个步骤之后，我们需要执行打包语句，也就是webpack
        // 成功运行完这个语句之后，就会出现一个dist文件夹
        // 打开这个文件夹后，会发现bundle.js，打开JS文件，里面会把我们所有的JS自动封装成一条JS语句
    }
};