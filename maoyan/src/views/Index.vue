<template>
  <div class="index-page">
    <my-header :showBack="false"/>
    <my-tabs />
    <router-view></router-view>
    <!-- <my-hot /> -->
    <!-- <div class="wrap">
      <div>
        <top-rote :topRatedList="topRatedList"/>
        <movie-list :movieList="movieList" :total="total"/>
      </div>
    </div> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>

import MyHeader from "../components/public/Header";
// @表示src文件夹
import MyTabs from "@/components/index/Tabs";

// import MyHot from "@/components/index/Hot"


export default {
  data() {
    return {}
  },
  components: {
    MyHeader,
    MyTabs,
    // MyHot
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
.wrap {
  position: absolute;
  top: 94px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
