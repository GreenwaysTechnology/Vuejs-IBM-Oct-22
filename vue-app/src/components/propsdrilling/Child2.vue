<script setup>
import { inject } from 'vue';
import Child3 from './Child3.vue';
const company  = inject('company','google')
</script>
<template>
        <h1>Child2 - {{company}}</h1>

    <Child3></Child3>
</template>
<style>
</style>