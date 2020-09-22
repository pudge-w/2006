<template>
  <div id="app">
    <my-header :showBack="false"/>
    <my-tabs />
    <top-rote />
    <movie-list />
  </div>
</template>

<script>
import MyHeader from "./components/index/Header";
// @表示src文件夹
import MyTabs from "@/components/index/Tabs";
import TopRote from "@/components/index/TopRote";
import MovieList from "./components/index/MovieList";

export default {
  components: {
    MyHeader,
    MyTabs,
    TopRote,
    MovieList
  }
};
</script>

<style lang="scss" scoped>
#app {
  padding-top: 50px;
  background: #f5f5f5;
}
</style>
