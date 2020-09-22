<template>
  <header class="my-header">
    <h2>猫眼电影</h2>
    <span class="iconfont icon-caidan"></span>
  </header>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/var.scss";
.my-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: $theme-color;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #fff;
  h2 {
    font-weight: 400;
  }
  .icon-caidan {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  }
}
</style>