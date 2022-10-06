<template>
  <div class="nav">
    <div class="nav_left">
      <img
        src="@/assets/images/logo.png"
        @click="$router.push({ path: '/' })"
      >
      <div class="tabs">
        <div
          v-for="(item, index) in tabs"
          :key="index"
          class="tab_item"
          @click="$router.push({ path: item.path })"
        >
          {{ item.title }}
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
          <img src="@/assets/images/menu.svg">
        </div>

        <div
          v-if="!isLogin"
          class="login-buttons"
        >
          <button
            class="login"
          >
            登入
          </button>
          <!-- 註冊 -->
          <button
            class="sign-up"
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
                v-for="item in languages"
                :key="item.iso"
                class="drop-down-item"
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
                v-for="item in languages"
                :key="item.iso"
                class="drop-down-item"
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
              <img
                src="@/assets/images/icons/account.svg"
              >
            </div>
            <div class="drop-down">
              個人中心
            </div>
          </div>

          <!-- 通知 -->
          <div class="icon drop-down-menu">
            <div class="drop-down-title">
              <img
                src="@/assets/images/icons/bell.svg"
              >
            </div>
            <div class="drop-down">
              通知
            </div>
          </div>
        </div>
        <!-- 下載 -->
        <div class="icon drop-down-menu">
          <div class="drop-down-title">
            <img
              src="@/assets/images/icons/download.svg"
            >
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
              v-for="item in languages"
              :key="item.iso"
              class="drop-down-item"
            >
              <div class="item-text">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const openMainDrawer = ref(false)

const tabs = [
  {
    name: 'index',
    title: '幣幣交易',
    path: '/'
  },
  {
    name: 'market',
    title: 'C2C交易',
    path: '/market'
  },
  {
    name: 'box',
    title: '買幣',
    path: '/box'
  },
  {
    name: 'auction',
    title: 'ETF',
    path: '/auction'
  }
]

const languages = [
  {
    name: 'English',
    iso: 'en'
  },
  {
    name: '简体中文',
    iso: 'zh'
  },
  {
    name: 'Tiếng Việt',
    iso: 'vi'
  },
  {
    name: '日本語',
    iso: 'ja'
  },
  {
    name: '한국어',
    iso: 'ko'
  }
]

const isLogin = ref(true)

</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

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
  .nav_left {
    display: flex;
    img {
      margin-right: 25px;
    }
    .tabs {
      display: flex;
      .tab_item {
        @include font("Body2-Med", #fff);
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
    @include font("Body2-Med", #fff);
    display: flex;
    align-items: center;
    // 登出狀態顯示
    .login-buttons {
      display: flex;
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
      @include font("Cap1-Reg", #fff);
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
        @include font("Body2-Med", #fff);
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
}

.pad {
  display: none;
}

@include pad {
  .pc {
    display: none;
  }
}
</style>
