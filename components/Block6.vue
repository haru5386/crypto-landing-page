<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// 引入 ScrollTrigger
const triggers = ScrollTrigger.getAll()
function gsapSet () {
  ScrollTrigger.matchMedia({
    '(min-width: 1200px)': () => {
    },
    '(min-width: 768px)': () => {
    },
    '(max-width: 768px)': () => {
    },
    all: () => {
    }
  })
}

onUnmounted(() => {
  triggers.forEach((trigger) => {
    trigger.kill()
  })
  ScrollTrigger.clearMatchMedia()
})

onMounted(() => {
  // 觸發動畫
  ScrollTrigger.refresh()
  gsapSet()
})
</script>
<template>
  <div
    id="block6"
    class="block"
  >
    <div class="block6-bg">
      <img
        class="eth"
        src="../assets/images/block6-img.svg"
        alt="背景"
      >
      <img
        class="bg"
        src="../assets/images/block6-bg.webp"
        alt="背景"
      >
    </div>
    <div class="container">
      <div class="left">
        <h2 class="title">
          AGET
        </h2>
        <p class="des">
          AGET (ACE Global Exchange Token) is the Token that poweres ACE Global
          Exchange Ecosystem. <br>

          AGET Holders can also benefits from various features such as referral
          bonus, broker system, staking and more.
        </p>
        <a
          class="btn-detail"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >More detail
        </a>
      </div>
      <div class="right">
        <div class="title">
          Specifications
        </div>
        <h3>Name</h3>
        <p>ACE Global Exchange Token (AGET)</p>
        <h3>Total Insurance</h3>
        <p>500,000,000</p>
        <h3>Protocol</h3>
        <p>Ethereum</p>
        <h3>Contract</h3>
        <p>0xb7C3cBc6D630bdcd43b690c617A8D9ead73c66a4</p>
        <h3>Token Category</h3>
        <p>Platform</p>
        <h3>Token Type</h3>
        <p>Functional Token</p>
        <h3>Private Sale Price</h3>
        <p>0.16 USDT</p>
        <h3>IEO Price</h3>
        <p>0.2 USDT</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/index.scss';
#block6 {
  color: $color_gray_White;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @include mobile {
    height: 1220px;
  }
  .block6-bg {
    z-index: 1;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    @include mobile {
      left: auto;
      right: -150px;
      bottom: -100px;
    }
    .bg {
      width: 1110px;
      margin: 0 auto;
    }
    .eth {
      z-index: 0;
      width: 337px;
      margin-bottom: -290px;
      @include mobile {
        margin-bottom: -290px;
        // left: -50px;
      }
    }
  }
  .container {
    width: 100%;
    position: absolute;
    margin: 0 auto;
    top: 0;
    z-index: 200;
    display: flex;
    justify-content: space-between;
    margin-top: 123px;
    @include mobile {
      flex-direction: column;
      align-items: flex-end;
    }

    .left {
      position: relative;
      padding-left: 100px;
      @include pad {
        padding-left: 20px;
      }
      @include mobile {
        padding: 0 23px;
        width: 100%;
        margin-bottom: 50px;
      }

      .title {
        font-family: Barlow;
        font-size: 52px;
        font-weight: bold;
        line-height: 1.08;
        color: #fff;
      }
      .des {
        width: 350px;
        margin-top: 20px;
        font-family: Barlow;
        font-size: 20px;
        line-height: 1.6;
        color: #fff;
        @include mobile {
          width: 100%;
        }
      }
      .btn-detail {
        width: 188px;
        height: 44px;
        @extend .button-outline;
        margin-top: 30px;
        border-color: $color_identity_Primary;
        color: $color_identity_Primary;
      }
    }
    .right {
      width: 256px;
      margin-right: 10%;
      @include pad {
        width: 187px;
        margin-right: 2%;
      }
      @include mobile {
        margin-right: 16px;
      }

      .title {
        opacity: 0.8;
        font-family: Barlow;
        font-size: 20px;
        line-height: 1.6;
        color: #fff;
      }

      h3 {
        font-family: Barlow;
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        margin-top: 20px;
        margin-bottom: 3px;
        @include mobile {
          font-size: 20px;
        }
      }

      p {
        font-family: Barlow;
        font-size: 20px;
        line-height: 1.6;
        color: #fff;
        word-break: break-all;
        @include mobile {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
