import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // 404页面
    {
      path: '/:pathMathch(.*)',
      name: 'Page not found',
      component: () => import('@/views/NotFound.vue')
    },
    // 默认情况下，导航到的页面
    {
      path: '/',
      name: 'ConnectDots',
      redirect: '/ConnectDots'
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: () => import('@/views/HomePage.vue'),
      redirect: '/ConnectDots',
      children: [
        {
          path: '/ConnectDots',
          name: 'ConnectDots Page',
          component: () => import('@/views/ConnectDots.vue')
        },
        {
          path: '/DragDrop',
          name: 'DragDrop Page',
          component: () => import('@/views/DragDrop.vue')
        }
      ]
    }
  ]
})

export default router
