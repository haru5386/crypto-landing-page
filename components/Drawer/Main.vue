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
        <!-- 登入按鈕 -->
        <div
          v-if="!isLogin"
          class="login-buttons"
        >
          <button
            class="login"
            @click="goLogin"
          >
            {{ $t('登錄') }}
          </button>
          <!-- 註冊 -->
          <button
            class="sign-up"
            @click="goSignUp"
          >
            {{ $t('註冊') }}
          </button>
        </div>
        <!-- 帳戶狀態 -->
        <div
          v-else
          class="account"
          @click="goPath(`${localeSetting}/personal/userManagement`)"
        >
          <div class="email">
            {{ USERDATA?.email }}
          </div>
          <div class="status">
            {{ t('帳戶狀態') }} : {{ accountStatusText }}
          </div>
        </div>
        <div style="margin-top: 24px" />
        <div v-if="isLogin">
          <el-collapse accordion>
            <!-- 資產 -->
            <el-collapse-item name="1">
              <template #title>
                <div class="tab-title">
                  <img
                    class="icon no-active"
                    src="../../assets/images/icons/balance.svg"
                    alt="assets"
                  >
                  <img
                    class="icon active"
                    src="../../assets/images/icons/balance-active.svg"
                    alt="assets"
                  >
                  {{ $t('資產') }}
                </div>
              </template>
              <div>
                <div
                  v-for="(item, index) in props.assetsList"
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
            <!-- 訂單 -->
            <el-collapse-item name="2">
              <template #title>
                <div class="tab-title">
                  <img
                    class="icon no-active"
                    src="../../assets/images/icons/order.svg"
                    alt="order"
                    style="padding: 0 3px;"
                  >
                  <img
                    class="icon active"
                    src="../../assets/images/icons/order-active.svg"
                    alt="order"
                    style="padding: 0 3px;"
                  >
                  {{ $t('訂單') }}
                </div>
              </template>
              <div>
                <div
                  v-for="(item, index) in props.orderList"
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
          <div class="line" />
        </div>
        <!-- menu -->
        <template v-for="(value, key) in headerList">
          <div
            v-if="value?.isOpen"
            :key="key"
            class="collapse-tab-item"
            @click="goHref(value.link,value.target)"
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
        </template>
        <div class="line" />
        <!-- 語言設定 -->
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
                {{ currentLangName }}
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
        <!-- 登出 -->
        <div
          v-if="isLogin"
          class="collapse-tab-item"
        >
          <div
            class="tab-title"
            @click="UserStore.LOGOUT"
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
import { defineProps, PropType } from 'vue'
import { Close } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import AGETIcon from '../../assets/images/icons/aget.svg'
import marketIcon from '../../assets/images/icons/aget.svg'
import exTradeIcon from '../../assets/images/icons/exTrade.svg'
import otcTradeIcon from '../../assets/images/icons/otcTrade.svg'
import marginTradeIcon from '../../assets/images/icons/aget.svg'
import coTradeIcon from '../../assets/images/icons/aget.svg'
import exPvpIcon from '../../assets/images/icons/aget.svg'
import etfIcon from '../../assets/images/icons/etf.svg'
import loanIcon from '../../assets/images/icons/aget.svg'
import earnIcon from '../../assets/images/icons/aget.svg'
import NFTIcon from '../../assets/images/icons/aget.svg'
import buyCryptoIcon from '../../assets/images/icons/buyCrypto.svg'

import { HeaderData, LinkList } from '@/types/interface/base.interface'
import { useUserStore } from '~~/stores/user'
import { availableLocales } from '@/utils/lang'
import { getURLs } from '~~/utils/urls'
const localeSetting = useState<string>('locale.setting')

// stores
const UserStore = useUserStore()
const { ISLOGIN, USERDATA } = storeToRefs(UserStore)

// lanList
// const availableLocales = await getAvailableLocales()
// data
const isLogin = computed(() => {
  return ISLOGIN.value
})
const changeLang = (lang: string) => {
  window.location.href = `/${lang}`
}

