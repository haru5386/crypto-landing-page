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
        <div
          v-if="!isLogin"
          class="login-buttons"
        >
          <button class="login">
            {{ $t('登錄') }}
          </button>
          <!-- 註冊 -->
          <button class="sign-up">
            {{ $t('註冊') }}
          </button>
        </div>
        <div
          v-else
          class="account"
        >
          <div class="email">
            {{ USERDATA?.email }}
          </div>
          <div class="status">
            Account status : {{ accountStatusText }}
          </div>
        </div>
        <el-collapse accordion>
          <el-collapse-item name="1">
            <template #title>
              <div class="tab-title">
                <img
                  class="icon no-active"
                  src="../../assets/images/icons/global.svg"
                  alt="language"
                >
                <img
                  class="icon active"
                  src="../../assets/images/icons/global-active.svg"
                  alt="language"
                >
                English
              </div>
            </template>
            <div>
              <div
                v-for="item in availableLocales"
                :key="item.iso"
                class="drop-down-item"
                :class="{ active: localeSetting === item.iso }"
                @click="changeLang(item.iso)"
              >
                <div class="item-text">
                  {{ item.name }}
                </div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-drawer>
  </ClientOnly>
</template>
<script lang="ts" setup>
import { ElDrawer, ElIcon, ElCollapse, ElCollapseItem } from 'element-plus'
import { defineProps } from 'vue'
import { Close } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '~~/stores/user'
import { availableLocales } from '@/utils/lang'

const localeSetting = useState<string>('locale.setting')

// stores
const UserStore = useUserStore()
const { ISLOGIN, USERDATA } = storeToRefs(UserStore)

// data
const isLogin = computed(() => {
  return ISLOGIN.value
})
const changeLang = (lang: string) => {
  localeSetting.value = lang
}

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

// tabs
const { t } = useLang()

// 帳戶狀態
const accountStatusText = computed(() => {
  switch (USERDATA.value?.accountStatus) {
    case 0:
      return t('正常')
    case 1:
      return t('凍結交易, 凍結提現')
    case 2:
      return t('凍結交易')
    case 3:
      return t('凍結提現')
    default:
      return t('正常')
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';

.board {
  color: #fff;
  .menu-head {
    width: 100%;
    position: relative;
    .icon-close {
      position: absolute;
      top: 25px;
      right: 21px;
    }
  }
  .account {
    padding: 16px;
    padding-top: 72px;

    .email {
      @include font('Heading2', #fff);
    }

    .status {
      margin-top: 4px;
      @include font('Body1-Reg', $color_gray_60);
    }
  }

  // 登出狀態顯示
  .login-buttons {
    display: flex;
    align-items: center;
    margin: 0 15px;
    padding-top: 81px;

    .login {
      flex: 1;
      height: 30px;
      padding: 4px 15px;
      @extend .button-text;
      margin-right: $spacing_3;
    }

    .sign-up {
      flex: 1;
      height: 30px;
      padding: 4px 15px;
      @extend .button-filled;
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

.el-collapse {
  padding: 16px 0;
  .tab-title {
    margin-right: 10px;
    display: flex;
    align-items: center;
    padding: 17.7px 16px;
    padding-right: 20px;
    .icon {
      margin-right: 10px;
    }
  }

  .el-collapse-item__header {
    padding: 24px 16px;
    background: none;
    @include font('Body2-Med', #fff);
    border: none;
  }

  .el-collapse-item {
    .active {
      display: none;
    }
    .no-active {
      display: block;
    }
    &.is-active {
      .el-collapse-item__header {
        background: $color_gray_90;
        .no-active {
          display: none;
        }
        .active {
          display: block;
        }
      }
    }
  }
}

.el-collapse-item__content {
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

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.drop-down-item {
  color: #fff;
  .item-text {
    padding: 16px 48px;
  }

  &.active {
    background-color: $color_gray_90;
  }
}
</style>
