<script setup>
//const props = defineProps(['title'])
const props = defineProps({
    title: {
        type:String,
        default: 'Default Props'
    }
})
</script>
<template>
    <div>
        <h1>{{props.title}}</h1>
    </div>
</template>
<style>

</style>