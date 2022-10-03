<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useBaseStore } from '../stores/base.js'
import { config1 } from '../utils/api'
import { getBaseData } from '../assets/api/base'
const BaseStore = useBaseStore()

// ref 的解構方式
const { counter } = storeToRefs(BaseStore)

// function 的解構方式
const { addCOunt } = BaseStore

const clickAdd = () => {
  addCOunt()
}
// 直接使用 fetch
const { data } = await useFetch('https://www.metacoin.is/fe-ex-api/common/public_info_v4', {
  method: 'post',
  headers: { token: '123' }
})

// 封裝 server 發 request
const data2 = await config1()

// 前端封裝
const apiFetch = $fetch.create({
  baseURL: 'https://www.metacoin.is/',
  headers: {
    token: '444'
  },
  method: 'post'
})

// useFetch 封裝
const data3 = await apiFetch('fe-ex-api/common/public_info_v4')
// Same as $fetch('/test', { baseURL: '/api' })
const data4 = await getBaseData()

console.log('data', data.value)
console.log('data2', data2)
console.log('data3', data3)
console.log('data4', data4)

const data5 = await useFetch('https://www.metacoin.is/fe-ex-api/common/public_info_v4', {
  // baseURL: 'https://www.metacoin.is/',
  headers: {
    token: '12fff3'
  },
  method: 'post'
})
console.log('data5', data5)

</script>

<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="clickAdd">
      click
    </button>
  </div>
</template>
