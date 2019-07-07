<template>
    <div class="p">
      <p>{{username}}</p>
      <div class="div">dfsfa</div>
    </div>
</template>

<script>
    export default {
        name: "me",
      data(){
          return{
            username:'fdsafs'
          }
      }

    }
</script>

<style scoped>
  .div{
    display: none;
  }
.p:hover .div{
 display: initial;
}
</style>
