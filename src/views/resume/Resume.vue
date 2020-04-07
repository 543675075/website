<template>
  <div class="section">
    <h2><i class="iconfont my-title-icon">&#xe615;</i>My Resume</h2>
    <ul class="experience">
      <li>
        <strong>失业中</strong>
        <span class="year">2019底/至今</span>
        <span class="detail">年底辞职后疫情＋做了个手术，在家休息中。</span>
      </li>
      <li>
        <strong>江苏建发科技</strong>
        <span class="year">2015/2019(车间主任助理)</span>
        <span class="detail">主营各种防火材料，协助车间主任进行成产管理。(工作比较轻松，断断续续的开始了学习...)</span>
        <span></span>
      </li>
      <li>
        <strong>南京致和信息系统有限公司</strong>
        <span class="year">2012/2014(销售)</span>
        <span class="detail">做了两年的销售，主要销售产品为腾讯的客户管理软件，企业通信平台</span>
      </li>
     
      <li>
        <strong>学历</strong>
        <span class="year">2011</span>
        <span class="detail">自学的大专</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      // info: {
      //   name: [ '学历' , '零零散散混一年' ,'南京致和信息系统有限公司' , '江苏建发科技' , '失业在家' ],
      //   time: [ '2011/毕业' , '2011/2012' , '2012/2014(销售)' , '2015/2019(车间主任助理)' , '2019/至今'],
      //   detail: [ '学业无成，自己自学大专毕业' , '各个行业零时工' , '在南京做了两年销售，卖软件,服务器' , '主营各种防火材料，协助车间主任' , '年底辞职，疫情爆发失业在家']
      // }
    }
  },
  mounted() {
    console.log(this.info.name)
  },
}
</script>

<style lang="less" scoped>
  .experience{
    margin-top: 30px;
    border-left: 1px solid #999;
    padding-left: 40px;
    li{
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      line-height: 2;
      &::before{
        display: inline-block;
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #fff;
        border: 1px solid #1296DB;
        transform: translateX(-46px);
      }
      .year{
        margin: 10px 0;
        color: #1296DB;
      }
    }
  }
</style>