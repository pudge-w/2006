import Vue from 'vue';
import VueRouter from 'vue-router';

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
    component: () => import('../views/Video.vue')
  },
  {
    path: '/mini-video',
    component: () => import('../views/MiniVideo.vue')
  },
  {
    path: '/show',
    component: () => import('../views/Show.vue')
  },
  {
    path: '/mine',
    component: () => import('../views/Mine.vue')
  },
  {
    path: '/detail/:id',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes: routes
})

export default router