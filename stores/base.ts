import { defineStore } from 'pinia'

export const useBaseStore = defineStore('base', () => {
  // state
  const counter = ref(0)

  // getter
  const doubleCount = computed(() => {
    return counter.value * 2
  })

  // action
  const addCOunt = () => {
    counter.value++
  }

  return {
    counter,
    addCOunt,
    doubleCount
  }
})
