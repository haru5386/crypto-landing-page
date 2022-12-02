<template>
  <div class="page-index">
    <!-- config private 測試： {{ API_SECRET }} <br> -->
    <!-- config public  測試： {{ ENV }} <br> -->
  </div>
</template>
<script setup lang="ts">
// import { storeToRefs } from 'pinia'
// import { useBaseStore } from '../stores/base.js'

// env setting
// const runtimeConfig = useRuntimeConfig()
// const env = { ...runtimeConfig.public }
// const API_SECRET = runtimeConfig.public.API_BASE_URL
// const ENV = runtimeConfig.public.ENV
// console.log(env)

// fetch 資料
// const BaseStore = useBaseStore()
// 引入 store action
// const { BASE_DATA_INIT } = BaseStore
// 引入 store state / getter
// const { BASEDATA, WSURL, NOREADMSG } = storeToRefs(BaseStore)

// 語言 不拿 i18n 裡的 直接拿 cookie 或瀏覽器預設
// const localeSetting = useState<string>('locale.setting')
const localeUserSetting = useCookie('lan')

// 更新語言重新整理
// watch(localeSetting, (val) => {
//   window.location.href = `/${val}`
// })

// const router = useRouter()

onMounted(() => {
  // BASE_DATA_INIT()
  let lan = ''
  if (localeUserSetting.value) {
    lan = localeUserSetting.value
  } else {
    lan = window.navigator.language
    switch (lan) {
      case 'zh-TW':
        lan = 'el_GR'
        break
      case 'zh-CN':
        lan = 'zh_CN'
        break
      case 'en-US':
        lan = 'en_US'
        break
      case 'ja':
        lan = 'ja_JP'
        break
      case 'ko':
        lan = 'ko_KR'
        break
      case 'vi':
        lan = 'vi_VN'
        break
    }
  }

  window.location.href = `/${lan}`
  // router.push(`/${language}`)
})
</script>
<style lang="scss" scoped>
@import '../assets/scss';
.page-index {
  padding-top: 60px;
  text-align: center;
  height: 100vh;
}
</style>
