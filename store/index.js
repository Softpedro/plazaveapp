import Vuex from 'vuex';
import axios from '@/plugins/axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      promos: [],
      promo: {},
      page: 1
    },
    actions: {
      async getPromos ({ commit, state }) {
        let { data } = await axios.get(`/posts/?page=${state.page}&limit=10`);
        commit('SET_PROMOS', data);
      },
      async getPromo ({ commit }, id) {
        let { data } = await axios.get(`/posts/${id}`);
        commit('SET_PROMO', data);
      }
    },
    mutations: {
      SET_PROMOS (state, promos) {
        state.promos = promos;
      },
      SET_PROMO (state, promo) {
        state.promo = promo
      }
    }
  })
};

export default createStore;