<script setup>
//const props = defineProps(['title'])
const props = defineProps({
    title: {
        type:String,
        default: 'Default Props'
    }
})
//update property - props are read only
props.title = "something"
</script>
<template>
    <div>
        <h1>{{props.title}}</h1>
    </div>
</template>
<style>

</style>