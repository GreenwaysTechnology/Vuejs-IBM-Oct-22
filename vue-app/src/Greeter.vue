<!-- composition api pattern using setup function -->
<script setup>
import { ref } from 'vue';

//declare state variable
const message = ref('Hello')
const name = ref('Subramanian')
function sayHai() {
    return 'Hai'
}
defineExpose({
    message,name
})
</script>
<template>
    <h1 class="header">{{ message }} {{ name }}</h1>
    <h1>{{sayHai()}}</h1>
</template>
<style>
</style>