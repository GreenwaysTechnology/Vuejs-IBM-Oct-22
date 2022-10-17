<script setup>
import { ref } from 'vue'
import TODOS from './mock-data/todos'
//deep nesting
const todos = ref(TODOS)

const filter = () => todos.value = todos.value.filter(todo => todo.completed)
</script>
<template>
    <div>
        <button @click="filter">Filter By Status</button>
        <h1>Total items : {{todos.length}}</h1>
        <ul>
            <li v-for="(todo,index) in todos" :key="todo.id">
                <span>{{todo.title}}</span>
            </li>
        </ul>

    </div>
</template>