<template>
  <div class="page-index">
    <!-- config private 測試： {{ API_SECRET }} <br> -->
    <!-- config public  測試： {{ ENV }} <br> -->
    <div class="aaa">
      {{ $t('key1') }}
    </div>
    <Logos />
    <Examples />
    <SwitchLanguage />
    <StoreData />
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBaseStore } from '../stores/base.js'
import { getBaseData, getUserInfo } from '@/api/base'
const runtimeConfig = useRuntimeConfig()
const env = { ...runtimeConfig.public }

const { data: userinfo } = await useFetch('https://www.metacoin.is/fe-ex-api/common/user_info', {
  method: 'post'
})
console.log('userinfo', userinfo)
// import { getBaseData } from '@/api/base'

// import fetchData3 from '../utils/request3.ts'

const BaseStore = useBaseStore()

// function 的解構方式
const { BaseDataInit, UserInfoInit } = BaseStore
// const API_SECRET = runtimeConfig.public.API_BASE_URL
// const ENV = runtimeConfig.public.ENV
nextTick(() => {
// BaseDataInit()
  UserInfoInit()
})
console.log(env)

</script>
<style lang="scss" scoped>
@import '../assets/scss';
.page-index {
  padding-top: 60px;
  text-align: center;
  .aaa {
    @include font('Heading1', red);
  }
}
</style>
