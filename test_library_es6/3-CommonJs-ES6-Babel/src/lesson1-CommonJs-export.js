// 1. 首先通过常量和箭头函数定义四则运算的function;
const sum = (a,b)=> a + b;
const sub = (a,b)=> a - b;
const mul = (a,b)=> a * b;
const di = (a,b)=> a / b;

// 2. 完成之后，其他人想要使用这个JS，就要export出来给；
module.exports = {
    sum,
    sub,
    mul,
    di
};
console.log(`
#####CommonJs规范，EXPORT部分：
1. 首先通过常量和箭头函数定义四则运算的function;
const sum = (a,b)=> a + b;
const sub = (a,b)=> a - b;
const mul = (a,b)=> a * b;
const di = (a,b)=> a / b;

2. 完成之后，其他人想要使用这个JS，就要export出来给；
module.exports = {
    sum,
    sub,
    mul,
    di
};
`);
// 实际上也可以写成这样：
// module.exports = {
//     sum: sum,
//     sub: sub,
//     mul: mul,
//     di: di
// };