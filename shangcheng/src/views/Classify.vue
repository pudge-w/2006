<template>
  <div>
    <van-nav-bar
      title="分类"
      :fixed="true"
      :placeholder="true"
    />

    <van-search v-model="value" placeholder="新春大促销" shape="round"/>

    <div class="content">
      <van-sidebar v-model="activeKey" @change="change">
        <van-sidebar-item title="分类推荐" />
        <van-sidebar-item title="奶粉" />
        <van-sidebar-item title="尿不湿" />
      </van-sidebar>

      <ul class="main-content">
        <li v-for="(item, index) in  classifyList" :key="index" @click="toDetail(item.productId)">
          <img :src="item.imgUrl" alt="">
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      activeKey: sessionStorage.getItem('activeKey') || 0,
      type: sessionStorage.getItem('type') || '1'
    }
  },
  computed: {
    classifyList() {
      return this.$store.state.classifyList
    }
  },
  mounted() {
    this.$store.dispatch('getClassifyList', {
      type: this.type
    })
  },
  methods: {
    change(index) {
      this.type = index + 1 + ''
      sessionStorage.setItem('activeKey', this.activeKey)
      sessionStorage.setItem('type', this.type)
      this.$store.dispatch('getClassifyList', {
        type: this.type
      })
    },
    toDetail(id) {
      this.$router.push('/detail/' + id)
    }
  },
}
</script>

<style lang="stylus">
.content
  display flex
  .main-content
    flex 1
    display flex
    flex-wrap wrap
    li
      width 33.33%
      height 120px
      display flex
      flex-direction column
      justify-content center
      align-items center
      img 
        width 60px
        height 60px
      span 
        font-size 14px
        margin-top 10px
</style>