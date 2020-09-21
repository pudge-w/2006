import Vue from "vue";
// 引入app.vue这个根组件
import App from "./App.vue";
// import router from "./router";
// import store from "./store";

// 引入reset重置样式
import "./assets/style/reset.scss";

// 用来关闭开发环境的提示信息
Vue.config.productionTip = true;

new Vue({
  // router: router,
  // store: store,
  render: h => h(App)
}).$mount("#app");
