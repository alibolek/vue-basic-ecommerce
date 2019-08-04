<template>
  <div class="main-wrapper">
    <loader v-if="isLoading"></loader>
    <product-box v-else v-for="product in products" :product="product" :key="product.id" @addToCart="onAddToCart(product)"></product-box>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProductBox from "@/components/ProductListingPage/ProductBox.vue";
import Loader from "@/components/Shared/Loader.vue";

export default {
  mounted() {
    this.loadProducts();
  },
  components: {
    ProductBox,
    Loader
  },
  methods: {
    ...mapActions(["loadProducts","addToCart"]),
    
    onAddToCart(product){
      this.addToCart(product);
      this.$router.push({name:'CartView'})
    }
  },
  computed: {
    ...mapState(["products", "isLoading"])
  }
};
</script>

<style scoped>
.main-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  align-items: center;
  height: auto;
  flex-wrap: wrap;
  align-self: center;
  position: absolute;
  justify-content: center;
  left: 50%;
  width: 72%;
  transform: translateX(-50%);
}
</style>
