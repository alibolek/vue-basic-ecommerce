<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <Product/>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '@/components/ProductDetailPage/ProductDetail.vue';

export default {
  components: {
    Product,
  },
};
</script>
