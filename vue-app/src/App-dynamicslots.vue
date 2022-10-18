<script setup>
import { ref } from 'vue';
import Layout from './Layout.vue'

const header =ref('header')
</script>
<template>
    <h1>Vue Application</h1>
    <Layout>
        <!-- <template v-slot:header>
            <h1>Header</h1>
        </template>
        <template v-slot:main>
            <p>This is body</p>
        </template>
        <template v-slot:footer>
            <h3>Footer</h3>
        </template> -->
        <template #[header]>
            <h1>Header</h1>
        </template>
        <template #default>
            <p>This is body</p>
        </template>
        <template #footer>
            <h3>Footer</h3>
        </template>
    </Layout>
</template>
<style>

</style>