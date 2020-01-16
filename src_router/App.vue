<template>
  <div>
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script type="text/ecmascript-6">
// 新建组建后,两个组件进行通信,先引入组件,在注册
import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name:'app',
   components : {FooterGuide}
  }
</script>
<style lang="stylus">
</style>
