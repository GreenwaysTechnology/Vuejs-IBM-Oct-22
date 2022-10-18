<script>
export default {
    created(){
        console.log(this.$attrs)
    },
    //inheritAttrs :false - to disable attribute inheritance..
}
</script>

<script setup>
const props = defineProps(['title'])
</script>
<template>
    <button class="large">{{props.title}}</button>
     <!-- <div>{{$attrs}}</div> -->
</template>
<style scoped>
/* .fancy-btn {
    color:red
} */
.large {
    color: rgb(228, 7, 7);
}
</style>