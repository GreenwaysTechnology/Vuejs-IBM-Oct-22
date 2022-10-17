<script setup>
import { reactive } from 'vue';

const {id,name,address: {city}} = reactive({
    id: 1,
    name: 'Subramanian',
    address: {
        city: 'Coimbatore'
    }
})
</script>
<template>
    <h1>Object destructuring and Reactivity</h1>
    <h1>Id {{id}}</h1>
    <h1>Name{{name}}</h1>
    <h1>City {{city}}</h1>

</template>