<script setup>
import ChildSlot from './ChildSlot.vue';

</script>
<template>
    <!-- <ChildSlot>
    </ChildSlot> -->
    <ChildSlot/>
    <ChildSlot>
        <h3>How are you?</h3>
    </ChildSlot>
</template>
<style>

</style>