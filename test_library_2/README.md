# test_library_2

> learn how to use Vue
1. 安装Node.js，可通过官网下载，内置npm；
2. 安装cnpm，也就是淘宝的镜像加速器，用管理员用户运行cmd,-g是全局变量的意思；
>npm install cnpm -g
3. 安装vue脚手架，也就是vue-cli，这里有可能会报错，报错可根据npm里头提示的语句进行解决，或者直接改用cnpm来加速；
>cnpm install vue-cli -g
4. 创建vue项目，第一步要init，用管理员用户打开cmd，在工程的目录下，在这里最后一个test_library_2属于vue的项目名称，可自定义，运行如下语句：
> vue init webpack test_library_2
5. 根据项目名称来选择是否安装相关的插件，在这里全部选否；
6. 安装好后可以运行以下语句来运行项目：
>npm run dev
7. npm命令解释：安装模块moduleName(diy)到项目名下；
>npm install moduleName(diy)
8. npm命令解释：-g的意思是全装到全局，具体安装的目录视乎npm config prefix的具体位置；
>npm install -g moduleName(diy)
9. npm命令解释：--save的意思是将模块安装到项目目录下，并在package.json文件的dependenceies节点写入依赖，-S为该命令缩写
>npm install --save moduleName(diy)
10. npm命令解释：--save-dev的意思是将模块安装到项目开发者目录下，并在package.json文件的dependenceies节点写入依赖，-D为该命令缩写
>npm install --save-dev moduleName(diy)



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
