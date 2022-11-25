<template>
  <div class="page-index">
    <!-- content -->
    <block1 />
    <block2 />
    <block3 />
    <block4 />
    <block5 />
    <block6 />
    <block7 />
    <block8 />
    <block9 />
  </div>
</template>
<script setup lang="ts">
import { useBaseStore } from '../../stores/base.js'
import { useUserStore } from '../../stores/user.js'
// fetch 資料
const BaseStore = useBaseStore()
const UserStore = useUserStore()

// 引入 store action
const { BASE_DATA_INIT } = BaseStore
const { USER_DATA_INIT, NO_READ_MSG } = UserStore

onMounted(() => {
  // 取得使用者資訊
  USER_DATA_INIT()
  BASE_DATA_INIT()
  NO_READ_MSG()
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
