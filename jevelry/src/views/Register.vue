<template>
  <div id="con">
    <!-- 注册页面 -->
    <main>
      <div class="reg">
        <div 
          style="display: flex;justify-content: space-between;margin-bottom: 20px;">
          <h3 style="font-size:20px;color:#ddb293;">欢迎注册珠宝商城</h3>
          <router-link
            style="font-size:14px;color:#ddb293;margin-top:8px;"
            :to="{path:'login'}"
          >已有账号</router-link>
        </div>
        <!-- 输入框 -->
        <div>
          <input 
            type="text"
            id="uname"
            placeholder="请输入您的用户名"
            v-model="uname" 
            @blur="blur"
            @focus="focus"
          >
          <span id="name"></span>
        </div>
        <div>
          <input 
            type="passward"
            id="upwd"
            placeholder="请输入您的密码"
            v-model="upwd" 
            @blur="blur"
            @focus="focus"
          >
          <span id="pwd"></span>
        </div>
        <div>
          <input 
            type="passward"
            id="cpwd"
            placeholder="请再次输入密码"
            v-model="cpwd" 
            @blur="blur"
            @focus="focus"
          >
          <span id="tpwd"></span>
        </div>

        <div>
          <!-- type="text" -->
          <!-- @focus="focus" -->
          <input 
            id="email"
            placeholder="请输入您的邮箱"
            v-model="email" 
            @blur="blur"
          >
          <span id="mail"></span>
        </div>
        <div>
          <!-- type="text" -->
          <!-- @focus="focus" -->
          <input 
            id="phone"
            placeholder="请输入您的电话"
            v-model="phone" 
            @blur="blur"
            class="p-2 mr-3"
          >
          <span id="tel"></span>
        </div>
        <div>
          <button class="regbtn" @click="reg">注册</button>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      cpwd: "",
      email: "",
      phone: "",
    };
  },
  methods:{
    // 获取焦点触发事件
    foucs(e){
      var that = e.target;
      // 输入的内容条件
      // vue链式结构
      if (that.id == "uname") {
        // 选择id=uname的标签
        $("#name")
          // 样式
          .css("color", "#ddb293;")
          // 显示内容
          .html("请输入3~12位数字、字母或下划线，不能以数字开头");
        return;
      } else if (that.id == "upwd") {
        $("#pwd")
          .css("color", "#ddb293;")
          .html("请输入6~12位数字或字母");
        return;
      } else if (that.id == "cpwd") {
        $("#tpwd")
          .css("color", "#ddb293;")
          .html("请输入6~12位数字或字母");
        return;
      }
    },
    // 失去焦点触发事件
    blur(e) {
      var input = e.target;
      // 验证输入的信息
      // 验证用户名
      if (input.id == "uname") {
        var u = this.uname;
        // 如果用户名为空
        // 正则表达式
        var reg = /^[a-z]\w{2,11}$/i;
        // 测试结果
        if (!u) {
          $("#name")
            .css("color", "red")
            .html("用户名不能为空");
          return;
        }else if (!reg.test(u)) {
          this.uname = "";
          $("#name")
            .css("color", "red")
            .html("用户名格式不正确");
          return;
        } else {
          var url = "check";
          var obj = { params: { uname: this.uname } };
          // console.log(obj);
          this.axios.get(url, obj).then(res => {
            // console.log(res);
            // console.log(res.data);
            if (res.data.code == 1) {
              $("#name")
                .css("color", "red")
                .html("用户名已存在");
              this.uname = "";
              return;
            } else {
              $("#name")
                .css("color", "green")
                .html("√");
              return;
            }
          });
        }
      // 密码
      } else if (input.id == "upwd") {
        var p = this.upwd;
        var reg = /^[0-9a-z]{6,12}$/i;
        if (!p) {
          $("#pwd")
            .css("color", "red")
            .html("密码不能为空");
          return;
        }else if (!reg.test(p)) {
          this.upwd = "";
          $("#pwd")
            .css("color", "red")
            .html("密码格式不正确");
          return;
        } else {
          $("#pwd")
            .css("color", "green")
            .html("√");
          return;
        }
      // 验证密码
      } else if (input.id == "cpwd") {
        var p = this.upwd;
        var t = this.cpwd;
        if (!t) {
          $("#tpwd")
            .css("color", "red")
            .html("密码验证不能为空");
          return;
        }else if (p != t) {
          this.cpwd = "";
          $("#tpwd")
            .css("color", "red")
            .html("前后密码不一致");
          return;
        } else {
          $("#tpwd")
            .css("color", "green")
            .html("√");
          return;
        }
      // 验证邮箱
      } else if (input.id == "email") {
        var e = this.email;
        var reg = /^[0-9a-z]\w*@\w+\.\w+(\.cn)?$/i;
        if (!e) {
          $("#mail")
            .css("color", "red")
            .html("邮箱不能为空！");
          // alert("邮箱不能为空！");
          return;
        }else if (!reg.test(e)) {
          $("#mail")
            .css("color", "red")
            .html("邮箱格式不正确");
          return;
        } else {
          $("#mail")
            .css("color", "green")
            .html("√");
          return;
        }
        // 验证手机号
      } else if (input.id == "phone") {
        var ph = this.phone;
        var reg = /^1[3-9]\d{9}$/;
        if (!ph) {
          $("#tel")
            .css("color", "red")
            .html("电话不能为空！");
          // alert("电话不能为空！");
          return;
        }else if (!reg.test(ph)) {
          $("#tel")
            .css("color", "red")
            .html("电话格式不正确");
          return;
        } else {
          $("#tel")
            .css("color", "green")
            .html("√");
          return;
        }
      }
    },
    reg() {
      var name = this.uname;
      var pwd = this.upwd;
      var cp = this.cpwd;
      var em = this.email;
      var ph = this.phone;
      var obj = {
        params: { uname: name, upwd: pwd, email: em, phone: ph }
      };
      // console.log(obj);
      this.axios.get("reg", obj).then(res => {
        // console.log(res);
        if (res.data.code == -1) {
          alert("注册失败,请重试");
          this.$router.push("register");
          $("#uname").focus();
        } else {
          alert("注册成功");
          this.$router.push("/");
        }
      });
    }
  }
}
</script>
<style>
  main {
  height: 500px;
}
.reg {
  position: absolute;
  top: 15%;
  left: 50%;
  margin-left: -190px;
  width: 380px;
  background: white;
  padding: 20px;
}
.reg .regbtn {
  border: 0;
  border-radius: 5px;
  display: block;
  width: 328px;
  height: 50px;
  font-size: 22px;
  margin: 10px 0 30px 27px;
  background: #fab7da;
  color: #333;
}
.reg div > input {
  border: 2px solid #fadca6;
  width: 320px;
  height: 48px;
  margin-bottom: 15px;
  padding-left: 60px !important;
  font-size: 14px;
  color: black !important;
  /* opacity:0.1; */
}
/* input字体样式 */
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #000 !important;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #000 !important;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #000 !important;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #000 !important;
}
.reg #uname {
  background: url("../assets/small/user.png") no-repeat 3%;
}
.reg #cpwd {
  background: url("../assets/small/password.png") no-repeat 3%;
}
.reg #upwd {
  background: url("../assets/small/password.png") no-repeat 3%;
}
.reg #email {
  background: url("../assets/small/email.png") no-repeat 3%;
}
.reg #phone {
  background: url("../assets/small/phone.png") no-repeat 3%;
}
.reg #uname,
.reg #upwd,
.reg #cpwd,
.reg #email,
.reg #phone {
  background-size: 10%;
}
</style>