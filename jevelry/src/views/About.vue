<template>
  <div id="about">
    <!-- 上方大图 -->
    <div class="a_img" style="width:100%;height:400px;">
      <img style="width:100%;height:100%;" src="../assets/index/about/about3.jpg" alt />
      <div class="two_text" style="text-align:center;">
        <p style="font-size:36px;color:#fff;">关于我们</p>
        <p style="font-size:15px;color:#999;margin-top:20px;">更完美 更庄严</p>
      </div>
    </div>
    <!-- 下方内容 -->
    <div class="con">
      <!-- 经营理念 产品理念 合作伙伴 加入我们 -->
      <div class="a_me">
        <ul>
          <li v-for="(item,i) of about" :key="i">
            <router-link :to="`/about/${item.four_id}`">
              <div :class="{active:item.four_id==id}">
                <span>{{item.title}}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>

      <!-- 内容，父子传参 -->
      <!-- 父传子 -->
      <div class="a_con" style="padding-top:70px;">
        <son-about
          v-for="(item,i) of data"
          :key="i"
          :title="item.title"
          :subtitle="item.subtitle"
          :image="item.image"
          :id="id"
        ></son-about>
      </div>

    </div>
  </div>
</template>

<script>
// 将sonabout作为组件使用导入子组件文件
import SonAbout from "./SonAbout";
export default {
  // 注册子组件
  components: {
    SonAbout
  },
  data() {
    return {
      about: [],
      data: [],
      id: ""
    };
  },
  methods: {
    load() {
      var obj = { params: { four_id: this.$route.params.four_id } };
      var id = this.$route.params.four_id;
      this.id = id;
      // console.log(id);
      // console.log(obj);
      this.axios.get("about", obj).then(res => {
        // console.log(res);
        this.about = res.data.about;
        // 获取后台数据，判断当前id为几，赋值给data进行遍历
        if (id == 1) {
          this.data = res.data.guanyu;
        } else if (id == 2) {
          this.data = [];
          var data = res.data.chanpin;
          data.forEach(element => {
            if (element.image != null) {
              element.image = require("../assets/index/about/" +
                element.image);
            }
            this.data.push(element);
          });
        } else if (id == 3) {
          this.data = [];
          var data = res.data.hezuo;
          data.forEach(element => {
            if (element.image != null) {
              element.image = require("../assets/index/about/" +
                element.image);
            }
            this.data.push(element);
          });
        } else if (id == 4) {
          this.data = res.data.jiaru;
        }
        // console.log(this.data);
      });
    }
  },
  created() {
    this.load();
  },
  watch: {
    $route() {
      this.load();
    }
  }
};
</script>

<style>
  #about .a_img {
    position: relative;
  }
  #about .a_img > .two_text {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -26px;
    margin-left: -72px;
  }
  #about .con .a_me ul {
    justify-content: center;
    display: flex;
  }
  #about .con .a_me li {
    text-align: center;
    width: 120px;
    height: 60px;
  }
  #about .con .a_me li a {
    color: #d0d0d0;
    font-size: 14px;
    line-height: 60px;
  }
  #about .con .a_me .active {
    background-color: #202020;
    color: #ddb293;
  }
  #about .con .a_me li a div:hover {
    background-color: #202020;
    color: #ddb293;
  }
</style>