import { getHomeRoute, getNextRoute, routeEqual } from "@/libs/util";

const state = {
  tagsList: [],
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
    if (existItem.length > 0) return;
    state.tagsList.push(params);
  },
  DEL_DATA(state, params) {
    const index = state.tagsList.findIndex(
      (item) => item.key === params.targetKey
    );
    state.tagsList.splice(index, 1);
  },
  setTagNavList(state, list) {
    let tagList = [];
    if (list) {
      tagList = [...list];
    } else {
      // 取缓存
    }
    state.tagsList = tagList
  },
};

const actions = {
  addNavItem({ commit, state }, params) {
    commit("SET_DATA", params);
  },
  removeNavItem({ commit, state }, params) {
    commit("DEL_DATA", params);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
