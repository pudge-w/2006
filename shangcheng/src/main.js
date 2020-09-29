import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import Vant from 'vant';

import './assets/css/reset.stylus'
import './assets/css/style.stylus'

import "amfe-flexible"

import { Tabbar, TabbarItem, Swipe, SwipeItem, Grid, GridItem, NavBar, Image as VanImage, Card, List, Search, Sidebar, SidebarItem   } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
Vue.use(VanImage);
Vue.use(Card);
Vue.use(List);
Vue.use(Search);
Vue.use(Sidebar);
Vue.use(SidebarItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
