<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
function delay() {
  return new Promise((resolve, rejec) => {
    setTimeout(resolve, 10000, 'I delay the process')
  })
}
const output = await delay()

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }} {{output}}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>