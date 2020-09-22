<template>
  <li class="movie-list-item">
    <img :src="item.img | format" alt="">
  </li>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  filters: {
    format(value) {
      return value.replace('\/w\.h', '')
    }
  }
};
</script>
<style lang='scss' scoped>
.movie-list-item {
  width: 100%;
  height: 114px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  
  img {
    width: 64px;
    height: 90px;
  }
}
</style>
