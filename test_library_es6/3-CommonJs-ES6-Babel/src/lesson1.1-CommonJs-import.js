// 首先，如果想要使用别的js,我们就要导入js：
// 在导入之前，由于使用频繁，我们要用一个常量来加载这个js
const importJs = require('./lesson1-CommonJs-export');

// 使用的时候，我们直接通过importJs.xxx来使用即可；
// 在这里我们导入的是四则运算，那就是importJs.sum或者importJs.mul之类的；
// 由于是方法类，都是有入参的所以要加上括号和参数，即：importJs.sum(a,b);
var number_1 = 80;
var number_2 = 20;
var total = importJs.di(number_1,number_2);
// 最后 通过终端，直接运行node lesson1.1-import查看结果
console.log(`
#####CommonJs规范，IMPORT部分：
// 首先，如果想要使用别的js,我们就要导入js：
// 在导入之前，由于使用频繁，我们要用一个常量来加载这个js
const importJs = require('./lesson1-CommonJs-export');

// 使用的时候，我们直接通过importJs.xxx(入参1，入参2)来使用即可；
// 在这里我们导入的是四则运算，那就是importJs.sum或者importJs.mul之类的；
// 由于是方法类，都是有入参的所以要加上括号和参数，即：importJs.sum(a,b);
var number_1 = 80;
var number_2 = 20;
var total = importJs.di(number_1,number_2);
`);
console.log('number1: ' + number_1);
console.log('number2: ' + number_2);
console.log('相除的结果：total: ' + total);
console.log(`console.log中，相加结果，即importJs.mul(number_1,number_2)结果为: 
${importJs.sum(number_1,number_2)}`);
console.log(`console.log中，相减结果，即importJs.mul(number_1,number_2)结果为: 
${importJs.sub(number_1,number_2)}`);
console.log(`console.log中，相乘结果，即importJs.mul(number_1,number_2)结果为: 
${importJs.mul(number_1,number_2)}`);
console.log(`console.log中，相除结果，即importJs.mul(number_1,number_2)结果为: 
${importJs.di(number_1,number_2)}`);