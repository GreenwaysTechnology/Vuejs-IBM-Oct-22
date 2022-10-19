<script setup>
import { ref } from 'vue';
const name = ref("defaultName")

</script>
<template>
    <div>
        <p>{{name}}</p>
        <input v-model="name"/>
    </div>
</template>