<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <ProductListing/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductListing from '@/components/ProductListingPage/ProductListing.vue';

export default {
  components: {
    ProductListing,
  },
};
</script>
