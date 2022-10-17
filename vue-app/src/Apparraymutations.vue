<script setup>
import { reactive } from 'vue';
const todos = reactive([])
//listener
const addItem = () => {
    todos.push({ id: Math.random(), text: 'Learn Vue!' })
}
</script>
<template>

    <ul>
        <li v-for="todo in todos">
            <span>{{todo}}</span>
        </li>
    </ul>
    <button @click="addItem">AddItem</button>
</template>
<style>

</style>