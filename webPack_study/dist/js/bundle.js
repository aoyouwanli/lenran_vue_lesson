(()=>{var e,t={222:(e,t)=>{t.say_hello_write1=function(){document.write("<h1>say_hello_write1：暴露一个方法要用到'exprots.方法名(参数) = function(){}'的方式</h1>")},t.say_hello_write2=function(){document.write("<h1>say_hello_write2：只要引入了say_hello这个模块，就可以引用这个JS里头，暴露了的方法！</h1>")},t.say_hello_write3=function(){document.write("<h1>say_hello_write3：通过这种类似JAVA引用contorl的方式，引入模块化的开发，可以实现多大型项目多个变量重名而不冲突的方式；</h1>")}}},o={};(e=function e(r){var l=o[r];if(void 0!==l)return l.exports;var i=o[r]={exports:{}};return t[r](i,i.exports,e),i.exports}(222)).say_hello_write1(),e.say_hello_write2(),e.say_hello_write3()})();