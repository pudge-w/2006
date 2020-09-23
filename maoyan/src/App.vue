<template>
  <div id="app">
    <my-header :showBack="false"/>
    <div class="wrap">
      <div>
        <my-tabs />
        <top-rote :topRatedList="topRatedList"/>
        <movie-list :movieList="movieList" @listChange="change"/>
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
import { getTopRated, getIndexList, pullUpLoadList } from './utils/api';

import MyHeader from "./components/index/Header";
// @表示src文件夹
import MyTabs from "@/components/index/Tabs";
import TopRote from "@/components/index/TopRote";
import MovieList from "./components/index/MovieList";
import MyFooter from "./components/index/footer";

// 引入better-scroll
import BetterScroll from 'better-scroll'
let bs;
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
    change(value) {
      // bs.finishPullUp()
      if (value !== 0) {
        // 重新计算高度
        bs.refresh()
        // 表示这次上拉已完成，可以执行下一次下拉
        bs.finishPullUp()
      }
      // console.log('value', value)
    },
    // 上拉加载
    async pullUpLoad() {
      const res = await pullUpLoadList({
        ids: '1297973'
      })
      console.log(res.result)
      this.movieList = this.movieList.concat(
        [
        {
            "id": 1297973,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/moviemachine/40d1e5ac176f1e9258da10a3222dbff7952117.png",
            "version": "v2d imax",
            "nm": "信条",
            "preShow": false,
            "sc": 8.3,
            "globalReleased": true,
            "wish": 61210,
            "star": "约翰·大卫·华盛顿,罗伯特·帕丁森,伊丽莎白·德比茨基",
            "rt": "2020-09-04",
            "showInfo": "今天204家影院放映1159场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "9月4日 周五"
        },
        {
            "id": 416,
            "haspromotionTag": false,
            "img": "http://p0.meituan.net/w.h/moviemachine/c2496a7290a72eac6081321898c347693550574.jpg",
            "version": "v2d imax",
            "nm": "盗梦空间",
            "preShow": false,
            "sc": 9,
            "globalReleased": true,
            "wish": 25892,
            "star": "莱昂纳多·迪卡普里奥,渡边谦,约瑟夫·高登-莱维特",
            "rt": "2020-08-28",
            "showInfo": "今天15家影院放映24场",
            "showst": 3,
            "wishst": 0,
            "comingTitle": "8月28日 周五"
        },
        {
            "id": 938,
            "haspromotionTag": false,
            "img": "http://p1.meituan.net/w.h/movie/b2ea38905f821dfe7e8be5689b1bb21f365633.jpg",
            "version": "",
            "nm": "人再囧途之泰囧",
            "preShow": false,
            "sc": 8.7,
            "globalReleased": true,
            "wish": 22543,
            "star": "徐峥,王宝强,黄渤",
            "rt": "2012-12-12",
            "showst": 2,
            "wishst": 0,
            "comingTitle": "2012年12月12日 周三"
        }
    ]
      )
    },
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
      bs = new BetterScroll('.wrap', {
        // 允许纵向滚动
        scrollY: true,
        click: true,
        // 允许我们使用上拉加载
        pullUpLoad: true
      })
      bs.on('pullingUp', async () => {
        // 请求数据,更新列表
        await this.pullUpLoad()
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
