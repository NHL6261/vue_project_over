<template>
  <div class="star star-24">
    <span class="star-item" :class="item" v-for="(item, index) in StartClass" :key="index"></span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:{
        score:{
            required:true,
            type:Number,
            default:2
        }
    },
    computed:{
        StartClass(){
            let {score} = this
            let result =[]
            //  向下取整取on (整颗)
            const startcount = Math.floor(score)
            for(var i = 0; i < startcount ;i++){
                // 循环遍历得到on
                result.push('on')
            }
            // 前真看后,前假看前
            (score - startcount > 0) && result.push('half')
            //全黑
            while(result.length < 5){
                result.push('off')
            }
            return result
        }
    }   
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl'
.star 
                    float left
                    font-size 0
                    .star-item
                      display inline-block
                      background-repeat no-repeat
                    &.star-48
                      .star-item
                        width 20px
                        height 20px
                        margin-right 22px
                        background-size 20px 20px
                        &:last-child
                          margin-right: 0
                        &.on
                          bg-image('../../common/images/stars/star48_on')
                        &.half
                          bg-image('../../common/images/stars/star48_half')
                        &.off
                          bg-image('../../common/images/stars/star48_off')
                    &.star-36
                      .star-item
                        width 15px
                        height 15px
                        margin-right 6px
                        background-size 15px 15px
                        &:last-child
                          margin-right 0
                        &.on
                          bg-image('../../common/images/stars/star36_on')
                        &.half
                          bg-image('../../common/images/stars/star36_half')
                        &.off
                          bg-image('../../common/images/stars/star36_off')
                    &.star-24
                      .star-item
                        width 10px
                        height 10px
                        margin-right 3px
                        background-size 10px 10px
                        &:last-child
                          margin-right 0
                        &.on
                          bg-image('../../common/images/stars/star24_on')
                        &.half
                          bg-image('../../common/images/stars/star24_half')
                        &.off
                          bg-image('../../common/images/stars/star24_off')
                  
</style>
