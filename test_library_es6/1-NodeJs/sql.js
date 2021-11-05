// 1. 导入mysql包，mysql属于第三方的外部包，需要安装依赖npm install mysql；
var db_sql = require("mysql");

// 2. 创建mysql的Connection对象；
// 3. 配置数据库链接的信息；
console.log(`
1. 创建请求链接，和创建一个服务类似都是create开头，这里创建请求链接为：createConnection；
2. 同时创建链接和配置链接都是同一个方法实现的，都在createConnection内实现，另外，createConnection内部是一个对象；
3. 定义一个变量保存起创建链接和配置链接的配置项：
host是主机，主要看数据库的配置，由于本机制定数据库的关系，这里也可以是localhost；
database，指的是使用哪个数据库：
var sql_connection = db_sql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'dwr',
    password: 'dwr',
    database: 'LocalTest'});
`);

var sql_connection = db_sql.createConnection({
        host: "127.0.0.1",
        port: 3306,
        user: "dwr",
        password: "dwr",
        database: "test" 
    });
// 4. 开辟链接；
console.log(`
4. 开辟链接，也就是使sql_connection这个配置项能够执行链接数据库操作；
sql_connection.connect();
`);
sql_connection.connect();
// 5. 执行增删改查；
console.log(`
5. 开辟了链接后，需要操作数据库，这里是查询演示，提前在本地数据库建立了user_info这个表；
query入参有两个，第一个是查询语句，第二个是返回处理；
返回处理这里用了一个Function，入参是查询返回的错误码，还有个结果，和返回数据；
error： 这里处理是有异常就直接抛出，没有异常就不处理；
results：返回查询的结果，结果是按行显示；
fields： 返回结果中，每一列的详细情况，比如user_info表中，user_id,user_name和user_desc，每一列的详细情况；
这里就仅打印error和results
`);

sql_connection.query('select * from user_info',function(error, results,fields){
    
    // 如果查询出错，则直接抛出异常
    console.log('the error is :  ' + error);
    if(error) throw error;
    // 查询成功的打印：
    console.log('query success, the result is : ', results);
    // console.log('what is the field? The anser is : ', fields);
    
});
// 6. 关闭链接；
console.log(`
6. 执行完开辟、配置、还有操作完数据库后，需要关闭数据库！
sql_connection.end();
`)
sql_connection.end();
// 7. 运行node sql.js， 查看效果；