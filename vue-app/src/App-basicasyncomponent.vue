<script setup>
import { defineAsyncComponent } from 'vue';
// import Greeter from './Greeter.vue';
const GreeterAsync = defineAsyncComponent(()=>import('./Greeter.vue'))

</script>
<template>
    <h1>Application</h1>
    <GreeterAsync/>
</template>