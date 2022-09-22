<template>
  <div class="page-index">
    <!-- config private 測試： {{ API_SECRET }} <br> -->
    <!-- config public  測試： {{ ENV }} <br> -->
    <Logos />
    <Examples />
    <SwitchLanguage />
  </div>
</template>
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const env = { ...runtimeConfig.public }
// const API_SECRET = runtimeConfig.public.API_BASE_URL
// const ENV = runtimeConfig.public.ENV

console.log(env)

</script>
<style>
.page-index {
  padding-top: 60px;
  text-align: center;
}
</style>
