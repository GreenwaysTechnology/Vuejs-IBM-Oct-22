<script setup>
//basic directive : create directive object
//directive Name starts with vDirective
const vFocus = {
    //define life cycle method
    mounted: (element) => {
        console.dir(element)
        //logic
        element.focus()
    }
}
</script>
<template>
    <input />
    <input v-focus />

</template>
<style>

</style>