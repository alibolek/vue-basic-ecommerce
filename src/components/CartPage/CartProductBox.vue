<template>
  <div class="main-product-wrapper">
    <div class="left-description-box">
      <div class="product-image" :style="{ backgroundImage:'url(' + product.image + ')' }"></div>
    <div class="price-button-wrapper">
      <div class="product-price">{{ product.price }} {{ product.currency }}</div>
    </div>
    <div class="update-cart">
      <button class="product-button update" @click="$emit('updateCartCount',product,false)">-</button>
      <input type="text" v-model = "product.count"  name="productCount" />
      <button class="product-button update" @click="$emit('updateCartCount',product,true)">+</button>
    </div>
    </div>
    
    <div class="right-description-box">
    <div class="product-description">{{ product.name }}</div>
    <button class="remove-product product-button" @click="$emit('removeProduct',product)">Remove</button>
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
  height: 26%;
  border: 0.1px solid rgb(209, 203, 203);
  display: flex;
  flex: 1 0 100%;
}

.product-image {
  width: 100%;
  height: 41%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.price-button-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  height: 24%;
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
  margin-bottom: 65px;
    border: 0;
    margin-left: 11px;
}

.product-description {
  font-size: 24px;
  color: #585555;
}

.button-wrapper {
  position: absolute;
  bottom: 215px;
  display: flex;
}

button.product-button.update {
  width: 25px;
  height: 24px;
  border-radius: 25px;
  background: white;
  color: black;
  font-size: 17px;
  border: 1px solid grey;
  margin: unset;
}

.update-cart {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  height: 17%;
  flex-direction: row;
}

input[type="text"] {
  width: 37px;
  height: 19px;
  text-align: center;
  border: 1px solid grey;
}
button.remove-product.product-button {
    background: white;
    color: black;
    border: 1px groove;
    margin: unset;
}


.left-description-box {
    width: 40%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.right-description-box {
    width: 60%;
    height: 100%;
    float: left;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}
</style>
