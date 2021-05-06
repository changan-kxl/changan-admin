import { createStore } from 'vuex';
import tagNav from './modules/tagNav';
import login from './modules/login';
import app from './modules/app';

const state = {};

const getters = {};
const mutations = {};

const actions = {};

export default createStore({
  modules: {
    tagNav,
    login,
    app
  },
  state,
  getters,
  mutations,
  actions
});
