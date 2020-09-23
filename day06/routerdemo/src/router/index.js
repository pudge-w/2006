import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

Vue.use(VueRouter)


// 定义路由表
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/classify/:id/:color',
    component: () => import('../views/Classify.vue')
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/mine',
    component: () => import('../views/Mine.vue')
  },
  {
    path: '*',
    component: () => import('../views/NotFound404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
