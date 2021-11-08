// 定义从哪里导入文件，以及导入的方法：
import {userApi_get_list,userApi_save_info} from './lesson2-es6-export.js'

// 引入之后，就可以直接使用这些方法了：
userApi_get_list();
userApi_save_info();

console.log(`
// 定义从哪里导入文件，以及导入的方法：
import {userApi_get_list,userApi_save_info} from './lesson2-es6-export.js'

// 引入之后，就可以直接使用这些方法了：
userApi_get_list();
userApi_save_info();

运行node lesson2-es6-import进行检验：发现实际不行XXXXXXXXXX

*********因为，实际浏览器是不支持ES6语法的，需要降级到es2015，才能够执行ES6当中的语句
*********这里简述babel的使用：
*********babel: 1. 初始化项目，终端上执行语句：npm init -y
*********babel:    这样在文件目录下会产生一个新的文件.package.json
*********babel: 2. 配置一个babel的依赖，.package.json文件夹中新增文件：   .babelrc
*********babel:    我们需要打包降级为es2015版本，所以在.babelrc做出如下配置：
{
    "presets": ["es2015"],
    "plugins":[]
}
*********babel: 3. 安装解码器，这一步是对应第二步的配置
*********babel:    终端上执行语句：npm install --save-dev babel-preset-es2015
*********babel: 4. 导进来后，可以使用测试依赖的脚本，打开.package.json文件；
*********babel:    在scripts标签下新增build命令："build": "babel src -d dist"
*********babel:    这句话的意思是，使用babel执行build操作，将scr文件夹的js转换到dist文件夹下；
*********babel: 5. 完成之后，我们就可以进行babel的转换了，终端上执行语句：npm run build
终端上执行语句：     也可以直接执行build的那个语句：babel src -d dist

`)