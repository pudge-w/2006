<template>
  <div id="app">
    <!-- <my-header :showBack="false"/>
    <div class="wrap">
      <div>
        <my-tabs />
        <top-rote :topRatedList="topRatedList"/>
        <movie-list :movieList="movieList" :total="total"/>
      </div>
    </div> -->
    <router-view></router-view>
    <my-footer />
  </div>
</template>

<script>
import MyFooter from "./components/public/footer";
export default {
  data() {
    return {}
  },
  components: {
    MyFooter
  }
};
</script>

<style lang="scss" scoped>
#app {
  // padding-top: 50px;
  // padding-bottom: 50px;
  background: #f5f5f5;
}
</style>
