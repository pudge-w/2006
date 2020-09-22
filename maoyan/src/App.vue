<template>
  <div id="app">
    <my-header />
    <Tabs />
  </div>
</template>

<script>
import MyHeader from "./components/index/Header";
// @表示src文件夹
import Tabs from "@/components/index/Tabs";

export default {
  components: {
    MyHeader,
    Tabs
  }
};
</script>

<style lang="scss" scoped>
#app {
  padding-top: 50px;
}
</style>
