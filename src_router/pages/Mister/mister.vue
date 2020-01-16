<template>
  <div id="wrap">
    <div class="Header">
      <span class="search">
        <i class="iconfont iconsearch"></i>
      </span>
      <span class="title">
        <span>昌平区北七家修正大厦(北清路北)</span>
      </span>
      <span class="login">
        <span>登录|注册</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl';
  #wrap
    height 1000px
    .Header
      display flex
      justify-content space-around
      position fixed
      top 0px
      width 100%
      height 50px
      line-height 50px
      box-sizing content-box
      color #fff
      text-align center
      background  $green
      box-sizing border-box
          &.span
            display block
        .iconfont 
          font-size 22px
      .title 
          width 30%
          font-size 18px
          text-overflow: ellipsis
</style>
