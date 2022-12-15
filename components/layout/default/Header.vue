<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/user.js'
// import i18n from '@/utils/i18n'
import { availableLocales } from '@/utils/lang'
import { HeaderInfo } from '@/types/interface/base.interface'
// import { getHeadAndFooterApi } from '@/api/base'

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
// 交易 tabs
const headTabs: HeaderInfo[] = reactive([
  // {
  //   text: t('行情'),
  //   link: `${env.BASE_URL}/market`,
  //   target: ''
  // },
  // {
  //   text: t('幣幣交易'),
  //   link: `${env.BASE_URL}/trade`,
  //   target: ''
  // },
  // {
  //   text: t('法幣交易'),
  //   link: `https://otc${env.DOMAIN_NAME}`,
  //   target: ''
  // }
  // {
  //   text: t('杠桿交易'),
  //   link: `${env.BASE_URL}/margin`,
  //   target: ''
  // }
  {
    text: 'AGET',
    link: getURLs().AGET,
    target: '_BLANK'
  }
])
// 獲取語言
// const availableLocales = await getAvailableLocales()
const assetsUrls = reactive([
  {
    text: t('幣幣帳戶'),
    link: getURLs().assets.trade,
    target: '_BLANK'
  }
])

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

/*
 * 語言相關
 */

// 更新語言
const changeLang = (lang: string) => {
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
    addStyle('/font/font.css')
  }
})

// 取得 header 呈現資訊
// const data = await getHeadAndFooterApi({ lang: route.params.lang })
// headTabs.push(...JSON.parse(data.data.value.data.header))
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
          <a
            v-for="(item, index) in headTabs"
            :key="index"
            class="tab_item"
            :href="item.link"
            :target="item.target"
          >
            {{ item.text }}
          </a>
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
          <div class="icon drop-down-menu">
            <div class="drop-down-title">
              {{ $t('資產') }}
              <img
                alt="menu"
                style="margin-left: 5px"
                src="@/assets/images/icons/menu-down.svg"
              >
            </div>
            <div class="drop-down">
              <div
                v-for="(item, index) in assetsUrls"
                :key="index"
                class="drop-down-item"
                @click="goPath(item.link)"
              >
                <div class="item-text">
                  {{ item.text }}
                </div>
              </div>
            </div>
          </div>

          <!-- 訂單 -->
          <!-- <div class="icon drop-down-menu">
            <div class="drop-down-title">
              訂單
              <img
                style="margin-left: 5px"
                src="@/assets/images/icons/menu-down.svg"
              >
            </div>
            <div class="drop-down">
              <div
                v-for="item in availableLocales"
                :key="item.iso"
                :class="{ active: localeSetting === item.iso }"
                class="drop-down-item"
                @click="changeLang(item.iso)"
              >
                <div class="item-text">
                  {{ item.name }}
                </div>
              </div>
            </div>
          </div> -->

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
                src="@/assets/images/icons/account-active.svg"
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
                  {{ t('帳戶狀態') }} : {{ accountStatusText }}
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
                src="@/assets/images/icons/bell-active.svg"
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
              style="margin-left: 5px"
              alt="drop-down"
              src="@/assets/images/icons/menu-down.svg"
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
    @update="toggleOpenDrawerMain"
  />
  <!-- 通知彈窗 -->
  <DrawerNotification
    v-if="isLogin"
    v-model="isOpenDrawerNotification"
    @update="toggleOpenDrawerNotification"
  />
</template>

<style lang="scss" scoped>
@import './scss/Header.scss';
</style>
