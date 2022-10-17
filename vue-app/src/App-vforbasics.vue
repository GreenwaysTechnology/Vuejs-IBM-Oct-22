<script setup>
import { reactive} from 'vue'
import TODOS from './mock-data/todos'
//deep nesting
const todos = reactive(TODOS)

</script>
<template>
    <div>
      <ul>
        <li v-for="(todo,index) in todos" :key="todo.id">
          <!-- <span>{{index}} {{todo.title}}</span> -->
          <span>{{todo.title}}</span>
        </li>
      </ul>

    </div>
</template>