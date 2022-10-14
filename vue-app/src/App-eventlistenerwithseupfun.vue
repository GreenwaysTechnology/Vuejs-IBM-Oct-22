<script>
export default {
    setup() {
        //declare listener - es 5
        // function hello(evt) {
        //     console.log(evt)
        //     console.log('hello')
        // }
        // function hai() {
        //     console.log('hai')
        // }
        //declare event listener -es 6 arrow functions
        const hello = (evt) => {
            console.log(evt)
            console.log('hello')
        }
        const hai = () => console.log('hai')
        
        return {
            hello, hai
        }
    }
}
</script>
<template>
    <button v-on:click="hello">Hello</button>
    <button @click="hai">Hai</button>

</template>
<style>

</style>