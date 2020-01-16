<template>
<!--  -->
  <div id="footerguide">
      <div :class="{active: $route.path === '/mister'}" @click="isShow('/mister')" class="Item">
          <i class="iconfont iconhome"></i>
          <span>首页</span>
      </div>
      <div :class="{active: $route.path === '/search'}" @click="isShow('/search')" class="Item">
          <i class="iconfont iconsoushuo"></i>
          <span>搜索</span>
      </div>
      <div :class="{active: $route.path === '/order'}" @click="isShow('/order')" class="Item">
          <i class="iconfont iconicon--"></i>
          <span>订单</span>
      </div>
      <div :class="{active: $route.path === '/profile'}" @click="isShow('/profile')" class="Item">
          <i class="iconfont iconmine"></i>
          <span>我的</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
      methods: {
          isShow(path){
              this.$router.push(path)
          }
      }
  }
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl'
#footerguide
    display flex
    top-border-1px(#eee)
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    text-align center
    box-sizing border-box
    .Item
        display flex
        flex-direction column
        width 25%
        height 50px
        text-align center
        &.active
            color $green
        .iconfont
            font-size 22px
            line-height 30px
</style>
