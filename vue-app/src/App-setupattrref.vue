<script setup>
import { ref } from 'vue'
//reactive
let count = ref(0)
//listener
const inc = () => {
    count.value++
}
</script>
<template>
    <div>
        <h1>Reative State Using Options Api</h1>
        <!-- Inside template ref Object's value property is resolve automatically, we dont need to use .value -->
        <h1>Counter : {{count}}</h1>
        <button @click="inc">+</button>
    </div>
</template>