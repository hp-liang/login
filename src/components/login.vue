<template>
  <div >
<img src="../assets/logo.png">
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="100px">
        用户：<input type="text" v-model="loginForm.user"  ref="user" name="user"></input>

      <pre/>
        密码：<el-input type="password" v-model="loginForm.password" ref="password" name="password"></el-input>
      <pre/>
      <el-form-item>
        <button type="submit" @click="submitForm">提交</button>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      const validatorUsername=(rule,value,callback)=>{
        if(!validatorUsername(value)){
          callback(new Error('用户不能为空'));
        }else{
          callback();
        }
      }
      const validatorPassword=(rule,value,callback)=>{
        if(validatorPassword.length<6){
          callback(new Error('密码长度不符合'));
        }else{
          callback();
        }
      }
      return {
        loginForm: {
          user: '',
          password: '',
        },
        loginRules: {
           user:[{required:true,tigger:'blur',validator:validatorUsername}],
          // password:[{required:true,tigger:'blur',validator:validatorUsernamePassword}]
        }
      };
    },
    methods: {
      submitForm() {
        // let name = this.$refs.user.value;
        // let pass = this.$refs.pass.value;
        //
        // if (name === 'admin'&&pass==='12345') {
        //
        //   this.$router.push({
        //     path: '/index'
        //   });
        // }
      }

    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >


</style>
