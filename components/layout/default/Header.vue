<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref, Ref, ComputedRef } from 'vue'
import { useUserStore } from '@/stores/user.js'
// import i18n from '@/utils/i18n'
import { availableLocales } from '@/utils/lang'
import { HeaderData, LinkList } from '@/types/interface/base.interface'
import { getHeadAndFooterApi } from '@/api/base'

import { getURLs } from '@/utils/urls'

// const route = useRoute()
const localeSetting = useState<string>('locale.setting')

// stores
const UserStore = useUserStore()
const { ISLOGIN, USERDATA, NOREADMSG, ISLOADING_USERDATA } =
  storeToRefs(UserStore)

// data
const isLogin = computed(() => {
  return ISLOGIN.value
})

// tabs
const { t } = useLang()

// kyc等級
const authLevel = computed(() => {
  return USERDATA.value?.authLevel
})

// header List
const header: Ref<HeaderData> = ref({})
// 資產List
const assetsList: ComputedRef<LinkList[]> = computed(() => {
  const arr = []
  // 幣幣帳戶
  if (header.value.exTrade?.showAsset) {
    arr.push({
      title: t('幣幣帳戶'),
      link: '/assets/exchangeAccount'
    })
  }
  // C2C帳戶
  if (header.value.otcTrade?.showAsset) {
    arr.push({
      title: t('C2C帳戶'),
      link: '/assets/otcAccount'
    })
  }
  // 合約帳戶
  if (header.value.coTrade?.showAsset) {
    const url = `${header.value.coTrade}/assets/coAccount`
    arr.push({
      title: t('合約帳戶'),
      link: url
    })
  }

  // 槓桿帳戶
  if (header.value.marginTrade?.showAsset) {
    arr.push({
      title: t('槓桿帳戶'),
      link: '/assets/leverageAccount'
    })
  }
  return arr
})
// 訂單List
const orderList = computed(() => {
  const arr = []
  // 幣幣訂單
  if (header.value.exTrade?.showOrder) {
    arr.push({
      title: t('幣幣訂單'),
      link: '/order/exchangeOrder'
    })
  }
  // C2C訂單
  if (header.value.otcTrade?.showOrder) {
    arr.push({
      title: t('C2C訂單'),
      link: '/order/otcOrder'
    })
  }
  // 合約訂單
  if (header.value.coTrade?.showOrder) {
    const url = `${header.value.coTrade.link}/assets/coOrder`
    arr.push({
      title: t('合約訂單'),
      link: url
    })
  }
  // 槓桿訂單
  if (header.value.marginTrade?.showOrder) {
    arr.push({
      title: t('槓桿訂單'),
      link: '/order/leverageOrder'
    })
  }
  return arr
})

// tab 導頁
const goPath = (link: string) => {
  window.location.href = link
}

const goLogin = () => {
  window.location.href = getURLs().login
}

const goSignUp = () => {
  window.location.href = getURLs().signUp
}

const isOpenDrawerMain = ref(false)
const toggleOpenDrawerMain = (value: boolean) => {
  isOpenDrawerMain.value = value
}

const isOpenDrawerNotification = ref(false)
const toggleOpenDrawerNotification = (value: boolean) => {
  isOpenDrawerNotification.value = value
}

const isOpenDrawerPersonal = ref(false)
const toggleOpenDrawerPersonal = (value: boolean) => {
  isOpenDrawerPersonal.value = value
}

// 取得header
const getHeaderFooterData = async () => {
  const data = await getHeadAndFooterApi()
  const headerData = JSON.parse(data.data.header)
  header.value = headerData
}

// 跳轉連結
const goHref = (link: string, target: string) => {
  if (target && target === 'black') {
    window.open(link)
  } else {
    window.location.href = link
  }
}
/*
 * 語言相關
 */

// 更新語言
const changeLang = (lang: string) => {
  localeSetting.value = lang
  window.location.href = `/${lang}`
}

// 最後載入字體
const addStyle = (stylePath: string) => {
  const container = document.getElementsByTagName('head')[0]
  const addStyle = document.createElement('link')
  addStyle.rel = 'stylesheet'
  addStyle.type = 'text/css'
  addStyle.media = 'screen'
  addStyle.href = stylePath
  container.appendChild(addStyle)
}

// 等 USERDATA 拿到後載入字體
watch(ISLOADING_USERDATA, (newNum) => {
  if (!newNum) {
    addStyle('/public/font/font.css')
  }
})

onMounted(() => {
  getHeaderFooterData()
})
</script>

