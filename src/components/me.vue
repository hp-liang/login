<template>
  <div >
    <table style="border:solid 1px #ff4d2b;width: 400px">
     <tr>
       <td>name</td><td>value</td>
     </tr>
      <tr>
        <td>账号:</td>
        <td>{{username}}</td>
      </tr>
      <tr>
        <td>密码:</td>
        <td>{{password}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Me',
  data() {
    return {
      username:this.$cookies.get('name'),
      password:this.$cookies.get('password')
    }
  }
}
</script>

<style scoped>
</style>
