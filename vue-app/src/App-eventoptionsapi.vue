<script>
export default {
    //event handlers
    methods: {
        //arg
        //event is just variable points to "EventTarget Object":Bridge object between listener and DOM element
        hello(event) {
            console.log(event)
            console.log('Hello event is triggered')
        },
        hai() {
            console.log('Hai event is triggered')
        }
    }
}
</script>
<template>
    <button v-on:click="hello">Hello</button>
    <button @click="hello">Hai</button>

</template>
<style>

</style>