<template>
  <div class="nav">
    <div class="nav_left">
      <!-- LOGO -->
      <img
        alt="Ace Global Logo"
        src="@/assets/images/logo.svg"
        @click="$router.push({ path: '/' })"
      >
      <div class="pc">
        <div class="tabs">
          <template v-for="(value, key) in header">
            <div
              v-if="value?.isOpen"
              :key="key"
              class="tab_item"
              @click="goHref(value.link, value.target)"
            >
              {{ value.text }}
            </div>
          </template>
        </div>
      </div>
    </div>
    <div
      v-if="!ISLOADING_USERDATA"
      class="nav_right"
    >
      <div class="pc">
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

        <div
          v-if="isLogin"
          style="display: flex; height: 100%"
        >
          <!-- 資產 -->
          <div
            v-if="assetsList.length > 0"
            class="icon drop-down-menu"
          >
            <div class="drop-down-title">
              {{ $t('資產') }}
              <img
                class="no-active"
                style="margin-left: 5px"
                alt="drop-down"
                src="@/assets/images/icons/menu_down.svg"
              >
              <img
                class="active"
                style="margin-left: 5px"
                alt="drop-down"
                src="@/assets/images/icons/menu_down_active.svg"
              >
            </div>
            <div class="drop-down">
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
          </div>

          <!-- 訂單 -->
          <div
            v-if="orderList.length > 0"
            class="icon drop-down-menu"
          >
            <div class="drop-down-title">
              {{ $t('訂單') }}
              <img
                class="no-active"
                style="margin-left: 5px"
                alt="drop-down"
                src="@/assets/images/icons/menu_down.svg"
              >
              <img
                class="active"
                style="margin-left: 5px"
                alt="drop-down"
                src="@/assets/images/icons/menu_down_active.svg"
              >
            </div>
            <div class="drop-down">
              <div
                v-for="(item, index) in orderList"
                :key="index"
                class="drop-down-item"
                @click="goPath(item.link)"
              >
                <div class="item-text">
                  {{ item.title }}
                </div>
              </div>
            </div>
          </div>

          <!-- 個人中心 -->
          <div class="icon drop-down-menu">
            <div
              class="drop-down-title"
              @click="goPath(`${localeSetting}/personal/userManagement`)"
            >
              <img
                class="no-active"
                alt="account"
                src="@/assets/images/icons/account.svg"
              >
              <img
                class="active"
                alt="account"
                src="@/assets/images/icons/account_active.svg"
              >
            </div>
            <div class="drop-down">
              <div
                class="member-info"
                @click="goPath(`${localeSetting}/personal/userManagement`)"
              >
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
              <div
                class="drop-down-item"
                @click="UserStore.LOGOUT"
              >
                <div class="item-text">
                  <img
                    class="item-icon"
                    alt="logout"
                    src="@/assets/images/icons/signout.svg"
                  >
                  {{ t('退出') }}
                </div>
              </div>
            </div>
          </div>

          <!-- 通知 -->
          <div
            class="icon drop-down-menu"
            @click="goPath(`/${localeSetting}/mesage`)"
          >
            <div class="drop-down-title">
              <img
                class="no-active"
                alt="bell"
                src="@/assets/images/icons/bell.svg"
              >
              <img
                class="active"
                alt="bell"
                src="@/assets/images/icons/bell_active.svg"
              >
              <div
                v-if="
                  NOREADMSG?.noReadMsgCount && NOREADMSG?.noReadMsgCount > 0
                "
                class="has-notread"
              />
            </div>
            <div class="drop-down notice">
              <div
                v-for="item in NOREADMSG?.userMessageList"
                :key="item.id"
                class="drop-down-item"
              >
                <div class="new">
                  <div class="dot" />
                </div>
                <div class="message">
                  {{ item.messageContent }}
                </div>
              </div>
              <div class="more">
                {{ $t('查看更多') }}
              </div>
            </div>
          </div>
        </div>
        <!-- 下載 -->
        <!-- <div class="icon drop-down-menu">
          <div class="drop-down-title">
            <img src="@/assets/images/icons/download.svg">
          </div>
          <div class="drop-down">
            downloads
          </div>
        </div> -->

        <!-- 語言 -->
        <div class="icon drop-down-menu">
          <div class="drop-down-title">
            {{ $t('語言') }}
            <img
              class="no-active"
              style="margin-left: 5px"
              alt="drop-down"
              src="@/assets/images/icons/menu_down.svg"
            >
            <img
              class="active"
              style="margin-left: 5px"
              alt="drop-down"
              src="@/assets/images/icons/menu_down_active.svg"
            >
          </div>
          <div class="drop-down">
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
        </div>
      </div>
      <!-- pad版  -->
      <div class="pad">
        <div
          v-if="isLogin"
          style="display: flex"
        >
          <!-- 個人中心 -->
          <div
            class="icon drop-down-menu"
            @click="isOpenDrawerPersonal = !isOpenDrawerPersonal"
          >
            <div class="drop-down-title">
              <img
                src="@/assets/images/icons/account.svg"
                alt="bell"
              >
            </div>
          </div>
          <!-- 通知 -->
          <div
            class="icon drop-down-menu"
            @click="isOpenDrawerNotification = !isOpenDrawerNotification"
          >
            <div class="drop-down-title">
              <img
                src="@/assets/images/icons/bell.svg"
                alt="bell"
              >
              <div
                v-if="
                  NOREADMSG?.noReadMsgCount && NOREADMSG?.noReadMsgCount > 0
                "
                class="has-notread"
              />
            </div>
          </div>
        </div>
        <div
          v-else
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
        <div
          class="icon"
          @click="isOpenDrawerMain = !isOpenDrawerMain"
        >
          <img
            class="menu"
            alt="menu"
            src="@/assets/images/icons/menu.svg"
          >
        </div>
      </div>
    </div>
  </div>
  <!-- 主選單 -->
  <DrawerMain
    v-model="isOpenDrawerMain"
    :header="header"
    :assets-list="assetsList"
    :order-list="orderList"
    @update="toggleOpenDrawerMain"
  />
  <!-- 通知彈窗 -->
  <DrawerNotification
    v-if="isLogin"
    v-model="isOpenDrawerNotification"
    @update="toggleOpenDrawerNotification"
  />
  <DrawerPersonal
    v-model="isOpenDrawerPersonal"
    :authLevel="authLevel"
    @update="toggleOpenDrawerPersonal"
  />
</template>

<style lang="scss" scoped>
@import './scss/Header.scss';
</style>
