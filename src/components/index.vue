<template>
  <div class="ba">
    <header>
      <input type="text" style="width: 150px;position: relative;right: 70%" placeholder="请输入查询消息">
      <a href="#"><img src="../assets/timg.png" style="width: 19px;position: relative;right:72%;top: 5px"></a>
      <a href="login.vue" style="right:30px;position: relative">登录</a>
      <a href="login.vue" style="right:20px;position: relative">注册</a>
    </header>
    <h2>阴阳师<span>茨木童子</span>的传记</h2>

    <a href="https://yys.163.com/shishen/265.html" title="点击前往官网">
      <img src="../assets/cimu.png" align="left" width="570" height="500" vspace="40">
    </a>
    <div style="width: 300px;position:fixed;right: 700px;bottom: 0">
      <span>传记一</span>
      <p>♠&nbsp;六道众生，万物生灵都不过是这三千世界中的沧海一粟，妖怪亦然。</p>
      <p>♠&nbsp;一旦松懈，就会被其他的种族欺凌，玩弄，甚至屠戮。</p>
      <p>♠&nbsp;所以他们必须有一个领导者来指导他们。</p>
      <p>♠&nbsp;为了在这弱肉强食的世界中活下去，匍匐在强者的脚下吧！</p>
    </div>
    <div style="width: 300px;position:fixed;right: 320px;bottom: 90px">
      <span>传记二</span>
      <p>♠&nbsp;他，就像一片混沌中的明亮灯塔。</p>
      <p>♠&nbsp;他实力超群，头脑聪明、还冷静谨慎得令人可怕！</p>
      <p>♠&nbsp;这就是我的挚友，酒吞童子！君临妖族巅峰的男人！</p>
      <p>♠&nbsp;但，令人恼火的是，如今的他却被两样东西冲昏了头脑。</p>
      <p>♠&nbsp;那就是女人和酒。</p>
    </div>
    <div style="width: 300px;position:fixed;right: 10px;top: 200px">
      <span>传记三</span>
      <p>♠&nbsp;名叫红叶的女鬼，就是因为那女人，酒吞童子才会……！</p>
      <p>♠&nbsp;我要快点帮助他找回自己……从哪着手好呢？！</p>
      <p>♠&nbsp;对了，安倍晴明！</p>
      <p>♠&nbsp;这个与红叶有关的人类阴阳师，只要找到他，想必酒吞童子一定能够取回失去的怒火与憎恨！</p>
    </div>
    <p style="position: fixed;bottom:0px;right: 0px;">原文链接：<span>https://yys.163.com/shishen/265.html </span>文章分类：<span>艺术设计</span></p>
  </div>
</template>
<script>
export default {
  name: 'Index'
}
</script>

<style  lang="scss" scoped>
  .ba {
    height: 100%;
    width: 100%;
    left: 0px;
    bottom: 0;
    background-image: url("../assets/banruo.png");
    opacity: 0.8;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
  }
    p{
    font-style: normal;
      color: aquamarine;
    font-size: 14px;
  }
  span{
    color: red;
    text-decoration: underline;
  }
  header{
    border: aquamarine 1px solid;
    background: aquamarine;
    height: 40px;
    font-size: 20px;
    text-align: right;
  }
  a:active {
    color: red;
    text-decoration:none;
  }
  a{
    color: #076BBC;
    font-style: italic;
    font-weight:100;
  }
  h2{
    font-family:jianzhi;
    text-align:center;
    font-size:36px;
    color:#666;
    letter-spacing:10px;
  }
</style>
