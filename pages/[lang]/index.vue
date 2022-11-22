<template>
  <div class="page-index">
    <!-- content -->
  </div>
</template>
<script setup lang="ts">
import { useBaseStore } from '../../stores/base.js'
import { useUserStore } from '../../stores/user.js'

// fetch 資料
const BaseStore = useBaseStore()
const UserStore = useUserStore()

// 引入 store action
const { BASE_DATA_INIT, NO_READ_MSG } = BaseStore
const { USER_DATA_INIT } = UserStore
// 引入 store state / getter

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
