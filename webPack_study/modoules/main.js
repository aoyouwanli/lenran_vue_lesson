// 导入say_hello这个JS，里头不需要写到say_hello.js的方式，因为是导入一个模块的形式，并不是导入一个文件
// require("./say_hello");
// 接下来，我们要使用一个变量来接收这个导入的模块
var receive_hello = require("./say_hello");
// 接收了say_hello这个模块后，我们就可以通过receive_hello这个变量来使用say_hello.js里头暴露的方法，比如：
receive_hello.say_hello_write1();
receive_hello.say_hello_write2();
receive_hello.say_hello_write3();