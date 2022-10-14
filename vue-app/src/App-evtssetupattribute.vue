<script setup>
const hello = (evt) => {
    console.log(evt)
    console.log('hello')
}
const hai = () => console.log('hai')
</script>
<template>
    <button v-on:click="hello">Hello</button>
    <button @click="hai">Hai</button>

</template>
<style>

</style>