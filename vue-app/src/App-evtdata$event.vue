<script setup>
const getData = (message,event) => {
    console.log(message)
    console.log(event)
}
</script>
<template>
    <button @click="getData('Hello',$event)">Pass Data</button>
</template>