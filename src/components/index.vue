<template>
  <div class="ba">
    <header>
      <input type="text" style="width: 150px;position: relative;left: 30%" placeholder="请输入查询消息">
      <a href="https://www.baidu.com"><img src="../assets/timg.png" style="width: 19px;position: relative;left:28.5%;top: 5px"></a>
      <a href="login.vue" style="left:83%;position: relative;color: red ">注销</a>
      <h2>阴阳师<span>茨木童子</span></h2>
    </header>
    <details>
      <summary style="position:absolute;right:6%;top: 3px;width: 56px;color:#ff1e0d;top:5px;line-height: 16px;opacity: 0.8">我的</summary>
      <ol style="position:absolute;right:3%;top: 3px;opacity: 0.4;">
        <table style="border:solid 1px #ffe517;width: 200px;background: #e2ddff;position: relative;top: 10px">
          <tr>
            <td style="text-align: center">您的账号信息</td>
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
      </ol>
    </details>
    <a href="https://yys.163.com/shishen/265.html" title="点击前往官网">
      <img src="../assets/cimu.png" align="left" width="570" style="position: absolute;left: 0px;bottom: 0">
    </a>
    <div style="width: 300px;position: absolute;left:420px;bottom: 60px;color: #dccead">
      <span>传记一</span>
      <p>♠&nbsp;六道众生，万物生灵都不过是这三千世界中的沧海一粟，妖怪亦然。</p>
      <p>♠&nbsp;一旦松懈，就会被其他的种族欺凌，玩弄，甚至屠戮。</p>
      <p>♠&nbsp;所以他们必须有一个领导者来指导他们。</p>
      <p>♠&nbsp;为了在这弱肉强食的世界中活下去，匍匐在强者的脚下吧！</p>
    </div>
    <div style="width: 300px;position: absolute;left:750px;bottom: 40px;color: #dccead">
      <span>传记二</span>
      <p>♠&nbsp;他，就像一片混沌中的明亮灯塔。</p>
      <p>♠&nbsp;他实力超群，头脑聪明、还冷静谨慎得令人可怕！</p>
      <p>♠&nbsp;这就是我的挚友，酒吞童子！君临妖族巅峰的男人！</p>
      <p>♠&nbsp;但，令人恼火的是，如今的他却被两样东西冲昏了头脑。</p>
      <p>♠&nbsp;那就是女人和酒。</p>
    </div>
    <div style="width: 300px;position:absolute;right:100px;bottom: 40px;color: #dccead">
      <span>传记三</span>
      <p>♠&nbsp;名叫红叶的女鬼，就是因为那女人，酒吞童子才会……！</p>
      <p>♠&nbsp;我要快点帮助他找回自己……从哪着手好呢？！</p>
      <p>♠&nbsp;对了，安倍晴明！</p>
      <p>♠&nbsp;这个与红叶有关的人类阴阳师，只要找到他，想必酒吞童子一定能够取回失去的怒火与憎恨！</p>
    </div>
    <p style="position:absolute;bottom:0px;right: 0px;color: #ffbf31">原文链接：https://yys.163.com/shishen/265.html&nbsp;&nbsp;文章分类：艺术设计</p>
    <!--    <details>-->
    <!--      <summary style="position: absolute;bottom: 30px;right: 20px;color: red">更多>></summary>-->
    <ol style="position: absolute;top: 100%;right: 40%">
      <li>
        <div id="section2">
          <div class="section_container">
            <div class="qingbao_container">
              <p style="position: absolute;left: 5%;top:0%;color: #333333;font-style:italic;font-size: 60px">情报</p>
              <div class="data_title">
                <div class="before_title title">
                  <h3 class="jue_title">觉醒前</h3>
                  <div class="pic_wrap">
                    <img src="https://yys.res.netease.com/pc/zt/20161108171335/data/before_awake/265.jpg">
                  </div>
                </div>
                <div class="title">
                  <h3 class="jue_title">觉醒后</h3>
                  <div class="pic_wrap">
                    <img src="https://yys.res.netease.com/pc/zt/20161108171335/data/after_awake/265.jpg">
                  </div>
                </div>
              </div>
              <ul>
                <li class="normal_in">
                  <div class="l_name"><em class="attack" /><span class="span">攻击</span></div>
                  <div class="l_name"><em class="life" /><span class="span">生命</span></div>
                  <div class="l_name"><em class="defence" /><span class="span">防御</span></div>
                  <div class="l_name"><em class="speed" /><span class="span">速度</span></div>
                  <div class="l_name"><em class="baoji" /><span class="span">暴击</span></div>
                  <div class="l_name"><em class="baoshang" /><span class="span">暴击伤害</span></div>
                  <div class="l_name"><em class="mingzhong" /><span class="span">效果命中</span></div>
                  <div class="l_name"><em class="opposite" /><span class="span">效果抵抗</span></div>
                </li>
                <li class="normal_info">
                  <div class="l_name"><span class="span">(140)</span></div>
                  <div class="l_name"><span class="span">(854)</span></div>
                  <div class="l_name"><span class="span">(60)</span></div>
                  <div class="l_name"><span class="span">(102)</span></div>
                  <div class="l_name"><span class="span">(10%)</span></div>
                  <div class="l_name"><span class="span">(150%)</span></div>
                  <div class="l_name"><span class="span">(0%)</span></div>
                  <div class="l_name"><span class="span">(0%)</span></div>
                </li>
                <li class="normal_">
                  <div class="l_name"><span class="span">(152)</span><span class="span">+13</span></div>
                  <div class="l_name"><span class="span">(960)</span><span class="span">+8</span></div>
                  <div class="l_name"><span class="span">(68)</span><span class="span">+8</span></div>
                  <div class="l_name"><span class="span">(112)</span><span class="span">+10</span></div>
                  <div class="l_name"><span class="span">(10%)</span><span class="span">+0%</span></div>
                  <div class="l_name"><span class="span">(150%)</span><span class="span">+0%</span></div>
                  <div class="l_name"><span class="span">(0%)</span><span class="span">+0%</span></div>
                  <div class="l_name"><span class="span">(0%)</span><span class="span">+0%</span></div>
                </li>
              </ul>

              <div class="skill_bar">
                <div class="l_name_tl">
                  <p class="skill_title">基本技能</p>
                  <ul>
                    <li class="li">
                      <a href="javascript:void(0);" class="img_jineng">
                        <img src="https://yys.res.netease.com/pc/zt/20161108171335/data/skill/2651.png?v2">
                      </a>
                      <p style="position:absolute;left:52%;top: 60%;width: 30px;color: #333333">黑焰</p>
                      <div class="div">
                        <div class="skill_info">
                          <h3>黑焰</h3>
                          <p>以鬼气凝成黑色火焰攻击敌方目标，造成攻击100%伤害。</p>
                          <p>Lv.2伤害增加至105%</p>
                          <p>Lv.3伤害增加至110%</p>
                          <p>Lv.4伤害增加至115%</p>
                          <p>Lv.5伤害增加至125%</p>
                        </div>
                      </div>
                    </li>
                    <li class="li">
                      <a href="javascript:void(0);" class="img_jineng1">
                        <img src="https://yys.res.netease.com/pc/zt/20161108171335/data/skill/2652.png?v2">
                      </a>
                      <p style="position:absolute;left:130%;top: 60%;width: 30px;color: #333333">迁怒</p>
                      <div class="div">
                        <div class="skill_info">
                          <h3>迁怒</h3>
                          <p>攻击时，若击杀非召唤物的敌人，对敌方全体造成等同过量伤害50%伤害并消耗所有的怒火；未造成击杀，则获得1层怒火，上限3层。</p>
                        </div>
                      </div>
                    </li>
                    <li class="li">
                      <a href="javascript:void(0);" class="img_jineng2">
                        <img src="https://yys.res.netease.com/pc/zt/20161108171335/data/skill/2653.png?v2">
                      </a>

                      <p style="position:absolute;left:210%;top: 60%;width: 70px;color: #333333">地狱之手</p>
                      <div class="div">
                        <div class="skill_info">
                          <h3>地狱之手</h3>
                          <p>以鬼之力从地狱唤出自己的手腕扑击敌方目标，造成攻击263%伤害。</p>
                          <p>Lv.2伤害增加至276%</p>
                          <p>Lv.3伤害增加至289%</p>
                          <p>Lv.4伤害增加至302%</p>
                          <p>Lv.5伤害增加至315%</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="jue_xing">
                  <p class="skill_title">觉醒技能</p>
                  <ul>
                    <li style="position:absolute;left:50%;top: 40%;width: 100px;color: #333333">觉醒技能增强</li>
                    <li class="li">
                      <a href="javascript:void(0);"class="img_jineng3">
                        <img src="https://yys.res.netease.com/pc/zt/20161108171335/data/skill/2652.png?v2">
                      </a>

                      <p style="position:absolute;left:400%;top: 70%;width: 70px;color: #333333">迁怒</p>
                      <div class="div">
                        <div class="skill_info">
                          <h3>迁怒</h3>
                          <p>攻击时，若击杀非召唤物的敌人，对敌方全体造成等同过量伤害100%伤害并消耗所有的怒火；未造成击杀，则获得1层怒火，上限3层。</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </li>
    </ol>
    <!--    </details>-->
  </div>
