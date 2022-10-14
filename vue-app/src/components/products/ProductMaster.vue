<script setup>
import ProductDetails from "./ProductDetails.vue";

const title = 'Product Details!!'
const intTitle = 100
</script>
<template>
    <h2>Product Master</h2>
    <hr>
    <!-- <ProductDetails title="Product Details" ></ProductDetails> -->
    <!-- <ProductDetails :title="title"></ProductDetails> -->
    <ProductDetails></ProductDetails>
    <ProductDetails :title="title"></ProductDetails>
    <ProductDetails :title="intTitle"></ProductDetails>
</template>

<style>

</style>