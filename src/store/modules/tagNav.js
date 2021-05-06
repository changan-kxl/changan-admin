import { getHomeRoute, getNextRoute, routeEqual } from '@/libs/util';

const state = {
  tagsList: []
};

const closePage = (state, route) => {
  const nextRoute = getNextRoute(state.tagsList, route);
  state.tagsList = state.tagsList.filter((item) => {
    return !routeEqual(item, route);
  });
  router.push(nextRoute);
};

const getters = {};
const mutations = {
  SET_DATA(state, params) {
    const existItem = state.tagsList.filter((item) => item.key === params.key);
    if (existItem.length > 0) {
return;
}
    state.tagsList.push(params);
  },
  DEL_DATA(state, params) {
    const index = state.tagsList.findIndex((item) => item.key === params.targetKey);
    state.tagsList.splice(index, 1);
  },
  setTagNavList(state, list) {
    let tagList = [];
    if (list) {
      tagList = [...list];
    } else {
      // 取缓存
    }
    state.tagsList = tagList;
  },
  // 关闭左侧
  closeLeftTabs(state, route) {
    const index = state.tagsList.findIndex((item) => item.key === route.key);
    state.tagsList.splice(0, index);
  },
  // 关闭右侧
  closeRightTabs(state, route) {
    const index = state.tagsList.findIndex((item) => item.key === route.key);
    state.tagsList.splice(index + 1);
  },
  // 关闭其他
  closeAnthorTabs(state, route) {
    state.tagsList = state.tagsList.filter((item) => item.key === route.key);
  }
};

const actions = {
  addNavItem({ commit, state }, params) {
    commit('SET_DATA', params);
  },
  removeNavItem({ commit, state }, params) {
    commit('DEL_DATA', params);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
