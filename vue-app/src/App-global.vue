<script>
//import StatusBar from './components/global/StatusBar.vue';
import Hello from './components/greeter/Hello.vue';
export default {
    //Hello is just Component Name
    components: { Hello } //Local Component Registration,we tell to the vue engine that when ever you encounter this , create instance for this component.
}
</script>
<template>
    <!-- Pascal Case -->
    <!-- <StatusBar></StatusBar> -->
    <!-- <Hello></Hello> -->
    <!-- dash-case/ kebab-case -->
    <status-bar></status-bar>
    <hello></hello>
</template>
<style>

</style>