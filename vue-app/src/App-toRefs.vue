<script setup>
import { reactive, toRef, toRefs } from 'vue';
// const location = reactive({
//     lat: 10.5,
//     lng: 90.5
// })
//destructuring and reactivity
// let { lat, lng } = toRefs(location)
let { lat, lng } = toRefs(reactive({
    lat: 10.5,
    lng: 90.5
}))

const updateLocation = () => {
    lat.value = 100.89
    lng.value = 78.67
}
</script>
<template>
    <h1>Object destructuring and Reactivity</h1>
    <h1>Lat : {{lat}} {{lng}}</h1>
    <button @click="updateLocation">Update Location</button>
</template>