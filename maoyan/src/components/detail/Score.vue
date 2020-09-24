<template>
  <div class="score-wrap">
    <div class="left">
      <img :src="pic" alt="" v-for="item in num" :key="item">
    </div>
    <div class="middle">
      <div class="bg">
        <div class="yellow" :style="{ width: item / evaluate * 100 + '%' }"></div>
      </div>
    </div>
    <div class="right">
      <span>{{ item / evaluate * 100 | format }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'pic', 'evaluate', 'num'],
  filters: {
    format(value) {
      return value.toFixed(2) + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
  .score-wrap {
    width: 180px;
    height: 17px;
    display: flex;

    .left {
      width: 35px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img {
        width: 5px;
        margin: 0 1px;
      }
    }

    .middle {
      width: 100px;
      margin: 0 5px;
      display: flex;
      align-items: center;

      .bg {
        width: 100%;
        height: 5px;
        background: #ccc;
        position: relative;

        .yellow {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: orange;
        }
      }
    }

    .right {
      width: 35px;
    }
  }
</style>