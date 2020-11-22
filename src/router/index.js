import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Index')
  },
  {
    path: '/login',
    component: () => import('@/views/admin/Login')
  },
  {
    path: '/admin',
    component: () => import('@/views/admin/Admin'),
    redirect: '/admin/welcome',
    children: [
      {
        path: 'welcome',
        component: () => import('@/views/admin/Welcome')
      },
      {
        path: 'role',
        component: () => import('@/views/admin/Role')
      },
      {
        path: 'password',
        component: () => import('@/views/admin/AdminPassword')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  // if (to.path === '/login') return next()
  // // 拿到token判断是否具有token
  // const token = window.sessionStorage.getItem('token')
  // if (!token) return next('/login')
  next()
})
export default router
