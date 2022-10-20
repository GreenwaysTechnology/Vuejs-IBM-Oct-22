<script setup>
import { defineAsyncComponent, Suspense } from 'vue';

const HelloWorld = defineAsyncComponent(() => import('./HelloWorld.vue'))

const message = 'Hello Async component'
</script>
<template>
    <Suspense>
        <HelloWorld :msg="message" />
        <!-- This is fallback component when component takes more time to load -->
        <template #fallback>
            <h1>Loading...</h1>
        </template>
    </Suspense>
</template>