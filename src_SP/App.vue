<template>
  <div id="appContainer">
    <h1>适配组件</h1>
    <div class="test1">postcss-px2rem</div>
    <div class="test2">lib-flexible</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'app',
  }
</script>
<style lang="stylus">
stylusAdpative(w,h,bgColor) 
  width w
  height h
  background bgColor
#appContainer
  .test1
    stylusAdpative(375px,200px,red) 
  .test2
    stylusAdpative(10rem,200px,blue) 
</style>
