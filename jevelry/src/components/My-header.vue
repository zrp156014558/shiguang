<template>
  <div id="header_content">
    <!-- 左logo -->
    <div id="header_logo">
      <router-link to="/">
        <img src="../assets/index/logo.png">
      </router-link>
    </div>
    <!-- 中间导航 -->
    <el-menu 
    :default-active="activeIndex" 
    class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect"
    background-color="#000"
    >
      <el-submenu index="1" popper-class="textClass">
        <template slot="title">钻石订制</template>
        <el-menu-item index="1-1">
          <router-link to="/productlist/3/黑珍珠">黑珍珠</router-link>
        </el-menu-item>
        <el-menu-item index="1-2">
          <router-link to="/productlist/1/戒指">戒指</router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2" popper-class="textClass">
        <template slot="title">求婚钻戒</template>
        <el-menu-item index="2-1">
          <router-link to="/productlist/6/彩色钻石">彩色钻石</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/productlist/5/钻石">钻石</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">
          <router-link to="/productlist/4/项链">项链</router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3" popper-class="textClass">
        <template slot="title">真爱礼物</template>
        <el-menu-item index="3-1">
          <router-link to="/productlist/5/白金戒指">白金戒指</router-link>
        </el-menu-item>
        <el-menu-item index="3-2">
          <router-link to="/productlist/4/坠链">坠链</router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4" popper-class="textClass">
        <template slot="title">真爱体验</template>
        <el-menu-item index="4-1">
          <router-link to="/productlist/2/项链">项链</router-link>
        </el-menu-item>
        <el-menu-item index="4-2">
          <router-link to="/productlist/5/戒指">戒指</router-link>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="5" popper-class="textClass">
        <template slot="title">关于我们</template>
        <el-menu-item index="5-1">
          <router-link to="/about/1">品牌理念</router-link>
        </el-menu-item>
        <el-menu-item index="5-2">
          <router-link to="/about/2">产品理念</router-link>
        </el-menu-item>
        <el-menu-item index="5-3">
          <router-link to="/about/3">合作伙伴</router-link>
        </el-menu-item>
        <el-menu-item index="5-4">
          <router-link to="/about/4">加入我们</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- 登录注册部分 -->
    <div id="header_login">
      <ul v-if="!uname" id="d1" class="hupul">
        <li>
          <router-link :to="{path:'/login'}">登录</router-link>
        </li>
        <li style="margin:0 20px">|</li>
        <li>
          <router-link :to="{path:'/register'}">注册</router-link>
        </li>
      </ul>
      <ul v-else  id="d2" class="hupul">
        <li style="margin-left:10px">
          <span style="color:white">欢迎{{this.uname}}</span>
        </li>
        <li style="margin:0 20px;color:#666">|</li>
        <li style="margin-left:10px">
          <a href="javascript:;" @click="signout">注销</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        activeIndex: '',
        activeIndex2: ''
      };
    },
    computed: {
    //固定写法 ...mapState([state中的属性名...])
    ...mapState(["uname", "uid", "phone"])
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      // 注销
      signout(){
        // 1.清空session保存的用户信息
        sessionStorage.clear();
        // 2.执行vuex中的函数
        this.$store.commit("updateUser");
      }
    }
  }
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
a{
  color: #909399;
}
#header_content{
  height: 67px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  min-width: 800px;
}
/* logo图片样式 */
#header_logo img{
  width: 175px;
  height: 20px;
  padding-top: 20px;
}
/* 导航栏对齐 */
#header_content .el-menu.el-menu--horizontal {
  border-bottom: 0;
}
/* 导航栏的标题悬浮 */
#header_content .el-submenu_title{
  color:#909399;
}
#header_content .el-submenu__title:hover {
  display: block;
  color: #ddb293;
}
/* 鼠标悬停后的内部文字信息提示 */
.textClass .el-menu--popup {
  background-color: rgba(0, 0, 0, 0) !important;
  border: 0;
  width: 100px !important;
}
 .textClass .el-menu--popup-bottom-start {
  margin-top: 0;
  padding-bottom: 0;
}
.textClass .el-menu .el-menu-item {
  background-color: rgba(0, 0, 0, 0.1) !important;
  width: 100px;
  display: block;
  text-align: center;
}
.textClass .el-menu .el-menu-item a:hover {
  color: #ddb293;
}
#header_content .textClass .el-menu .el-menu-item.is-active {
  color: #909399;
}
#header_content a:hover {
  color: #ddb293;
}
#header_content .el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 100px !important;
} 
/* 登录注册 */
#header_content #header_login {
  text-align: center;
  margin: auto 0;
}
#d1,#d2{

  display: flex;
}
</style>