//暴露一个方法；
exports.say_hello_write1 = function(){
    // 在这里主要会生成一个标签文件，这个标签文件就是h1内的内容
    document.write("<h1>say_hello_write1：暴露一个方法要用到'exprots.方法名(参数) = function(){}'的方式</h1>")
}
// 暴露一个write2的方法
exports.say_hello_write2 = function(){
    // 在这里主要会生成一个标签文件，这个标签文件就是h1内的内容
    document.write("<h1>say_hello_write2：只要引入了say_hello这个模块，就可以引用这个JS里头，暴露了的方法！</h1>");
}
// 暴露一个write3的方法
exports.say_hello_write3 = function(){
    // 在这里主要会生成一个标签文件，这个标签文件就是h1内的内容
    document.write("<h1>say_hello_write3：通过这种类似JAVA引用contorl的方式，引入模块化的开发，可以实现多大型项目多个变量重名而不冲突的方式；</h1>");
}