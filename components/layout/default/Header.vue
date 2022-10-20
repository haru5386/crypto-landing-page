<script setup lang="ts">
import i18n from '@/utils/i18n'
import { availableLocales } from '@/utils/lang'
import { HeaderInfo } from '@/types/interface/base.interface'
import { getHeadAndFooterApi } from '@/api/base'

// env data
const runtimeConfig = useRuntimeConfig()
const env = { ...runtimeConfig.public }

const route = useRoute()
const localeSetting = useState<string>('locale.setting')

// data
const openMainDrawer = ref(false)
const isLogin = ref(false)

// tabs
const { t } = i18n.global
// 交易 tabs
const headTabs: HeaderInfo[] = reactive([
  // {
  //   text: t('行情'),
  //   link: `${env.BASE_URL}/market`,
  //   target: ''
  // },
  {
    text: t('幣幣交易'),
    link: `${env.BASE_URL}/trade`,
    target: ''
  },
  {
    text: t('法幣交易'),
    link: `https://otc.${env.DOMAIN_NAME}`,
    target: ''
  }
  // {
  //   text: t('杠桿交易'),
  //   link: `${env.BASE_URL}/margin`,
  //   target: ''
  // }
])

// tab 導頁
const goPath = (link: string) => {
  window.location.href = link
}

const goLogin = () => {
  window.location.href = `${env.BASE_URL}/login`
}

const goSignUp = () => {
  window.location.href = `${env.BASE_URL}/register`
}

/*
 * 語言相關
 */

// 更新語言
const changeLang = (lang: string) => {
  localeSetting.value = lang
}

// 取得 header 呈現資訊
const data = await getHeadAndFooterApi({ lang: route.params.lang })
headTabs.push(...JSON.parse(data.data.value.data.header))
</script>

<template>
  <div class="nav">
    <div class="nav_left">
      <!-- LOGO -->
      <img
        src="@/assets/images/logo.png"
        @click="$router.push({ path: '/' })"
      >
      <div class="pc">
        <div class="tabs">
          <div
            v-for="(item, index) in headTabs"
            :key="index"
            class="tab_item"
            @click="goPath(item.link)"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="nav_right">
      <div class="pc">
        <!-- 選單 -->
        <div
          class="icon burger"
          @click="openMainDrawer = true"
        >
          <!-- <img src="@/assets/images/menu.svg"> -->
        </div>

        <div
          v-if="!isLogin"
          class="login-buttons"
        >
          <button
            class="login"
            @click="goLogin"
          >
            登入
          </button>
          <!-- 註冊 -->
          <button
            class="sign-up"
            @click="goSignUp"
          >
            註冊
          </button>
        </div>

        <div
          v-if="isLogin"
          style="display:flex; height: 100%;"
          class="pc"
        >
          <!-- 資產 -->
          <div class="icon drop-down-menu">
            <div class="drop-down-title">
              資產
              <img
                style="margin-left:5px;"
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
          </div>

          <!-- 訂單 -->
          <div class="icon drop-down-menu">
            <div class="drop-down-title">
              訂單
              <img
                style="margin-left:5px;"
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
          </div>

          <!-- 個人中心 -->
          <div class="icon drop-down-menu">
            <div class="drop-down-title">
              <img src="@/assets/images/icons/account.svg">
            </div>
            <div class="drop-down">
              個人中心
            </div>
          </div>

          <!-- 通知 -->
          <div class="icon drop-down-menu">
            <div class="drop-down-title">
              <img src="@/assets/images/icons/bell.svg">
            </div>
            <div class="drop-down">
              通知
            </div>
          </div>
        </div>
        <!-- 下載 -->
        <div class="icon drop-down-menu">
          <div class="drop-down-title">
            <img src="@/assets/images/icons/download.svg">
          </div>
          <div class="drop-down">
            downloads
          </div>
        </div>

        <!-- 語言 -->
        <div class="icon drop-down-menu">
          <div class="drop-down-title">
            語言
            <img
              style="margin-left:5px;"
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
      <div class="pad">
        <div
          v-if="isLogin"
          style="display:flex;"
        >
          <div class="icon">
            <img
              class="menu"
              src="@/assets/images/icons/account.svg"
            >
          </div>
          <!-- 通知 -->
          <div class="icon drop-down-menu">
            <div class="drop-down-title">
              <img src="@/assets/images/icons/bell.svg">
            </div>
            <div class="drop-down">
              通知
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
            登入
          </button>
          <!-- 註冊 -->
          <button
            class="sign-up"
            @click="goSignUp"
          >
            註冊
          </button>
        </div>
        <div class="icon">
          <img
            class="menu"
            src="@/assets/images/icons/menu.svg"
            @click="$router.push({ path: '/' })"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.nav {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba($color_gray_80, 0.5);
  backdrop-filter: blur(100px);
  padding: 0 $spacing_4 0 $spacing_4;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 1000;
  @include pad {
    padding: 0 $spacing_2 0 $spacing_2;
  }
  .nav_left {
    display: flex;
    align-items: center;
    img {
      margin-right: 25px;
    }
    .tabs {
      display: flex;
      .tab_item {
        @include font('Body2-Med', #fff);
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-right: $spacing_3;
        &.active {
          color: $color_identity_Primary;
        }
      }
    }
  }
  .nav_right {
    height: 100%;
    @include font('Body2-Med', #fff);
    display: flex;
    align-items: center;
    // 登出狀態顯示
    .login-buttons {
      display: flex;
      align-items: center;
      margin-right: 15px;
      .login {
        height: 30px;
        padding: 4px 15px;
        @extend .button-text;
        margin-right: $spacing_3;
      }
      .sign-up {
        height: 30px;
        padding: 4px 15px;
        @extend .button-filled;
      }
    }

    // 登入狀態顯示
    .login-methods {
      display: flex;
      height: 100%;
    }

    .icon {
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: $spacing_2;
      @include pad {
        margin-left: $spacing_2-5;
      }
      cursor: pointer;
      &.burger {
        display: none;
      }
    }

    // 切換語言 & 幣種
    .EnglishUSD {
      display: flex;
      height: 100%;
      margin-left: 26px;
      align-items: center;
      cursor: pointer;
      @include font('Cap1-Reg', #fff);
    }
  }
}

// 個人中心
.drop-down-menu {
  position: relative;
  .drop-down-title {
    padding: 8px;
    height: 24px;
    display: flex;
    align-items: center;
  }
  &:hover {
    .drop-down {
      transition-delay: 0s;
      opacity: 1;
      height: auto;
    }
  }
  .drop-down {
    opacity: 0;
    height: 0;
    transition: all linear 0.2s;
    transition-delay: 1s;
    overflow: hidden;
    position: absolute;
    border-radius: 8px;
    top: 64px;
    right: 0;
    width: 200px;
    background-color: $color_gray_80;

    .drop-down-item {
      height: 50px;
      padding: 0 10px;
      display: flex;
      justify-content: content;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: $color_gray_90;
      }
      &.active {
        background-color: $color_gray_90;
      }
      .item-text {
        flex: 1;
        height: 56px;
        margin-left: 11px;
        display: flex;
        align-items: center;
        @include font('Body2-Med', #fff);
      }
    }
  }
}
.drop-down-menu-mobile {
  display: none !important;
}

// RWD Setting
.pc {
  display: flex;
  height: 100%;
}

.pad {
  display: none;
}

@include pad {
  .pc {
    display: none;
  }
  .pad {
    display: flex;
    height: 100%;
  }
}
</style>
