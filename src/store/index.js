import { createStore } from 'vuex';
import tagNav from './modules/tagNav';
import user from './modules/user';
import app from './modules/app';

const state = {};

const getters = {};
const mutations = {};

const actions = {};

export default createStore({
  modules: {
    tagNav,
    user,
    app
  },
  state,
  getters,
  mutations,
  actions
});
