<script>
import Hello from "./components/greeter/Hello.vue";
export default {
    components: { Hello }, // create this component instance before creating this declarations : [Hello]
    setup() {
    }
}
</script>
<template>
    <div>
        <h1>App</h1>
        <Hello></Hello>
    </div>
</template>
<style>

</style>