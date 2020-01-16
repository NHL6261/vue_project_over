<template>
  <div>
    <h1>test</h1>
    <button class="test1">test1</button>
    <button class="test2">test2</button>
    <ul>
      <li @click="handleClick(itme)" :class="{active:indexId === itme}" v-for="itme in 10" :key="itme" >{{itme}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        indexId : 1
      }
    },
    methods:{
      handleClick(itme){
        this.indexId = itme
      }
    }
  }
</script>

<style lang="stylus">
$color = red
$col = blue
addbtn(a,b)
 padding a + b
btnStyle(w, h, bgColor)
    width w
    height h
    background bgColor
    border none 
    box-sizing content-box
    addbtn(50px, 50)
  h1 
   color $color
  .test1
    btnStyle(100px, 100px, $color)
  .test2 
    btnStyle(200px, 200px, $col)
  li 
    cursor pointer
    &.active
      color $color
</style>
