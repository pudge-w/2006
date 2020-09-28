<template>
  <div class="index-container">
    <van-nav-bar
      title="首页"
      :fixed="true"
      :placeholder="true"
    />

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <!-- <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item> -->
      <van-swipe-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item" alt="">
      </van-swipe-item>
    </van-swipe>

    <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>

    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
    <h2>111</h2>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      active: 0,
      bannerList: []
    };
  },
  mounted() {
    this.getBannerList()
  },
  methods: {
    getBannerList() {
      // let _this = this
      axios.get('http://www.pudge.wang:3001/home/banner')
      .then(response => {
        this.bannerList = response.data.result.list
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.my-swipe .van-swipe-item
  height 200px
  img 
    width 100%
    height 100%
</style>