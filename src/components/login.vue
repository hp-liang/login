<template>
  <div class="ba">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on">
      <h3>登录</h3>
      <el-form-item prop="username">
        <span class="user">用户:</span>
        <el-input ref="username" v-model="loginForm.username" class="user" type="text" name="username" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="password">密码:</span>
        <el-input ref="password" v-model="loginForm.password" class="password" type="password" name="password" />
      </el-form-item>
      <el-button class="bt" type="submit" @click="submitForm('loginForm')">提交</el-button>

      <el-form-item>
        <span class="item1">注册</span>
        <span class="item2">忘记密码？</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    const validatorUsername = (rule, value, callback) => {
      if (!(value)) {
        callback(new Error('用户不能为空'))
      } else if (value.length < 2) {
        callback(new Error('用户长度不符合'))
      } else {
        callback()
      }
    }
    const validatorPassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码长度不符合'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'er',
        password: '111111'

      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validatorUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatorPassword }]
      }
    }
  },
  methods: {
    submitForm(loginForm) {
      // const name = this.$refs.username.value
      // const pass = this.$refs.password.value
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$router.push('/index')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  $dark_gray: #fff71b;

  .ba{
    height: 100%;
    width: 100%;
    left: 0px;
    bottom: 0;
    background-image: url("../assets/gb.png") ;
    background-repeat: no-repeat;
    background-size: 100% 100% ;
    position: absolute;

    .login-form {
      position:relative;
      width: 300px;
      top: 150px;
     text-align: center;
      max-width: 100%;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;
      background: rgba(88, 43, 63, 0.48);
      border: rgba(66, 76, 42, 0.48) solid 1px;
    }

    span {
      position: fixed;
      padding: 6px 6px;
      color: $dark_gray;
      vertical-align: middle;
      width: 60px;
      display: inline-block;
    }
    span.user{
      position: fixed;
      top: 190px;
      left: 620px;
    }
    span.password{
      position: fixed;
      top: 210px;
      left: 620px;
    }
    span.item1{
      position: fixed;
      top: 290px;
      left: 560px;
      font-size:13px;
    }
    span.item2{
      position: fixed;
      top: 290px;
      font-size:12px;
      left: 620px;
    }

  }
  .user{
    position: fixed;
    top: 193px;
    left: 690px;
  }
  .password{
    position: fixed;
    top: 220px;
    left: 690px;
  }
  h3{
    position: fixed;
    top: 140px;
    left: 740px;
    color: #fff71b;
  }

  .bt{
    padding: 2.5px 20px;
    position: fixed;
    background-color: antiquewhite;
    color: blue;
    top: 250px;
    left: 730px;
  }

</style>
