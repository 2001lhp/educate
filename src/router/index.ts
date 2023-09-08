import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('@/views/Home/index.vue'),
          meta: { title: '首页' }
        },
        {
          path: '/learn',
          component: () => import('@/views/Learn/index.vue'),
          meta: { title: '学习进度' }
        },
        {
          path: '/user',
          component: () => import('@/views/User/index.vue'),
          meta: { title: '我的' }
        }
      ]
    }, {
      path: '/forget',
      component: () => import('@/views/Login/ForGet.vue'),
      meta: { title: '找回密码' }
    }, {
      path: '/setting',
      component: () => import('@/views/User/UserSetting.vue'),
      meta: { title: '我的设置' }
    }, {
      path: '/userinfo',
      component: () => import('@/views/User/UserInfo.vue'),
      meta: { title: '编辑资料' }
    }, {
      path: '/phone',
      component: () => import('@/views/User/Editphone.vue'),
      meta: { title: '绑定手机' }
    }
  ]
})

router.beforeEach((to, from) => {
  const store = useUserStore()
  if (to.path == '/login') {
    if (store.user.token !== undefined) return from.path
  }
})

router.afterEach(to => {
  document.title = to.meta.title as string
})

export default router
