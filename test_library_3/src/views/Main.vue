<template>
  <div>
    <el-container>
<!--      侧边栏部分-->
      <el-aside width="200px">
        <el-menu :default-openeds="['1']">
<!--          一级目录-->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-caret-right"></i>
              用户管理
            </template>
<!--            二级目录-->
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link :to="{name: 'userprofile', params: {id: 1, username: name}}">参数携带</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link :to="{name: 'userlist', params: {username: name}}">路由钩子函数的学习</router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
<!--                通过配置router中的index.js，进行重定向操作-->
                <router-link to="/backToMain">重定向：返回首页</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
<!--          第二个一级目录-->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-caret-right"></i>
              内容管理
            </template>
<!--            第二个二级目录-->
            <el-menu-item-group>
              <el-menu-item index="2-1">
                分类管理
              </el-menu-item>
              <el-menu-item index="2-2">
                时间排序管理
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-aside>
<!--      header设置-->
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <span>{{name}}</span>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Main',
  // 接收参数传递
  props: ['name']
}
</script>

<style scoped lang="scss">
  .el-header {
    background-color: #51b4c4;
    color: #083f49;
    line-height: 60px;
  }

  .el-aside {
    color: #ff7d83;
  }
</style>
