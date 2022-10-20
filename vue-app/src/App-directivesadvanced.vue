<script setup>
import {ref} from 'vue'
const color = ref('blue')
</script>
<template>
    <!-- sending parameters to directive -->
    <h1 v-highlight.value="color">Highlight</h1>
    <!-- Directive Modifer : args -->
    <h1 v-highlight:foo.bar="color">Highlight</h1>

</template>
<style>
</style>