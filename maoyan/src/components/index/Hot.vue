<template>
  <div class="wrap">
    <div>
      <top-rote :topRatedList="topRatedList"/>
      <movie-list :movieList="movieList" :total="total"/>
    </div>
  </div>
</template>

<script>
import { getIndexList, pullUpLoadList } from '../../utils/api';

import { mapState } from 'vuex';

import TopRote from "./TopRote";
import MovieList from "./MovieList";
// 引入better-scroll
import BetterScroll from 'better-scroll'
let bs;
export default {
  data() {
    return {
      // topRatedList: [],
      index: 12
    }
  },
  computed: mapState({
    topRatedList: 'topRatedList',
    movieIds: state => state.hotList.movieIds,
    movieList: state => state.hotList.movieList,
    total: state => state.hotList.total
  }),
  components: {
    TopRote,
    MovieList
  },
  mounted() {
    // this.getTopRatedList();
    // 调用vuex里面的actions的方法
    this.$store.dispatch('getTopRatedList');
    this.$store.dispatch('getHotList');
    // this.getList();
  },
  methods: {
    // 上拉加载更多
    // async pullUpLoad() {
    //   const ids = this.movieIds.slice(this.index, this.index + 10);
    //   const str = ids.join()
    //   const res = await pullUpLoadList({
    //     ids: str
    //   })
    //   this.index += 10
    //   this.movieList = this.movieList.concat(res.result)
    // },
    // async getTopRatedList() {
    //   const res = await getTopRated()
    //   this.topRatedList = res.result.result
    // },
    // 获取首页列表
    // async getList() {
    //   const res = await getIndexList()
    //   // 获取所有电影的ids
    //   this.movieIds = res.result.movieIds
    //   // 获取当前这次的电影信息
    //   this.movieList = res.result.movieList
    //   // 获取总电影的条数
    //   this.total = res.result.total
    //   // this.$nextTick(() => {
    //   //   // 实例化better-scroll， 第一个参数是父元素, 第二个参数是对象，里面放配置项
    //   //   let bs = new BetterScroll('.wrap', {
    //   //     // 允许纵向滚动
    //   //     scrollY: true
    //   //   })
    //   // })
    //   // 等待页面渲染完成
    //   await this.$nextTick()
    //   bs = new BetterScroll('.wrap', {
    //     // 允许纵向滚动
    //     scrollY: true,
    //     click: true,
    //     // 允许我们使用上拉加载
    //     pullUpLoad: true
    //   })
    //   bs.on('pullingUp', async () => {
    //     // 请求数据,更新列表
    //     // 判断一下当前的总长度是否已经等于一开始返回的总长度,不够继续请求，如果超出就显示没有更多
    //     if (this.movieList.length < this.total) {
    //       await this.pullUpLoad()
    //       // 重新计算bette-scroll的高度
    //       bs.refresh()
    //       // 表示这次上拉结束，可以做下一次下拉了
    //       bs.finishPullUp()
    //     }
    //   })
    // }
  },
};
</script>
<style lang='scss' scoped></style>
