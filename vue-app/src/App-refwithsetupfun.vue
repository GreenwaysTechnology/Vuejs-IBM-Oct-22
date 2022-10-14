<script>
import { ref } from 'vue'
export default {
    setup() {
        //state -normal variable
        //let count = 0
        //reactive
        let count = ref(0)
        console.log(count)
        //listener
        const inc = () => {
            count.value++
        }

        return {
            count,
            inc
        }
    }
}

</script>
<template>
    <div>
        <h1>Reative State Using Options Api</h1>
        <!-- Inside template ref Object's value property is resolve automatically, we dont need to use .value -->
        <h1>Counter : {{count}}</h1>
        <button @click="inc">+</button>
    </div>
</template>