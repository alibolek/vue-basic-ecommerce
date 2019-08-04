<template>
  <div class="main-product-wrapper">
    <div class="product-image" :style="{ backgroundImage:'url(' + product.image + ')' }"></div>
    <div class="product-description">{{ product.name }}</div>
    <div class="price-button-wrapper">
      <div class="product-price">{{ product.price }} {{ product.currency }}</div>
    </div>
    <div class="update-cart">
      <button class="product-button update" @click="$emit('updateCartCount',product,false)">-</button>
      <input type="text" v-model = "product.count"  name="productCount" />
      <button class="product-button update" @click="$emit('updateCartCount',product,true)">+</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true },
  },
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

.button-wrapper {
  position: absolute;
  bottom: -125px;
  display: flex;
}

button.product-button.update {
  width: 28px;
  height: 29px;
  border-radius: 21px;
  background: white;
  color: black;
  font-size: 17px;
  border: 1px solid grey;
}

.update-cart {
  display: flex;
  justify-content: space-evenly;
}

input[type="text"] {
  width: 37px;
  height: 19px;
  text-align: center;
  border: 1px solid grey;
}
</style>
