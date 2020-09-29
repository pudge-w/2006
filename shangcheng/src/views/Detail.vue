<template>
  <div>
    <!-- detail {{ $route.params.id }}
    {{ detailInfo.title }} -->
    <van-nav-bar
      title="商品详情"
      :fixed="true"
      :placeholder="true"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-swipe class="detail-swipe" :autoplay="3000" @change="onChange" v-if="detailInfo.imgArr">
      <van-swipe-item v-for="(item, index) in detailInfo.imgArr" :key="index">
        <img :src="item" alt="">
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/{{ detailInfo.imgArr.length }}
        </div>
      </template>
    </van-swipe> 
  </div>
</template>

<script>

export default {
  data() {
    return {
      productId: '',
      current: 0
    }
  },
  created() {
    this.productId = this.$route.params.id
  },
  computed: {
    detailInfo() {
      return this.$store.state.detailInfo
    }
  },
  mounted() {
    this.$store.dispatch('getDetail', {
      productId: this.productId
    })
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onChange(index) {
      this.current = index
    }
  },
}
</script>

<style lang="stylus">
.custom-indicator {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 12px
  background: rgba(0, 0, 0, 0.7);
  color #fff
}
</style>