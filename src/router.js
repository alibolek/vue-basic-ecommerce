import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CartView from './views/CartView.vue';
import ErrorPage from './views/404PageView.vue';
import ProductListingView from './views/ProductListingView.vue';


Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/CartPage',
    name: 'CartView',
    component: CartView,
  }, {
    path: '/ProductListingPage',
    name: 'ProductListingView',
    component: ProductListingView,
  }, {
    path: '/404Page',
    name: '404Page',
    component: ErrorPage,
  }],
});
