import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const url = 'https://nonchalant-fang.glitch.me';

function findProductInCart(state, product) {
  return state.cart.find(cartProduct => product.id === cartProduct.id);
}

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
    updateCartCount({ commit }, payload) {
      commit('UPDATE_CART_COUNT', payload);
    },
    removeProduct({ commit }, product) {
      commit('REMOVE_PRODUCT', product);
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
      let foundProduct = findProductInCart(state, product);

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
    UPDATE_CART_COUNT(state, payload) {
      if (!payload.flag && payload.product.count === 1) {
        return;
      }
      if (payload.flag && payload.product.count === 9) {
        // eslint-disable-next-line no-alert
        alert('We dont have that much product in our store :(');
        return;
      }
      const updatedProduct = findProductInCart(state, payload.product);
      updatedProduct.count = payload.flag ? updatedProduct.count += 1 : updatedProduct.count -= 1;
    },
    REMOVE_PRODUCT(state, product) {
      const productToRemove = findProductInCart(state, product);
      state.cart.splice(state.cart.indexOf(productToRemove, 1));
    },
  },
});
