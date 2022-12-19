<template>
  <ClientOnly>
    <el-drawer
      v-model="isOpen"
      size="100%"
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
        <div class="title">
          <img
            width="18px"
            height="21px"
            src="@/assets/images/icons/bell.svg"
            alt="notice"
          >
          {{ $t('消息中心') }}
        </div>
        <div class="icon menu">
          <div
            v-for="item in NOREADMSG?.userMessageList"
            :key="item.id"
            class="menu-item"
            @click="goPath(`/${localeSetting}/mesage`)"
          >
            <div class="new">
              <div class="dot" />
            </div>
            <div class="message">
              {{ item.messageContent }}
            </div>
          </div>
          <div
            class="more"
            @click="goPath(`/${localeSetting}/mesage`)"
          >
            {{ $t('查看更多') }}
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
    display: flex;
    flex-direction: column;
    .menu-item {
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: $color_gray_90;
      }

      .message {
        flex: 1;
        color: #fff;
        padding-right: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        &:hover {
          color: $color_identity_Primary;
        }
      }
      .new {
        width: 50px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .dot {
          width: 8px;
          height: 8px;
          background-color: $color_state_Error;
          border-radius: 50%;
        }
      }
    }
    .more {
      border-top: 1px solid $color_gray_60;
      padding: 16px;
      color: #fff;
      padding-top: 20px;
      &:hover {
        color: $color_identity_Primary;
      }
    }
  }
}

.el-drawer {
  width: 100%;
  max-width: 375px;
  left: auto;
  background-color: $color_gray_80;
}

.el-drawer__body {
  padding: 0;
}
// pad
@include pad {
  .el-drawer {
    max-width: 375px;
  }
}

// mobile
@include mobile {
  .el-drawer {
    max-width: 100%;
  }
}
</style>
