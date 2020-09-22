<template>
  <div class="top-rote">
    <p class="title">最受好评的电影</p>
    <ul>
      <li v-for="item in topRatedList"
        :key="item.id"
      >
        <div class="img-wrap">
          <img :src="item.img" alt="">
        </div>
        <h5>{{ item.title }}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
// import http from '../../utils/http'
import { getTopRated } from '../../utils/api'

export default {
  data() {
    return {
      // 最受欢迎的列表
      topRatedList: []
    };
  },
  created() {
    this.getTopRatedList();
  },
  methods: {
    async getTopRatedList() {
      // 使用了fetch去请求数据
      // fetch('http://www.pudge.wang:3002/api/home/topRatedMovies')
      //   .then(response => response.json())
      //   .then(myJson => {
      //     if (myJson.status === 0) {
      //       // console.log(myJson);
      //       this.topRatedList = myJson.result;
      //     }
      //   });
      // http.get('http://www.pudge.wang:3002/api/home/topRatedMovies').then(res => {
      //   console.log(res)
      // })
      const result = await getTopRated()
      console.log(result)
      // getTopRated().then(res => {
      //   console.log(res)
      // })
    }
  },
};
</script>
<style lang='scss' scoped>
.top-rote {
  width: 100%;
  height: 200px;
  padding: 12px;
  background: #fff;

  .title {
    margin: 0;
    font-size: 14px;
    color: #333;
    margin-bottom: 12px;
  }

  ul {
    width: 100%;
    height: 140px;
    display: flex;
    overflow: auto;

    li {
      width: 85px;
      height: 140px;
      margin-right: 10px;
      flex-shrink: 0;

      .img-wrap {
        width: 85px;
        height: 115px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      h5 {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 5px;
        font-size: 13px;
        color: #222;
        margin-bottom: 3px;
      }
    }
  }
}
</style>
