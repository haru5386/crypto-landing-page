<template>
  <div class="page-index">
    <!-- content -->
    <block1 />
    <block2 />
    <block3 />
    <block4 />
    <block5 />
    <block7 />
    <block8 />
    <block9 />
  </div>
</template>
<script setup lang="ts">
import { useCookies } from '@vueuse/integrations/useCookies'
import { useUserStore } from '../../stores/user.js'
import { useBaseStore } from '../../stores/base.js'

import { availableLocales } from '../../utils/lang'
// fetch 資料
const BaseStore = useBaseStore()
const UserStore = useUserStore()
const exp = new Date()
const runtimeConfig = useRuntimeConfig()
// 引入 store action
// const { BASE_DATA_INIT } = BaseStore
const { USER_DATA_INIT } = UserStore
const { NOTICE_INFOLIST } = BaseStore

interface LanList {
  name: string
  iso: string
}

// 語系設定
const localeUserSetting = useCookies(['lan'])

// const availableLocales = await getAvailableLocales()

const router = useRouter()
const localeSetting = useState<string>('locale.setting')
const routerLang = router.currentRoute.value.path.slice(1, 6)
const lanList = Object.values(availableLocales)
// 比對是否為可使用語言，不行的話都倒到en_US
const lanListFilter: number = lanList.findIndex((i: LanList) => {
  return i.iso === routerLang
})
if (lanListFilter < 0) {
  router.push('/en_US')
}

localeSetting.value = routerLang // 獲取 router 語言

exp.setTime(exp.getTime() + 36500 * 24 * 60 * 60 * 1000)
localeUserSetting.set('lan', routerLang, {
  domain: runtimeConfig.public.DOMAIN_NAME,
  expires: exp,
  path: '/'
})

// watch(localeSetting, (val) => {
//   window.location.href = `/${val}`
// })

onMounted(() => {
  // 取得使用者資訊
  USER_DATA_INIT()
  NOTICE_INFOLIST({ page: 1, pageSize: 4 })
  // BASE_DATA_INIT()
})

</script>
<style lang="scss">
@import '../assets/scss';

.page-index {
  background-color: #000;
  width: 100vw;
  overflow: hidden;
}

.block {
  min-height: 100vh;
  width: 100vw;
  padding-top: 64px;
}
.container {
  max-width: 1200px;
  padding: 0 $spacing_4;
  margin: 0 auto;
  @include mobile {
    padding: 0 $spacing_2;
  }
}
</style>
