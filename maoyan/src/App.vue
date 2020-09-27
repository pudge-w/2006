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
    <transition name="fade">
      <router-view v-if="$route.meta.needTransition"></router-view>
    </transition>
    <router-view v-if="!$route.meta.needTransition"></router-view>

    <!-- <router-view></router-view> -->
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

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}
</style>
