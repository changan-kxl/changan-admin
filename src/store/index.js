import { createStore } from "vuex";
import tag from "./modules/tag";

const state = {
  a: 1,
};

const getters = {};
const mutations = {};

const actions = {};

export default createStore({
  modules: {
    tag,
  },
  state,
  getters,
  mutations,
  actions,
});
