<template>
  <ul class="movie-list">
    <movie-list-item v-for="item in movieList" :key="item.id" :item="item"/>
  </ul>
</template>

<script>
import MovieListItem from './MovieListItem';

export default {
  data() {
    return {
      movieList: []
    };
  },
  components: {
    MovieListItem
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      fetch('http://www.pudge.wang:3002/api/home/movieOnInfoList', {
        method: "POST"
      }).then(response => response.json())
        .then(myJson => {
          if (myJson.status === 0) {
            // console.log(myJson);
            this.movieList = myJson.result.movieList
          }
        });
    }
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