</template>
<script>
export default {
  name: 'Index',
  data() {
    return {
      username:this.$cookies.get('name'),
      password:this.$cookies.get('password')
    }
  }
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

    font-size: 14px;
  }
  span{
    color: rgb(255, 191, 49);

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
    writing-mode: tb-rl;
    color:#666;
    letter-spacing:10px;
  }
  #section2 {
    width: 100%;
    background: #f1efe9;
    padding-top: 90px;
    position: relative;
    color: #fff6fe;
    left: 40%;
    padding-bottom: 48px;
  }
  .section_container {
    width: 1200px;
    position: relative;
    margin: 0 auto;
  }
  .qingbao_container {
    position: relative;
    width: 1170px;
    height: 585px;
    background: url('../assets/beijing.png') 0 0 no-repeat;
  }
  .data_title {
    width: 448px;
    height: 160px;
    position: absolute;
    right: 157px;
    top: -64px;
  }
  .before_title {
    margin-right: 222px;
  }
  .title {
    float: left;
  }
  .pic_wrap {
    padding: 10px;
    background: #fff;
    border: 1px solid #333;
  }
  .data_list {
    padding-top: 104px;
    margin-left: 340px;
    margin-bottom: 25px;
  }
  .l_name{
    width: 135px;
    height: 30px;
    text-align: center;
    margin-right: 55px;
    border-bottom: 1px dashed #999;
  }
  .attack{
    color: #ff1e0d;
  }
  li {
    list-style: none;
  }
  .span {
    line-height: 38px;
    color: #000;
    font-size: 14px;
  }
 .normal_info{
  position: absolute;
  top: 20%;
  left: 50%;
}
  .normal_in{
    position: absolute;
    top: 20%;
    left: 30%;
  }
  .normal_{
    position: absolute;
    top: 20%;
    left: 75%;
  }
  .div{
    display: none;
    color: #333333;
  }
  .li:hover .div{
    display: initial;
  }
  .skill_bar {
    margin-left: 365px;
  }
  .skill_title {
    line-height: 18px;
    background: #f0eeeb;
    float: left;
    width: 18px;
    height: 82px;
    color: #333;
    font-size: 16px;
    margin-right: 16px;
  }
  .l_name_tl{
    position: absolute;
    top: 65%;
    left: 30%;
  }
  .jue_xing{
    position: absolute;
    left: 70%;
    top: 65%;
  }
  .img_jineng{
    position:relative;
    left: 0%;
  }
  .img_jineng1{
    position:absolute;
    left: 115%;
    top: 0%;
  }
  .img_jineng2{
     position:absolute;
     left: 200%;
     top: 0%;
   }
  .img_jineng3{
    position:absolute;
    left: 350%;
    top: 10%;
  }

  .skill_info {
    position: absolute;
    top: 80px;
    left: 30%;
    width: 200px;
    height: 260px;
    padding: 0 20px 0px;
    background: #dccead;
    border: 1px solid #000;
  }
  .jue_title{
    color: #dccead;
  }
</style>
