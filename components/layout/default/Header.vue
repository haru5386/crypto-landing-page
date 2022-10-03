<template>
  <div
    class="nav"
  >
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
      <!-- 選單 -->
      <div
        class="icon burger"
        @click="openMainDrawer = true"
      >
        <img src="@/assets/images/menu.svg">
      </div>
      <!-- 語言 -->
      <div class="icon member-center">
        <div class="member-centre-title">
          語言
          <i
            class="el-icon-arrow-down"
          />
        </div>
        <div class="member-drop">
          <div
            v-for="item in languages"
            :key="item.iso"
            class="member-centre-item"
          >
            <div class="item-text">
              {{ item.name }}
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
        // .UserMenu {
        //     display: flex;
        //     position: relative;
        //     z-index: 100;
        //     padding: 0 20px 0 20px;
        //     .userModel {
        //         width: 200px;
        //         padding: 10px;
        //         overflow: hidden;
        //         position: absolute;
        //         background-color: $color_gray_80;
        //         .item {
        //             height: 50px;
        //             font-size: 14px;
        //             .black2 {
        //                 display: inline-block;
        //             }

        //             .blue2 {
        //                 display: none;
        //             }
        //         }
        //     }
        //     .white {
        //         display: inline-block;
        //     }
        //     .blue {
        //         display: none;
        //     }
        // }
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
            margin-left: $spacing_3;
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
.member-center {
  position: relative;
  &:hover {
    .member-drop {
      box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.25);
      padding-bottom: 10px;
      transition-delay: 0s;
      opacity: 1;
      height: 350px;
    }
  }
  .member-drop {
    opacity: 0;
    height: 0;
    transition: all linear .2s;
    transition-delay: 1s;
    overflow: hidden;
    position: absolute;
    border-radius: 8px;
    top: 64px;
    right: 0;
    width: 220px;
    background-color: $color_gray_80;
    .member-centre-title {
      padding: 16px;
    }
    .member-centre-item {
      height: 56px;
      padding: 0 16px;
      display: flex;
      justify-content: content;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: $color_gray_90;
        .normal-icon {
          display: none;
        }
        .active-icon {
          display: block;
        }
      }
      &.active {
        background-color: $color_gray_90;
        .normal-icon {
          display: none;
        }
        .active-icon {
          display: block;
        }
      }
      img {
        width: 19px;
        height: 19px;
        &.active-icon {
          display: none;
        }
        &.active {
          .normal-icon {
            display: none;
          }
          .active-icon {
            display: block;
          }
        }
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
    .line {
      height: 1px;
      border-bottom: 1px solid $color_gray_60;
      margin: 0 16px;
    }
  }
}
.member-center-mobile {
  display: none !important;
}
</style>
