const state = {
  userInfo: {},
  accesstoken: ''
};

const getters = {
  getUserInfo(state) {
    const userInfo = localStorage.getItem('userInfo');
    return JSON.parse(userInfo);
  }
};
const mutations = {
  getUserInfo(state, params) {
    localStorage.setItem('userInfo', JSON.stringify(params));
    localStorage.setItem('accesstoken', 'accesstoken');
    state.userInfo = params;
  },
  loginout(state, params) {
    localStorage.removeItem('userInfo',);
    localStorage.removeItem('accesstoken');
  }
};

const actions = {
  login({ state, commit }, params) {
    //  模拟异步登录
    return new Promise((resolve, reject) => {
      if (params.user === 'admin' && params.password === '888888') {
        setTimeout(function () {
          commit('getUserInfo', params);
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
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
