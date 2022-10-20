<script setup>
import { ref } from 'vue';

const name = ref('subramanian')
</script>
<template>
    <h1>{{$uppercase(name)}}</h1>
</template>