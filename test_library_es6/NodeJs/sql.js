// 1. 导入mysql包，mysql属于第三方的外部包，需要安装依赖npm install mysql；
var db_sql = require("mysql");

// 2. 创建mysql的Connection对象；
// 3. 配置数据库链接的信息；
console.log(`
1. 创建请求链接，和创建一个服务类似都是create开头，这里创建请求链接为：createConnection；
2. 同时创建链接和配置链接都是同一个方法实现的，都在createConnection内实现，另外，createConnection内部是一个对象；
`);
db_sql.createConnection({
    
    host: "127.0.0.1",
    port: 3306,
    user: "dwr",
    password: "dwr",
    database: ""
});
// 4. 开辟链接；
// 5. 执行增删改查；
// 6. 关闭链接；
// 7. 运行node sql.js， 查看效果；