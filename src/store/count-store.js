import {computed, ref} from 'vue';
import { defineStore } from 'pinia'

export const useCounter1Store = defineStore('counter1', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

export const useCounter2Store = defineStore('counter2', () => {
  const count = ref(0)
  
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})