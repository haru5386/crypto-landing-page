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
        <!-- 帳戶狀態 -->
        <div
          class="account"
          @click="goPath(`${localeSetting}/personal/userManagement`)"
        >
          <div class="avatar">
            <img
              src="@/assets/images/user_avatar.png"
              alt="avatar"
            >
          </div>
          <div class="info">
            <div class="email">
              {{ USERDATA?.email }}
            </div>
            <div class="status">
              <div class="id">
                ID: {{ USERDATA?.id }}
              </div>
              <div
                v-if="authLevel === 3"
                class="kyc_verify"
              >
                <img
                  src="@/assets/images/icons/nav_varified.svg"
                  alt=""
                >
                {{ t("通過驗證") }}
              </div>
              <div
                v-else-if="authLevel === 0"
                class="kyc_verify"
              >
                <img
                  src="@/assets/images/icons/nav_unvarified.svg"
                  alt=""
                >
                {{ t("審核中") }}
              </div>
              <div
                v-else
                class="kyc_unverify"
              >
                <img
                  src="@/assets/images/icons/nav_unvarified.svg"
                  alt=""
                >
                {{ t("未通過驗證") }}
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 24px" />
        <div v-if="isLogin">
          <el-collapse accordion>
            <!-- 個人設定 -->
            <el-collapse-item>
              <template #title>
                <div class="tab-title">
                  <img
                    class="icon no-active"
                    src="@/assets/images/icons/nav_security.svg"
                    alt="assets"
                  >
                  <img
                    class="icon active"
                    src="@/assets/images/icons/nav_security_active.svg"
                    alt="assets"
                  >
                  {{ $t("安全中心") }}
                </div>
              </template>
              <div>
                <div
                  v-for="(item, index) in assetsList"
                  :key="index"
                  class="drop-down-item"
                  @click="goPath(item.link)"
                >
                  <div class="item-text">
                    {{ item.title }}
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <!-- menu -->
        <div
          v-for="(value, key) in securityList"
          :key="key"
          class="collapse-tab-item"
          @click="goHref(value.link)"
        >
          <div class="tab-title">
            <img
              class="icon"
              :src="value.icon"
              :alt="value.activeId"
            >
            {{ value.text }}
          </div>
        </div>
        <div class="line" />
        <!-- 登出 -->
        <div
          v-if="isLogin"
          class="collapse-tab-item"
        >
          <div
            class="tab-title"
            @click="LOGOUT"
          >
            <img
              class="icon"
              src="@/assets/images/icons/signout.svg"
              alt="logout"
            >
            {{ t('退出') }}
          </div>
        </div>
      </div>
    </el-drawer>
  </ClientOnly>
</template>
<script lang="ts" setup>
import { ElDrawer, ElIcon, ElCollapse, ElCollapseItem } from 'element-plus'
import { defineProps } from 'vue'
import { Close } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import Kyc from '@/assets/images/icons/nav_kyc.svg'
import Broker from '@/assets/images/icons/nav_broker.svg'
import Api from '@/assets/images/icons/nav_api.svg'

import { useUserStore } from '~~/stores/user'
const localeSetting = useState<string>('locale.setting')
const { t } = useLang()
// stores
const UserStore = useUserStore()
const { ISLOGIN, USERDATA } = storeToRefs(UserStore)

// lanList
// const availableLocales = await getAvailableLocales()
// data
const isLogin = computed(() => {
  return ISLOGIN.value
})

// v-model setting
const emit = defineEmits(['update'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  authLevel: {
    type: Number,
    default: 3
  }
})
const assetsList = reactive([
  { title: t('設置'), link: '/personal/userManagement/settings/settings' },
  { title: t('登入歷史'), link: '/personal/userManagement/login-history' },
  { title: t('設定歷史'), link: '/personal/userManagement/setting-history' }
])
const securityList = reactive([
  {
    key: 'kyc',
    link: '/personal/idAuth',
    text: t('Kyc驗證'),
    activeId: t('Kyc驗證'),
    icon: Kyc
  },
  {
    key: 'api',
    link: '/personal/apiManagement',
    text: t('Api管理'),
    activeId: t('Api管理'),
    icon: Api
  },
  {
    key: 'broker',
    link: '/personal/exBroker',
    text: t('現貨經紀人'),
    activeId: t('現貨經紀人'),
    icon: Broker
  }
])
const isOpen = computed({
  get: () => props.modelValue,
  set: value => emit('update', value)
})

const goPath = (link: string) => {
  window.location.href = link
}
// 跳轉連結
const goHref = (link: string, target?: string) => {
  if (target && target === 'black') {
    window.open(link)
  } else {
    window.location.href = link
  }
}

// 登出
const LOGOUT = () => {
  isOpen.value = false
  UserStore.LOGOUT()
}

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
    padding: 24px;
    padding-top: 72px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .email {
      @include font("Heading3", #fff);
    }
    .avatar {
      margin-right: 10px;
    }

    .status {
      margin-top: 8px;
      display: flex;
      align-items: center;
      @include font("Body1-Med", $color_gray_60);
      .id {
        margin-right: 12px;
      }
      .kyc_verify {
        @include font("Cap1-Reg", $color_identity_Primary);
        display: flex;
        align-items: center;
        padding: 4px;
        border-radius: 4px;
        border: 0.5px solid $color_identity_Primary;
      }
      .kyc_unverify {
        @include font("Cap1-Reg", $color_gray_60);
        display: flex;
        align-items: center;
        padding: 4px;
        border-radius: 4px;
        border: 0.5px solid $color_gray_60;
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

.collapse-tab-item {
  cursor: pointer;
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  .tab-title {
    @include font('Body2-Med', #fff);
    margin-right: 10px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
}
.icon {
      margin-right: 10px;
      width: 20px;
      height: 20px;
  }

.el-collapse {
  .el-collapse-item__header {
    padding: 24px 16px;
    background: none;
    @include font('Body2-Med', #fff);
    border: none;
  }

  .el-collapse-item {
    --el-collapse-header-height: 56px;
    .tab-title {
      margin-right: 10px;
      display: flex;
      align-items: center;
      padding: 17.7px 0;
      padding-right: 20px;
      .icon {
        margin-right: 16px;
      }
    }
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

.el-collapse-item__wrap {
  background: none;
  border: none;
}

.line {
  width: 100%;
  border-top: 1px solid $color_gray_60;
  margin: 8px 0;
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

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.drop-down-item {
  color: #fff;
  .item-text {
    flex: 1;
    height: 37px;
    display: flex;
    align-items: center;
    padding: 0 48px;
    height: 37px;
  }

  &.active {
    background-color: $color_gray_90;
  }
}
</style>
