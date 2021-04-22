import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
const routerHistory = createWebHistory() // 引入路由方式

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
