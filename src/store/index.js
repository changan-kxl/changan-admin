import { createStore } from "vuex";
import tagNav from "./modules/tagNav";
import login from "./modules/login";

const state = {};

const getters = {};
const mutations = {};

const actions = {};

export default createStore({
  modules: {
    tagNav,
    login,
  },
  state,
  getters,
  mutations,
  actions,
});
