import { createRouter, createWebHistory } from 'vue-router'
import {hideMenuItem, Menu} from './routes'
const routerHistory = createWebHistory() // 引入路由方式

const router = createRouter({
  history: routerHistory,
  routes:hideMenuItem.concat(Menu)
})

export default router
