<template>
  <div class="main-product-wrapper">
    <div class="product-image" :style="{ backgroundImage:'url(' + product.image + ')' }"></div>
    <div class="product-description">{{ product.name }}</div>
    <div class="price-button-wrapper">
      <div class="product-price">{{ product.price }} {{ product.currency }}</div>
      <div class="product-button" @click="$emit('addToCart')">ADD BASKET</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true }
  }
};
</script>

<style scoped>
.main-product-wrapper {
  height: 339px;
  border: 0.1px solid rgb(209, 203, 203);
  display: flex;
  flex-direction: column;
  flex: 1 0 719px;
  margin: 0.1px;
  max-width: 274px;
}

.product-image {
  width: 100%;
  height: 100%;
  background-size: 54% 171px;
  background-repeat: no-repeat;
  background-position: center;
}

.price-button-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
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

.product-price {
  margin-bottom: 20px;
}

.product-description {
  font-size: 15px;
  margin: 25px;
  color: #585555;
}
</style>
