<template>
  <div>
    <!-- Header -->
    <LayoutDefaultHeader />
    <slot />
    <!-- Footer -->
    <LayoutDefaultFooter />
  </div>
</template>
<script lang="ts" setup>
// import { useBaseStore } from '../stores/base.js'
// fetch 資料
// const BaseStore = useBaseStore()
// 引入 store action
// const { GET_HEADER_AND_FOOTER_DATA } = BaseStore

onMounted(() => {
  // 取得 Header & Footer 設定
  // GET_HEADER_AND_FOOTER_DATA()
})
</script>
