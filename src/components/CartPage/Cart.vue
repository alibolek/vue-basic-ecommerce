<template>
  <div class="main-cart-wrapper">
    <cart-product-box
      v-for="product in cart"
      :product="product"
      :key="product.id"
      @updateCartCount="onUpdateCartCount"
      @removeProduct="onRemoveCartItem"
    ></cart-product-box>
    <div v-if="cart.length > 0" class="button-wrapper">
      <button class="product-button back" @click="returnToListingPage">< CONTINUE TO SHOPPING</button>
      <button class="product-button" @click="onPlaceOrder" :disabled="isLoading">PLACE ORDER</button>
    </div>
    <h1 v-else>Your cart is empty. Go back and add something to cart!</h1>
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
    ...mapActions(["placeOrder", "updateCartCount", "removeProduct","clearApiStatus"]),
    async onPlaceOrder() {
      await this.placeOrder();
      
      this.apiStatus === '404' ? this.$router.push({ name: "404Page" }) : this.$router.push({ name: "Home" });
      this.clearApiStatus();      
    },
    returnToListingPage() {
      this.$router.push({ name: "ProductListingView" });
    },
    onUpdateCartCount(product, flag) {
      const payload = { product: product, flag: flag };

      this.updateCartCount(payload);
    },
    onRemoveCartItem(product) {
      this.removeProduct(product);
    }
  },
  computed: {
    ...mapState(["cart", "isLoading","apiStatus"])
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
  position: absolute;
  justify-content: flex-start;
  left: 50%;
  width: 63%;
  transform: translateX(-50%);
  height: 70%;
}
.product-button {
  width: 150px;
  height: 39px;
  background: #ff4100cf;
  font-size: 14px;
  color: white;
  font-weight: 900;
  cursor: pointer;
  border: unset;
}
.button-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-bottom: 50px;
}
button.product-button.back {
  background: #ccc8c830;
  color: black;
  border: 0.7px;
  border-style: outset;
  width: 269px;
}
h1 {
  margin: auto;
}
</style>
