<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  // 组件内的前置守卫
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log(to)
    console.log(from)
    console.log(this)
    next()
  },

  // beforeRouteUpdate (to, from, next) {
  //   // 
  // },
  data() {
    return {
      msg: '这里是演出'
    }
  }
}
</script>