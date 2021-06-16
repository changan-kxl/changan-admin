import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

/**
 * 进度条开始
 * @param to
 * @param form
 * @param next
 */
const progressStart = (to, from, next) => {
  // start progress bar
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
  next();
};

/**
 * 登录守卫
 * @param to
 * @param form
 * @param next
 * @param options
 */
const loginGuard = (to, from, next, options) => {
  const { message } = options;
  const accesstoken = localStorage.getItem('accesstoken');
  const loginIgnore = {
    names: ['404', '403'], //根据路由名称匹配
    paths: ['/login'], //根据路由fullPath匹配
    /**
     * 判断路由是否包含在该配置中
     * @param route vue-router 的 route 对象
     * @returns {boolean}
     */
    includes(route) {
      return this.names.includes(route.name) || this.paths.includes(route.path);
    }
  };

  if (!loginIgnore.includes(to) && !accesstoken) {
    message.warning('登录已失效，请重新登录');
    next({ path: '/login' });
  } else {
    if (to.path === '/login') {
      // next({ path: '/home' });
      next();
    } else {
      next();
    }
  }
};

/**
 * 权限守卫
 * @param to
 * @param form
 * @param next
 * @param options
 */
const authorityGuard = (to, from, next, options) => {
  (async function getAddRouters() {
    const { store, router } = options;
    const role = JSON.parse(localStorage.getItem('userInfo')) || {};
    await store.dispatch('app/newRoutes', role && role.user);
    let newAddRouters = store.getters['app/addRouters'];
    for (let item of newAddRouters) {
      await router.addRoute(item);
    }
  })();
  next();
};

/**
 * 进度条结束
 * @param to
 * @param form
 * @param options
 */
const progressDone = () => {
  // finish progress bar
  NProgress.done();
};

export default {
  beforeEach: [progressStart, loginGuard, authorityGuard],
  afterEach: [progressDone]
};
