<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in bannerList" :key="index">
      <img :src="item" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: ['bannerList']
}
</script>

<style lang="stylus">
.my-swipe .van-swipe-item
  height 200px
  img 
    width 100%
    height 100%
</style>