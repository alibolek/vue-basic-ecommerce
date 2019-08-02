import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const url = 'https://nonchalant-fang.glitch.me/listing';

export default new Vuex.Store({
  state: {

  },
  actions: {
    loadProducts({ commit }) {
      axios
        .get(url)
        .then(response => response.data)
        .then((products) => {
          commit('SET_PRODUCTS', products);
        });
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
  },
});
