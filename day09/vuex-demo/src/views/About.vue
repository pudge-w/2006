<template>
  <div class="about">
    {{ count }}
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    add () {
      // this.$store.state.count++ 这样是不行
      // console.log(this.$store)
      // 通过调用this.$store.commit('xxx')来执行mutations里面的方法
      // this.$store.commit('increment')

      this.$store.dispatch('incrementA')
    }
  },
}
</script>