import { loadGuards } from '@/utils/routerUtil'
import { loadDirective } from '@/utils/directiveUtil'
import guards from '@/router/guards'
import directives from '@/utils/directive/directives'
/**
 * 启动引导方法
 * 应用启动时需要执行的操作放在这里
 * @param router 应用的路由实例
 * @param message 消息提示信息
 */
function bootstrap({ router, message, store, app }) {
  // 加载全局指令
  loadDirective(directives, { app })
  // 加载路由守卫
  loadGuards(guards, { router, message, store, app })
}

export default bootstrap
