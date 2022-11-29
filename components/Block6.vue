<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// 引入 ScrollTrigger
const triggers = ScrollTrigger.getAll()
function gsapSet () {
  ScrollTrigger.matchMedia({
    '(min-width: 1200px)': () => {},
    '(min-width: 768px)': () => {},
    '(max-width: 768px)': () => {},
    all: () => {
      block6In()
      block6Out()
    }
  })
}

// block6 進入動畫
function block6In () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#block6',
        markers: false,
        start: 'top 100%',
        end: 'top 50%'
      }
    })
    .fromTo(
      '.block6-bg-bg',
      {
        ease: 'circ.out',
        y: 200
      },
      {
        duration: 0.5,
        ease: 'circ.out',
        y: 0
      }
    )
    .fromTo(
      '.block6-bg-eth',
      {
        ease: 'circ.out',
        opacity: 0
      },
      {
        duration: 0.5,
        opacity: 1
      }
    )
    .fromTo(
      '.block6-right',
      {
        ease: 'circ.out',
        y: 1000
      },
      {
        duration: 1.5,
        y: 0
      }
    )
    .fromTo(
      '.block6-right',
      {
        ease: 'circ.out',
        opacity: 0
      },
      {
        duration: 0.3,
        opacity: 1
      },
      '<'
    )
}

// block6 離開動畫
function block6Out () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#block7',
        markers: false,
        start: 'top 100%',
        end: 'top 50%',
        scrub: true
      }
    })
    .to('#block6 .container', {
      duration: 1,
      ease: 'easeIn',
      y: -180
    })
    .to(
      '.block6-bg-eth',
      {
        duration: 1,
        ease: 'easeIn',
        y: -160
      },
      '<'
    )
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
        class="block6-bg-eth"
        src="../assets/images/block6-img.svg"
        alt="背景"
      >
      <img
        class="block6-bg-bg"
        src="../assets/images/block6-bg.webp"
        alt="背景"
      >
    </div>
    <div class="container">
      <div class="block6-left">
        <h2 class="title">
          AGET
        </h2>
        <p class="des">
          {{ $t('block6-des1') }}<br>
          <br>
          {{ $t('block6-des2') }}
        </p>
        <a
          class="btn-detail"
          href="https://aget.aceglobal.io/"
          target="_blank"
          rel="noopener noreferrer"
        >{{ $t('block6-btn') }}
        </a>
      </div>
      <div class="block6-right">
        <div class="title">
          {{ $t('block6-right-title') }}
        </div>
        <h3>{{ $t('block6-right-des1') }}</h3>
        <p>{{ $t('block6-right-des2') }}</p>
        <h3>{{ $t('block6-right-des3') }}</h3>
        <p>500,000,000</p>
        <h3>{{ $t('block6-right-des4') }}</h3>
        <p>{{ $t('block6-right-des5') }}</p>
        <h3>{{ $t('block6-right-des6') }}</h3>
        <p>0xb7C3cBc6D630bdcd43b690c617A8D9ead73c66a4</p>
        <h3>{{ $t('block6-right-des7') }}</h3>
        <p>{{ $t('block6-right-des8') }}</p>
        <h3>{{ $t('block6-right-des9') }}</h3>
        <p>{{ $t('block6-right-des10') }}</p>
        <h3>{{ $t('block6-right-des11') }}</h3>
        <p>0.16 USDT</p>
        <h3>{{ $t('block6-right-des12') }}</h3>
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
    @include pad {
      left: -100px;
      bottom: -200px;
    }
    @include mobile {
      left: -420px;
      bottom: 100px;
    }
    .block6-bg-bg {
      width: 900px;
      margin: 0 auto;
    }
    .block6-bg-eth {
      z-index: 0;
      width: 300px;
      margin-bottom: -220px;
      opacity: 0;
      @include mobile {
        margin-bottom: -290px;
        // left: -50px;
      }
      @include mobile {
        margin-bottom: -230px;
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

    .block6-left {
      position: relative;
      padding-left: 100px;
      @include pad {
        padding-left: 20px;
      }
      @include mobile {
        padding: 0;
        width: 100%;
        margin-bottom: 50px;
      }

      .title {
        font-family: Barlow;
        font-size: 52px;
        font-weight: bold;
        line-height: 1.08;
        color: #fff;
        @include pad {
          font-size: 28px;
        }
      }
      .des {
        width: 350px;
        margin-top: 20px;
        font-family: Barlow;
        font-size: 20px;
        line-height: 1.6;
        color: #fff;
        @include pad {
          font-size: 16px;
        }
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
        @include pad {
          margin-top: 15px;
        }
      }
    }
    .block6-right {
      width: 256px;
      margin-right: 10%;
      @include pad {
        width: 256px;
        margin-right: 2%;
      }
      @include mobile {
        width: 187px;
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
        @include pad {
          font-size: 20px;
        }
      }

      p {
        font-family: Barlow;
        font-size: 20px;
        line-height: 1.6;
        color: #fff;
        word-break: break-all;
        @include pad {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
