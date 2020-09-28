<template>
  <div class="index-container">
    <van-nav-bar
      title="首页"
      :fixed="true"
      :placeholder="true"
    />

    <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item" alt="">
      </van-swipe-item>
    </van-swipe> -->
    <swipe :bannerList="bannerList"></swipe>


    <van-grid>
      <van-grid-item v-for="(item, index) in list" :key="index">
        <van-image :src="item.imgUrl" />
        <span class="grid-span">{{ item.title }}</span>
      </van-grid-item>
    </van-grid>

    <div>
      <van-card
        v-for="(item, index) in reCommendList"
        :key="index"
        :price="item.currentPrice | format"
        :origin-price="item.originalPrice"
        desc=""
        :title="item.productName"
        :thumb="item.imgUrl"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swipe from '../components/Index/Swipe'

export default {
  data() {
    return {
      active: 0,
      bannerList: [],
      list: [
        {
          imgUrl: 'https://img.yzcdn.cn/vant/apple-1.jpg',
          title: '每日福利'
        },
        {
          imgUrl: 'https://img.yzcdn.cn/vant/apple-1.jpg',
          title: '热销榜'
        },
        {
          imgUrl: 'https://img.yzcdn.cn/vant/apple-1.jpg',
          title: '会员中心'
        },
        {
          imgUrl: 'https://img.yzcdn.cn/vant/apple-1.jpg',
          title: '皮鲁甄选'
        }
      ],
      reCommendList: []
    };
  },
  components: {
    Swipe
  },
  filters: {
    format(value) {
      return value.toFixed(2)
    }
  },
  mounted() {
    this.getBannerList()
    this.getRecommendList()
  },
  methods: {
    getBannerList() {
      axios.get('http://www.pudge.wang:3001/home/banner')
      .then(response => {
        this.bannerList = response.data.result.list
      })
      .catch(error => {
        console.log(error);
      });
    },
    getRecommendList() {
      axios.post('http://www.pudge.wang:3001/home/recommend', {})
      .then(response => {
        this.reCommendList = response.data.result.list
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.grid-span
  font-size 14px
  margin-top 10px
</style>