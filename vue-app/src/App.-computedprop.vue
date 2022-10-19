<script setup>
import { computed, reactive } from 'vue';

const author = reactive({
    name: 'Subramanian',
    trainings: [
        'Vue 3 Basic to intermediate',
        'MicroServices using Spring Cloud'
    ]
})
//computed Property: 
// const isTrainingHandled = computed(() => {
//     return author.trainings.length > 0 ? 'Yes' : 'No'
// })
//normal js method
const isTrainingHandled =() => {
    return author.trainings.length > 0 ? 'Yes' : 'No'
}

</script>
<template>
    <!-- Immperative way of handling js expressions -->
    <!-- <h1>{{author.name}}  Has handled Trainings ? {{author.trainings.length > 0 ? 'Yes' : 'No'}}</h1>   -->
      <h1>{{author.name}}  Has handled Trainings ? {{isTrainingHandled()}}</h1>  
</template>