<template>
  <div class="page-index">
    <!-- config private 測試： {{ API_SECRET }} <br> -->
    <!-- config public  測試： {{ ENV }} <br> -->
    <div class="aaa">
      {{ $t('key1') }}
      <img src="@/assets/images/icons/menu-down.svg">
    </div>
    <p>未讀訊息</p>
    {{ NOREADMSG }}
    <p>wsUrl</p>
    {{ WSURL }}
    <p>islogin</p>
    {{ ISLOGIN }}
    <p>userdata</p>
    {{ USERDATA }}
    <p>baseData</p>
    {{ BASEDATA }}

    <Logos />
    <Examples />
    <SwitchLanguage />
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBaseStore } from '../stores/base.js'

// env setting
// const runtimeConfig = useRuntimeConfig()
// const env = { ...runtimeConfig.public }
// const API_SECRET = runtimeConfig.public.API_BASE_URL
// const ENV = runtimeConfig.public.ENV
// console.log(env)

// fetch 資料
const BaseStore = useBaseStore()
// 引入 store action
const { BASE_DATA_INIT, USER_DATA_INIT, NO_READ_MSG, INDEX_DATA } = BaseStore
// 引入 store state / getter
const { BASEDATA, USERDATA, ISLOGIN, WSURL, NOREADMSG } = storeToRefs(BaseStore)

onMounted(() => {
  USER_DATA_INIT()
  BASE_DATA_INIT()
  NO_READ_MSG()
  INDEX_DATA()
})
</script>
<style lang="scss" scoped>
@import '../assets/scss';
.page-index {
  padding-top: 60px;
  text-align: center;
  .aaa {
    @include font('Heading1', red);
  }
  .bbb {
    @include font('Heading1', red);
  }
}
</style>
