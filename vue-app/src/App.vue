<script setup>
import ScopeSlot from './ScopeSlot.vue';

</script>
<template>
    <h1>Scoped Slots</h1>
    <ScopeSlot v-slot="slotprops">
        {{slotprops.message}}
    </ScopeSlot>
</template>
<style>
</style>