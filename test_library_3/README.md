# test_library_3
> learn how to use elementUI
初始步骤：
1. 安装项目，在指定文件夹内创建项目文件夹，在这里我们用test_library_3来学习：
> vue init webpack test_library_3
2. 安装vue-router；
> npm install vue-router --save-dev
3. 安装淘宝的element-ui；
> npm i element-ui -S
4. 安装依赖；
> npm install
5. 在npm或者cnpm安装SASS加速器，这里是安装了两个插件，一个是sass-loader，另外一个是node-sass；
   Sass是一个将脚本解析成CSS的脚本语言，是对CSS3（层叠样式表）的语法的一种扩充。
   它可以使用巢状、混入、选择子继承等功能，可以更有效有弹性的写出Stylesheet，本项目后续需要通过sass来进行编译。
   本案例推荐使用sass-loader版本为7.3.1，node-sass版本为4.14.1；
> npm install sass-loader node-sass --save-dev
6. 可以启动测试了；
> npm run dev
7. 创建好项目后，还要增加路由即增加路由文件夹router，增加视图即增加views文件夹，静态资源均放在外层的static文件夹内。
   components存放功能性组件，views存放视图组件，router存放路由配置，static存放静态资源组件；
8. 在涉及钩子函数的学习时，需要从npm或者cnpm安装axios和vue-axios：
> npm install axios vue-axios -S
> cnpm install axios vue-axios -S
9. 推荐以下网站学习前端，文档生成器:
>https://docsify.js.org
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
