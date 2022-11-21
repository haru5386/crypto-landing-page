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
import { useBaseStore } from '../../stores/base.js'
import { useUserStore } from '../../stores/user.js'

// fetch 資料
const BaseStore = useBaseStore()
const UserStore = useUserStore()

// 引入 store action
const { BASE_DATA_INIT, NO_READ_MSG } = BaseStore
const { USER_DATA_INIT } = UserStore
// 引入 store state / getter
const { BASEDATA, WSURL, NOREADMSG } = storeToRefs(BaseStore)
const { USERDATA, ISLOGIN } = storeToRefs(UserStore)

onMounted(() => {
  // 取得使用者資訊
  USER_DATA_INIT()
  BASE_DATA_INIT()
  NO_READ_MSG()
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
