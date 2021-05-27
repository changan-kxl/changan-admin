const state = {
  userInfo: {},
  accesstoken: '',
  role: localStorage.getItem('userInfo'),
  info: '',
  isNetwork: true
};

const getters = {
  getUserInfo(state) {
    const userInfo = localStorage.getItem('userInfo');
    return JSON.parse(userInfo);
  }
};
const mutations = {
  changeNetwork(state, params) {
    state.isNetwork = params;
  },
  setUserInfo(state, params) {
    localStorage.setItem('userInfo', JSON.stringify(params));
    localStorage.setItem('permissions', JSON.stringify(params));
    localStorage.setItem('accesstoken', 'accesstoken');
    state.userInfo = {
      ...params,
      accesstoken: 'accesstoken'
    };
  },
  loginout(state, params) {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('accesstoken');
  },
  setRole(state, options) {
    const role = options.role && options.role.value;
    const router = options.router;
    const store = options.store;
    // 切换角色，测试权限管理
    state.info = {
      role
    };
    localStorage.setItem('info', JSON.stringify(role));
    store.dispatch('app/newRoutes', role);
    let newAddRouters = store.getters['app/addRouters'];
    newAddRouters.forEach((item) => {
      router.addRoute(item);
    });
  }
};

const actions = {
  login({ state, commit }, params) {
    //  模拟异步登录
    return new Promise((resolve, reject) => {
      if (params.user === 'superAdmin' && params.password === '888888') {
        setTimeout(function () {
          commit('setUserInfo', params);
          resolve({
            result: 1
          });
        }, 2000);
      } else {
        setTimeout(function () {
          resolve({
            result: 0
          });
        }, 2000);
      }
    });
  },
  setRole({ commit }, options) {
    // 权限测试
    commit('setRole', options);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
