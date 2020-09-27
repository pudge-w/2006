<template>
  <div class="home">
    <!-- {{ count }} -->
    <!-- <button @click="handleClick">add</button> -->
    {{ count }}
  </div>
</template>

<script>
export default {
  mounted() {
    // this.$store.state.count 获取vuex里面的状态
    console.log(this.$store.state.count)
  },

  computed: {
    count() {
      return this.$store.state.count
    }
  },
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   handleClick() {
  //     this.count++
  //   }
  // },
}
</script>
