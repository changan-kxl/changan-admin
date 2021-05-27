import { hideMenuItem, Menu } from '@/router/routes.js';

const routerData = {
  namespaced: true,
  state: {
    routers: [],
    Menus: []
  },
  getters: {
    addRouters: (state) => state.Menus
  },
  mutations: {
    setRouters: (state, routers) => {
      state.Menus = routers; // 保存动态路由用来Menu
      state.routers = hideMenuItem.concat(routers); // 所有有权限的路由表，用来生成菜单列表
    }
  },
  actions: {
    newRoutes({ commit }, role) {
      //  通过递归路由表，删除掉没有权限的路由
      function eachSelect(routers, userRole) {
        for (let j = 0; j < routers.length; j++) {
          if (
            routers[j].meta &&
            routers[j].meta.role &&
            routers[j].meta.role.indexOf(userRole) === -1
          ) {
            routers.splice(j, 1);
            j = j !== 0 ? j - 1 : j;
          }
          if (routers[j] && routers[j].children && routers[j].children.length) {
            eachSelect(routers[j].children, userRole);
          }
        }
      }
      // 仅限演示
      // 拷贝这个数组是因为做权限测试的时候可以从低级切回到高级角色，仅限演示，正式开发时省略这步直接使用 Menu
      let newArr = [...Menu];
      eachSelect(newArr, role);
      commit('setRouters', newArr);

      // 正式开发
      // eachSelect(Menu, role)
      // commit('setRouters', Menu)
    }
  }
};

export default routerData;
