<template>
  <div class="ba">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on">
      <h3>login</h3>
      <el-form-item>
        <span class="user">用户:</span>
        <el-input ref="user" v-model="loginForm.user" class="user" type="text" name="user" autocomplete="on" />
      </el-form-item>

      <el-form-item>
        <span class="password">密码:</span>
        <el-input ref="password" v-model="loginForm.password" class="password" type="password" name="password" />
      </el-form-item>
      <el-button class="bt" type="submit" @click="submitForm">提交</el-button>

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
      if (!validatorUsername(value)) {
        callback(new Error('用户不能为空'))
      } else {
        callback()
      }
    }
    const validatorPassword = (rule, value, callback) => {
      if (validatorPassword.length < 6) {
        callback(new Error('密码长度不符合'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        user: '',
        password: ''

      },
      loginRules: {
        user: [{ required: true, trigger: 'blur', validator: validatorUsername }],
        password: [{ required: true, tigger: 'blur', validator: validatorPassword }]
      }
    }
  },
  methods: {
    submitForm() {
      const name = this.$refs.user.value
      const pass = this.$refs.password.value
      if (name === 'admin' && pass === '12345') {
        this.$router.push({
          path: '/index'
        })
      }
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  $dark_gray:red;

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
      top: 50px;
     text-align: center;
      max-width: 100%;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;
      border:red solid 1px;
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
      top: 90px;
      left: 620px;
    }
    span.password{
      position: fixed;
      top: 120px;
      left: 620px;
    }
    span.item1{
      position: fixed;
      top: 190px;
      left: 560px;
      font-size:13px;
    }
    span.item2{
      position: fixed;
      top: 190px;
      font-size:12px;
      left: 620px;
    }

  }
  .user{
    position: fixed;
    top: 93px;
    left: 690px;
  }
  .password{
    position: fixed;
    top: 120px;
    left: 690px;
  }
  h3{
    position: fixed;
    top: 40px;
    left: 710px;
    color: blueviolet;
  }

  .bt{
    padding: 2.5px 20px;
    position: fixed;
    background-color: antiquewhite;
    color: blue;
    top: 150px;
    left: 720px;
  }

</style>
