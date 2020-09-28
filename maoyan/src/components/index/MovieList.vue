<template>
  <ul class="movie-list">
    <movie-list-item v-for="(item, index) in movieList" :key="index" :item="item"/>
    <p v-if="movieList && movieList.length >= total">人家是有底线的</p>
  </ul>
</template>

<script>
import MovieListItem from './MovieListItem';

// import { getIndexList } from '../../utils/api';

export default {
  props: ['movieList', 'total'],
  data() {
    return {
      // movieList: []
      count: 0
    };
  },
  // watch: {
  //   movieList() {
  //     this.$nextTick(() => {
  //       this.$emit('listChange', this.count++)
  //     })
  //   }
  // },
  components: {
    MovieListItem
  },
  created() {
    // this.getList();
  },
  methods: {
    // async getList() {
    //   // fetch('http://www.pudge.wang:3002/api/home/movieOnInfoList', {
    //   //   method: "POST"
    //   // }).then(response => response.json())
    //   //   .then(myJson => {
    //   //     if (myJson.status === 0) {
    //   //       // console.log(myJson);
    //   //       this.movieList = myJson.result.movieList
    //   //     }
    //   //   });
    //   const res = await getIndexList()
    //   this.movieList = res.result.movieList
    // }
  },
};
</script>
<style lang='scss' scoped>
.movie-list {
  width: 100%;
  margin-top: 12px;
  background: #fff;
}
</style>
