<script setup>
import { reactive } from 'vue'

const movie = {
    title:'The Matrix',
    language: ['English','Spanish','Hindi','Tamil','Telgu'],
    hours:['2 hrs 5 mins']
}
const tmpMovie = reactive(movie)

</script>
<template>
    <div>
        <ul>
            <li v-for="movie in tmpMovie">
                  {{movie}}
            </li>
        </ul>

    </div>
</template>