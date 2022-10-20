<script setup>
import { defineAsyncComponent } from 'vue';
import Greeter from './Greeter.vue';
import ErrorComponent from './ErrorComponent.vue'
// const GreeterAsync = defineAsyncComponent(()=>import('./Greeter.vue'))

const GreeterAsync = defineAsyncComponent({
    loader: () => import('./Greeter.vue'),
    loadingComponent: Greeter,
    errorComponent: ErrorComponent,
    delay: 5000,
    timeout: 200
})

</script>
<template>
    <h1>Application</h1>
    <GreeterAsync />
</template>