import Vue from 'vue'
import VueRouter from 'vue-router'
import { Toast  } from 'vant'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/',
        redirect: '/index'
      },
      {
        path: '/index',
        component: () => import('../views/Index.vue'),
      },
      {
        path: '/classify',
        component: () => import('../views/Classify.vue'),
      },
      {
        path: '/cart',
        component: () => import('../views/Cart.vue'),
        meta: { needLogin: true }
      },
      {
        path: '/mine',
        component: () => import('../views/Mine.vue'),
      },
    ]
  },
  {
    path: '/detail/:id',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 判断页面是否需要登录
  if (to.meta.needLogin) {
    // 说明这个页面需要登录
    if (localStorage.getItem('token')) {
      next()
    } else {
      Toast('您还没有登录，请先登录')
      next('/login')
    }
  } else {
    next()
  }
})

export default router
