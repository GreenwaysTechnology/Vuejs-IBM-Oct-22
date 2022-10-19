<script setup>
import { inject } from 'vue';

const message = inject('message','default Message')
</script>
<template>
    <h1>Child3</h1>
    <h1>Data From the Parent {{message}} </h1>
</template>
<style>

</style>