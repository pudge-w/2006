<template>
  <div class="mine">
    <van-nav-bar
      title="首页"
      :fixed="true"
      :placeholder="true"
    />
  </div>
</template>

<script>
// import img from '../assets/aaa.webp';
export default {
  data() {
    return {
      url: require('../assets/aaa.webp')
    }
  },
  mounted() {
    fetch('/api/index/flowrecommend?sitecode=1&city_id=1&type=1&page=1')
      .then(res => res.json)
      .then(data => {
        console.log(data)
      })
  }
}
</script>

<style lang="stylus" scoped>



</style>