// v-model setting
const emit = defineEmits(['update'])
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  header: {
    type: Object,
    default: () => {
      // return {
      //   AGET: {
      //     activeId: '',
      //     text: '',
      //     link: '',
      //     target: '',
      //     isOpen: '',
      //     icon: ''
      //   },
      //   NFT: {
      //     activeId: '',
      //     text: '',
      //     link: '',
      //     target: '',
      //     isOpen: '',
      //     icon: ''
      //   },
      //   buyCrypto: {
      //     activeId: '',
      //     text: '',
      //     link: '',
      //     target: '',
      //     isOpen: '',
      //     icon: ''
      //   },
      //   coTrade: {
      //     activeId: '',
      //     text: '',
      //     link: '',
      //     target: '',
      //     isOpen: '',
      //     icon: ''
      //   },
      //   earn: {
      //     activeId: '',
      //     text: '',
      //     link: '',
      //     target: '',
      //     isOpen: '',
      //     icon: ''
      //   },
      //   etf: {
      //     activeId: '',
      //     text: '',
      //     link: '',
      //     target: '',
      //     isOpen: '',
      //     icon: ''
      //   },
      //   exPvp: {
      //     activeId: '',
      //     text: '',
      //     link: '',
      //     target: '',
      //     isOpen: '',
      //     icon: ''
      //   },
      //   exTrade: {
      //     activeId: '',
      //     text: '',
      //     link: '',
      //     target: '',
      //     isOpen: '',
      //     icon: ''
      //   },
      //   loan: {
      //     activeId: '',
      //     text: '',
      //     link: '',
      //     target: '',
      //     isOpen: '',
      //     icon: ''
      //   },
      //   marginTrade: {
      //     activeId: '',
      //     text: '',
      //     link: '',
      //     target: '',
      //     isOpen: '',
      //     icon: ''
      //   },
      //   market: {
      //     activeId: '',
      //     text: '',
      //     link: '',
      //     target: '',
      //     isOpen: '',
      //     icon: ''
      //   },
      //   otcTrade: {
      //     activeId: '',
      //     text: '',
      //     link: '',
      //     target: '',
      //     isOpen: '',
      //     icon: ''
      //   }
      // }
    },
    required: true
  },
  assetsList: {
    type: Array as PropType<LinkList[]>,
    default: () => [],
    required: true
  },
  orderList: {
    type: Array as PropType<LinkList[]>,
    default: () => [],
    required: true
  }
})

const isOpen = computed({
  get: () => props.modelValue,
  set: value => emit('update', value)
})

const goLogin = () => {
  window.location.href = getURLs().login
}

const goSignUp = () => {
  window.location.href = getURLs().signUp
}
const goPath = (link: string) => {
  window.location.href = link
}
// 跳轉連結
const goHref = (link:string, target:string) => {
  if (target && target === 'black') {
    window.open(link)
  } else {
    window.location.href = link
  }
}

// 當前語言顯示
const currentLangName = computed(() => {
  let result = ''
  // 中文語系額外設定
  for (const key in availableLocales) {
    if (availableLocales[key].iso === localeSetting.value) {
      result = availableLocales[key].name
    }
  }
  return result || ''
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

// header list
const headerList = computed(() => {
  const headerObj:HeaderData = props.header
  headerObj.market.icon = marketIcon
  headerObj.exTrade.icon = exTradeIcon
  headerObj.otcTrade.icon = otcTradeIcon
  headerObj.marginTrade.icon = marginTradeIcon
  headerObj.coTrade.icon = coTradeIcon
  headerObj.exPvp.icon = exPvpIcon
  headerObj.etf.icon = etfIcon
  headerObj.loan.icon = loanIcon
  headerObj.earn.icon = earnIcon
  headerObj.NFT.icon = NFTIcon
  headerObj.buyCrypto.icon = buyCryptoIcon
  headerObj.AGET.icon = AGETIcon
  return headerObj
})
// 資產
const assetsUrls = reactive([
  {
    text: t('幣幣帳戶'),
    link: getURLs().assets.trade,
    target: '_BLANK'
  }
])

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
    .icon {
      margin-right: 16px;
    }
  }
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
