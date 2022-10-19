<script setup>
import { provide, ref } from 'vue';
import Child1 from './components/propsdrilling/Child1.vue';
const message = ref('Hello')
const counter =ref(0)
 provide("message", message)
// provide("counter",counter)
//provide('info',{counter,message})

</script>
<template>
    <h1>Parent</h1>
    <Child1 ></Child1>
</template>
<style>

</style>