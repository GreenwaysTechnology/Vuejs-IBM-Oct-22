<script setup>
import Greeter from './Greeter.vue'
import { onMounted, ref } from 'vue';

const myinput = ref(null)
const greeter = ref(null)

onMounted(() => {
    console.log(myinput)
    myinput.value.focus()
    console.log(greeter.value.name)
})
</script>
<template>
    <input ref="myinput" value="test" />
    <Greeter ref="greeter"/>
</template>