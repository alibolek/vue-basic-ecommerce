<template>
  <div class="main-cart-wrapper">
    <cart-product-box
      v-for="product in cart"
      :product="product"
      :key="product.id"
      @updateCartCount="onUpdateCartCount"
    ></cart-product-box>
    <div class="button-wrapper">
      <button class="product-button" @click="returnToListingPage">CONTINUE TO SHOPPING</button>
      <button class="product-button" @click="onPlaceOrder" :disabled="isLoading">PLACE ORDER</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CartProductBox from "@/components/CartPage/CartProductBox.vue";

export default {
  components: {
    CartProductBox
  },
  methods: {
    ...mapActions(["placeOrder", "updateCartCount"]),
    async onPlaceOrder() {
      await this.placeOrder();
      this.$router.push({ name: "Home" });
    },
    returnToListingPage() {
      this.$router.push({ name: "ProductListingView" });
    },
    onUpdateCartCount(product,flag) {
      const payload = {product:product,flag:flag};
      
      this.updateCartCount(payload);
    }
  },
  computed: {
    ...mapState(["cart", "isLoading"]),
  }
};
</script>

<style scoped>
.main-cart-wrapper {
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
.product-button {
  width: 150px;
  height: 39px;
  display: flex;
  background: #ff7102;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: white;
  font-weight: 900;
  cursor: pointer;
  margin-bottom: 20px;
}
.button-wrapper {
  position: absolute;
  bottom: -125px;
  display: flex;
}
</style>
