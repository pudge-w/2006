<template>
  <div id="app">
    <my-header :showBack="false"/>
    <div class="wrap">
      <div>
        <my-tabs />
        <top-rote :topRatedList="topRatedList"/>
        <movie-list :movieList="movieList"/>
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
import { getTopRated, getIndexList } from './utils/api';

import MyHeader from "./components/index/Header";
// @表示src文件夹
import MyTabs from "@/components/index/Tabs";
import TopRote from "@/components/index/TopRote";
import MovieList from "./components/index/MovieList";
import MyFooter from "./components/index/footer";

// 引入better-scroll
import BetterScroll from 'better-scroll'

export default {
  data() {
    return {
      topRatedList: [],
      movieList: []
    }
  },
  components: {
    MyHeader,
    MyTabs,
    TopRote,
    MovieList,
    MyFooter
  },
  mounted() {
    this.getTopRatedList();
    this.getList();
    // setTimeout(() => {
    //   // 实例化better-scroll， 第一个参数是父元素, 第二个参数是对象，里面放配置项
    //   let bs = new BetterScroll('.wrap', {
    //     // 允许纵向滚动
    //     scrollY: true
    //   })
    // }, 3000)
  },
  methods: {
    async getTopRatedList() {
      const res = await getTopRated()
      this.topRatedList = res.result.result
    },
    async getList() {
      const res = await getIndexList()
      this.movieList = res.result.movieList
      // this.$nextTick(() => {
      //   // 实例化better-scroll， 第一个参数是父元素, 第二个参数是对象，里面放配置项
      //   let bs = new BetterScroll('.wrap', {
      //     // 允许纵向滚动
      //     scrollY: true
      //   })
      // })
      // 等待页面渲染完成
      await this.$nextTick()
      let bs = new BetterScroll('.wrap', {
        // 允许纵向滚动
        scrollY: true,
        click: true
      })
    }
  },
};
</script>

<style lang="scss" scoped>
#app {
  // padding-top: 50px;
  // padding-bottom: 50px;
  background: #f5f5f5;
  .wrap {
    position: absolute;
    top: 50px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
}
</style>
