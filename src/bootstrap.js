import { loadGuards } from "@/utils/routerUtil";
import guards from "@/router/guards";

/**
 * 启动引导方法
 * 应用启动时需要执行的操作放在这里
 * @param router 应用的路由实例
 * @param message 消息提示信息
 */
function bootstrap({ router, message }) {
  // 加载路由守卫
  loadGuards(guards, { router, message });
}

export default bootstrap;
