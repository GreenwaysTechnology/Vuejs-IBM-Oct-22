<!-- Non Reactive State -->
<script>
export default {
    setup() {
        //declare state : non reactive
        const counter = 0

        //return object
        return {
            counter
        }
    }
}
</script>
<template>
    <div>
        <h1>Counter App-With NonReactive State</h1>
        <h2>Counter {{counter}}</h2>
    </div>
</template>
<style>

</style>