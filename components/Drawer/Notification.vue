<template>
  <ClientOnly>
    <el-drawer
      v-model="isOpen"
      size="1"
      :with-header="false"
      direction="rtl"
    >
      <div class="board">
        <!-- Header -->
        <div class="menu-head">
          <div
            class="icon-close"
            @click="isOpen = false"
          >
            <el-icon
              color="#fff"
              size="20px"
            >
              <Close />
            </el-icon>
          </div>
        </div>
        <div class="menu">
          <div
            class="menu-item"
            @click="goPath(`/${localeSetting}/message`)"
          >
            <div class="menu-item-right">
              <img
                src="@/assets/images/icons/message.svg"
                alt=""
              >
              {{ $t("消息中心") }}
            </div>
            <div class="menu-item-left">
              <span
                v-if="NOREADMSG?.noReadMsgCount"
                class="count"
              >{{ NOREADMSG?.noReadMsgCount }}</span>
            </div>
          </div>
          <div
            class="menu-item"
            @click="goPath(`/${localeSetting}/noticeInfo`)"
          >
            <div class="menu-item-right">
              <img
                src="@/assets/images/icons/noticeInfo.svg"
                alt=""
              >
              {{ $t("公告") }}
            </div>
            <div class="menu-item-left" />
          </div>
        </div>
      </div>
    </el-drawer>
  </ClientOnly>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ElDrawer, ElIcon } from 'element-plus'
import { defineProps } from 'vue'
import { Close } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user.js'

// stores
const UserStore = useUserStore()
const { NOREADMSG } = storeToRefs(UserStore)
// lang
const localeSetting = useState<string>('locale.setting')

const emit = defineEmits(['update'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const isOpen = computed({
  get: () => props.modelValue,
  set: value => emit('update', value)
})

// tab 導頁
const goPath = (link: string) => {
  window.location.href = link
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';

.board {
  color: #fff;
  width: 100%;
  height: 100%;
  .menu-head {
    width: 100%;
    position: relative;
    height: 40px;
    .icon-close {
      position: absolute;
      top: 25px;
      right: 21px;
      cursor: pointer;
    }
  }
  .title {
    width: 100%;
    padding: 88px 20px 20px 24px;
    display: flex;
    align-items: center;
    @include font('Heading2', #fff);
    img {
      width: 21px;
      height: 21px;
      margin-right: 15px;
    }
  }
  .menu {
    width: 100%;
    margin-top: 40px;
    height: 100%;
    .menu-item {
      @include font("Body2-Med", $color_gray_White);
      padding: 20px 24px;
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: space-between;
      &:hover {
        background-color: $color_gray_90;
      }
      .menu-item-right {
        display: flex;
        align-items: center;
        img {
          margin-right: 8px;
        }
      }
      .count {
        @include font("Cap1-Bold", $color_identity_Primary);
        padding: 0 8px;
        margin-left: 10px;
        background: $color_identity_Light;
        border-radius: 4px;
      }
    }
  }
}

.el-drawer {
  width: 347px;
  left: auto;
  background-color: $color_gray_80;
  border-radius: 16px 0 0 0;
}

.el-drawer__body {
  padding: 0;
}

// pad
@include pad {
  .el-drawer {
    width: 347px;
  }
}

// mobile
@include mobile {
  .el-drawer {
    width: 305px;
  }
}
</style>
