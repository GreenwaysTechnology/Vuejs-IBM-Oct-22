import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', {
//   //state
//   state: () => {
//       //return inital state
//       return {
//           count: 10
//       }
//   },
//   //actions
//   actions: {
//       increment() {
//           this.count++
//       }
//   },
//   //getters (computed Properties)
//   getters: {
//       doubleIt: state => state.count * 2
//   }
// })

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
