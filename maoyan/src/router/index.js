import Vue from 'vue';
import VueRouter from 'vue-router';

// 去除重复点击时的警告
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 使用vue-router
Vue.use(VueRouter);

const routes = [
  {
    // 重定向
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '/index',
        redirect: '/hot'
      },
      {
        path: '/hot',
        component: () => import('../components/index/Hot.vue')
      },
      {
        path: '/cinema',
        component: () => import('../components/index/Cinema.vue')
      },
      {
        path: '/wait',
        component: () => import('../components/index/Wait.vue')
      },
      {
        path: '/classics',
        component: () => import('../components/index/Classics.vue')
      }
    ]
  },
  {
    path: '/video',
    component: () => import('../views/Video.vue'),
    meta: { title: '猫眼视频' }
  },
  {
    path: '/mini-video',
    component: () => import('../views/MiniVideo.vue'),
    meta: { title: '猫眼小视频' },
    // meta: { requiresAuth: true }
    // 路由独享的守卫
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/show',
    component: () => import('../views/Show.vue'),
    meta: { title: '猫眼演出' }
    // meta: { requiresAuth: true }
  },
  {
    path: '/mine',
    component: () => import('../views/Mine.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/Detail.vue'),
    meta: { needTransition: true, title: '猫眼详情' }
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/cities',
    component: () => import('../views/Cities.vue')
  },
  {
    path: '*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes: routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // ...
  // console.log('to', to)
  // console.log('from', from)
  // // next('/video')
  // next()
  // console.log(to)
  if (to.meta.requiresAuth) {
    if (localStorage.getItem('token')) {
      // 如果有token，说明登录过了
      document.title = to.meta.title ? to.meta.title : '猫眼电影'
      next()
    } else {
      // 如果没有token，那么跳到登录页
      next('/login')
    }
  }
  document.title = to.meta.title ? to.meta.title : '猫眼电影'
  next()
})

// // 全局的后置钩子
// router.afterEach((to, from) => {
//   // ...
// })

export default router