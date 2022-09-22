<template>
  <div class="page-index">
    <!-- config private 測試： {{ API_SECRET }} <br> -->
    <!-- config public  測試： {{ ENV }} <br> -->
    <div class="aaa">
      123
    </div>
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
<style lang="scss" scoped>
@import '../assets/scss';
.page-index {
  padding-top: 60px;
  text-align: center;
  .aaa {
    color: red;
  }
}
</style>
