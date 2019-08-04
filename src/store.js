import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { stat } from 'fs';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const url = 'https://nonchalant-fang.glitch.me';

export default new Vuex.Store({
  state: {
    products: [],
    isLoading: false,
    cart: [],
  },
  actions: {
    async loadProducts({ commit }) {
      commit('SET_LOADING', true);
      const response = await axios.get(`${url}/listing`);
      commit('SET_PRODUCTS', response.data);
      commit('SET_LOADING', false);
    },
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    async placeOrder({ commit, state }) {
      commit('SET_LOADING', true);
      await axios.post(`${url}/order`, state.cart);
      commit('PLACE_ORDER');
      return commit('SET_LOADING', false);
    },
    updateCartCount({ commit }, product) {
      commit('UPDATE_CART_COUNT', product);
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    ADD_TO_CART(state, product) {
      let foundProduct = state.cart.find(cartProduct => product.id === cartProduct.id);

      if (foundProduct) {
        foundProduct.count += 1;
      } else {
        foundProduct = {
          ...product,
          count: 1,
        };
        state.cart.push(foundProduct);
      }
    },
    PLACE_ORDER(state) {
      state.cart = [];
    },
    /*UPDATE_CART_COUNT(state, product) {
          state.cart.product = isLoading;
        }, */
  },
});
