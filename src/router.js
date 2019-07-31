import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CartView from './views/CartView.vue';
import ProductView from './views/ProductView.vue';
import ProductListingView from './views/ProductListingView.vue';


Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  }, {
    path: '/CartPage',
    name: 'CartView',
    component: CartView,
  }, {
    path: '/ProductPage',
    name: 'ProductView',
    component: ProductView,
  }, {
    path: '/ProductListingPage',
    name: 'ProductListingView',
    component: ProductListingView,
  }],
});
