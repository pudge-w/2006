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

    <div class="menu"></div>

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      offset="0"
    >
      <van-card
        v-for="(item, index) in reCommendList"
        :key="index"
        :price="item.currentPrice | format"
        :origin-price="item.originalPrice"
        desc=""
        :title="item.productName"
        :thumb="item.imgUrl"
        @click="toDetail(item.productId)"
      />
    </van-list>
  </div>
</template>

<script>
// import axios from 'axios';
import Swipe from '../components/Index/Swipe'
// import { getRecommend } from '../utils/api'

import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      active: 0,
      loading: false,
      finished: false,
      count: 3,
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
    };
  },
  computed: {
    ...mapState({
      bannerList: 'bannerList',
      reCommendList: 'reCommendList',
      page: 'page'
      // loading: 'loading'
    })
  },
  watch: {
    reCommendList(val, oldVal) {
      // this.loading = false
      if (val.length - oldVal.length === this.count) {
        this.loading = false
      } else {
        this.finished = true
      }
    }
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
    // this.getRecommendList({
    //   page: this.page,
    //   count: this.count
    // })
  },
  methods: {
    ...mapActions([
      'getBannerList',
      'getRecommendList'
    ]),
    onLoad() {
      this.loading = true
      this.getRecommendList({
        page: this.page,
        count: this.count
      })
    },
    toDetail(id) {
      this.$router.push('/detail/' + id)
    }
  }
};
</script>

<style lang="stylus" scoped>
.grid-span
  font-size 14px
  margin-top 10px

.menu
  height 300px
</style>