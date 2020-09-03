<template>
  <div id="conn">
    <main class="text-center">
      <div class="login">
        <div class="l_one">
          <p style="font-size:20px;color:#ddb293;">珠宝会员登录</p>
          <router-link style="font-size:14px;color:#ddb293;margin-top:8px;" to="/register">新用户注册</router-link>
        </div>
        <div>
          <input
            placeholder="请输入用户名"
            id="uname"
            v-model="uname"
            @blur="unameblur"
            @focus="unamefocus"
          />
          <span id="utxt">请输入3~12位数字或字母，不能以数字开头</span>
        </div>
        <div>
          <input
            type="password"
            placeholder="请输入密码"
            v-model="upwd"
            id="upwd"
            @focus="upwdfocus"
            @blur="upwdblur"
          />
          <span id="ptxt">请输入6~12位数字或字母</span>
        </div>
        <div class="l_one">
          <label class="yes" style="font-size:14px;position: relative;">
            <input type="checkbox" />记住登录名
          </label>
          <a class="ayes" href="javascript:;" style="font-size:14px;">忘记密码?</a>
        </div>
        <div class="l_btn">
          <button class="btn" @click="login">登录</button>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
    };
  },
  methods: {
    unamefocus() {
      //用户名输入框获取焦点
      // var utxt=document.getElementById("utxt");
      // utxt.style.display="block"
      $("#utxt").css({ display: "block", color: "#000" });
    },
    upwdfocus() {
      //焦点输入框获取焦点   //验证修改
      if ($("#utxt").css("display") == "block") {
        $("#txt").css("display", "none");
      }
      $("#ptxt").css("display", "block");
    },
    unameblur() {
      //用户名输入框失去焦点验证
      var reg = /^\w{3,12}$/i;
      if (!reg.test(this.uname)) {
        $("#utxt").css("color", "red");
        $("#utxt").html("用户名格式不正确！！");
        this.uname = "";
        $("#uname").focus();
        return;
      } else {
        $("#utxt").css("color", "green");
        $("#utxt").html("用户名输入成功！！");
        $("#upwd").focus();
      }
    },
    upwdblur() {
      //密码输入框失去焦点验证
      var reg = /^[0-9a-z]{6,12}$/i;
      if (!reg.test(this.upwd)) {
        $("#ptxt")
          .css("color", "red")
          .html("密码格式不正确！");
        this.upwd = "";
        return;
      } else {
        $("#ptxt")
          .css("color", "green")
          .html("密码输入成功！");
        return;
      }
    },
  }
};
</script>
<style  scoped>
main {
  height: 350px;
}

.login {
  position: absolute;
  top: 15%;
  left: 50%;
  margin-left: -200px;
  background: white;
  padding: 20px;
  width: 310px;
}
.login .l_one {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
/* .login .register {
  font-size: 14px;
  margin-left: 65px;
  color: #222;
  text-decoration: none;
} */
.login div > input {
  border: 0;
  width: 300px;
  height: 35px;
  margin-bottom: 15px;
  padding-left: 15px;
  font-size: 14px;
  opacity: 0.7;
}
/* .login .changecan {
  display: block;
  font-size: 14px;
} */
.login .l_btn {
  margin: 0 auto;
  width: 300px;
  height: 40px;
}
.login .btn {
  width: 100%;
  height: 100%;
  font-size: 20px;
  border: 0;
  border-radius: 5px;
  background: #fab7da;
}
/* #ttest {
  display: block;
  font-size: 12px;
} */
#utxt,
#ptxt {
  display: none;
  font-size: 12px;
}
</style>
