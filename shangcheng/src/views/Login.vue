<template>
  <div style="padding-top: 200px">
    <van-field
      v-model="phone"
      center
      clearable
      label="手机号"
      placeholder="请输入手机号"
    >
      <template #button>
        <van-button size="small" type="primary" @click="send">发送验证码</van-button>
      </template>
    </van-field>

    <van-field v-model="code" label="验证码" placeholder="请输入手机验证码" />

    <van-button type="primary" size="normal" block @click="login">登录</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      code: ''
    }
  },
  methods: {
    send() {
      this.$store.dispatch('getCode', this.phone)
    },
    login() {
      this.$store.dispatch('login', {
        phone: this.phone,
        code: this.code
      })
    }
  }
}
</script>