// 导入模块使用require方式，console说明了require和import的区别；
console.log(`
1. require 是CommonJS的语法，CommonJS的模块是对象，输入时必须查找对象属性。
import 是ES6为js模块化提出的新的语法,import (导入)要与export(导出)结合使用。
2. require 和 import 分别是不同模块化规范下引入模块的语句。
3. 调用时间：
require是运行时调用，所以require理论上可以运用在代码的任何地方
import是编译时调用，所以必须放在文件开头
4. 本质：
require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量
import是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require
`);
const http = require('http');
// 1. 创建一个httpserver服务；
http.createServer(function(request,response){
    // 浏览器如何判断请求能够正常输出，以及正常输出后，需要什么类型
    console.log(`
    1. 创建一个httpserver服务：http.createServer();
    1.1 首先创建response.writeHead，目的是告诉浏览器正常输出的请求代码，以及正常输出后，需要什么类型展示:
    以下是response.writeHead(200, {'Content-Type':'text/plain'});
    意思是，通过返回码200判断请求正常输出，输出类型为text类型，也就是文本类型;
    我们可以通过xml类型、json类型或者是html类型返回数据，以项目的主体架构来决定，这里只是用text进行演示；
    1.2 接着就是创建一个返回的请求，返回输出是'Success Response The Http Request!!'
    `)
    response.writeHead(200, {'Content-Type':'text/plain'});
    console.log('1.1 已完成；')
    // 给浏览器输出内容：

    response.end('Success Response The Http Request!!');
    console.log('1.2 已完成');
}).listen(8080);
// 2. 监听一个端口：8080；
    console.log(`
    2. 监听端口8080，和创建端口8080是一起的，就是在创建端口后面，.listen(8080)即可；
    也就是说创建端口和监听端口，是同一段代码；
    http.createserver(function(request,response){ 请求服务中的配置，包括判断返回类型，返回数据等； }).listen(8080;)
    2 已完成
    
    3. 这个案例，目的是通过Node.Js的httpSever来模拟Java中的Tomcat的服务，以此证明Node.Js是一门服务端语言；
    `)
// 3. 启动运行服务： node httpServer.js;
// 4. 在浏览器访问我们的http://localhost:8080