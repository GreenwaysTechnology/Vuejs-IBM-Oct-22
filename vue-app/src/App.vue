<script setup>
import Hello from "./components/greeter/Hello.vue";
//state declarations 
const firstName = 'Subramanian'
const lastName = 'Murugan'
//function declarations
const fullName = () => `${firstName} ${lastName}`
</script>
<template>
    <h1>Name {{firstName}} {{lastName}}</h1>
    <h1>Name {{fullName()}}</h1>
    <Hello></Hello>
</template>
<style>

</style>