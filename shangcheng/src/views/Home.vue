<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="orange" :placeholder="true">
      <van-tabbar-item name="1" icon="wap-home-o" to="/index">首页</van-tabbar-item>
      <van-tabbar-item name="2" icon="apps-o" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item name="3" icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item name="4" icon="contact" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang='stylus' scoped></style>
