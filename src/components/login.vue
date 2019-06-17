<template>
  <div class="ba">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" autocomplete="on">
      <div class="padd">
        <span>用户</span><el-input ref="user" v-model="loginForm.user" type="text" name="user" autocomplete="on" />
      </div>
      <label>密码</label><el-input ref="password" v-model="loginForm.password" type="password" name="password" />
      <el-button class="bt" type="submit" @click="submitForm">提交</el-button>
      <el-form-item class="lab">
        <el-label>注册</el-label>
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

        // this.$router.push({
        //   path: '/index'
        // });
      }
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .img1 {
    width: 20%;
    height: 100%;
  }
  .ba{
    height: 100%;
    width: 100%;
    background-image: url("../assets/lc.png") ;
    background-repeat: no-repeat;
    background-size: auto ;
  }
  .lab{
    font-size: 7px;
    color: brown;
    text-align: left;
  }
  .bt{
    padding: 2.5px 40px;
  }
  .padd{
    padding: 3px;
  }

</style>
