<script setup>
import { ref } from 'vue';
const msg = ref('')
const price = ref("10")
const mailid = ref('admin@foo.com')

</script>
<template>
    <h1>{{msg}}</h1>
    <!-- <input v-model="msg" /> -->
    <input v-model.lazy="msg" />
    <div>

        <label for="Price">Price</label>
        <input id="Price" v-model.number="price" />

    </div>
    <div>

        <label for="mailId">mailId</label>
        <input id="mailId" v-model.trim="mailid" />

    </div>
    <div>
        <h1>{{ msg }}</h1>
        <h1>Price {{price}} Total Price {{price * 2}}</h1>
        <h1>{{mailid}}</h1>
    </div>
</template>
<style>

</style>