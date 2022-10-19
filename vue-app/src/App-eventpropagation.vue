<script setup>

// const onSubmit = event => {
//     if (event) {
//         event.preventDefault();
//     }
// }

const onSubmit = event => {
  alert("Form has been submitted")
}

</script>
<template>
    <div>
        <form action="http://www.google.com">
            <!-- <button @click="onSubmit">Submit</button> -->
            <form @submit.prevent="onSubmit">
            <button>Submit</button>
        </form>
        </form>
    </div>
</template>