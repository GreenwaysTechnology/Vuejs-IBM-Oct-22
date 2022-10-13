<script setup>
//variable
const name = 'Subramanian'
</script>
<template>
    <h1>Interpolation using mustace notation</h1>
    <h2>Name {{name}}</h2>
    <h1>Interpolation using using Directives-text </h1>
    <h2 v-text="`name ${name}`"></h2>
    <h1>Interpolation using using Directives-html </h1>
    <h2 v-html="`name ${name}`"></h2>
</template>
<style>

</style>