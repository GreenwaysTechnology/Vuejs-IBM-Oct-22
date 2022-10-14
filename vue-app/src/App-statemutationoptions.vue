<script>

export default {
    data() {
        //return reactive state object
        return {
            count: 0
        }
    },
    methods: {
        //listener
        inc() {
            //mutate the reactive variable
            this.count++ //mutation
        }
    }
}

</script>
<template>
    <div>
        <h1>Reative State Using Options Api</h1>
        <h1>Counter : {{count}}</h1>
        <button @click="inc">+</button>
    </div>
</template>