<!-- Composition Api Pattern -->
<script setup>
const props = defineProps(['title'])
// export default {
//     props: ['title'],
//     setup(props) {
//         console.log(props.title)
//         return {
//             title : props.title
//         }
//     }
// }

</script>
<template>
    <div>
        <h1>{{props.title}}</h1>
        <h1>{{title}}</h1>
    </div>
</template>
<style>

</style>