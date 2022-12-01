
<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const email = ref<string>('')
const runtimeConfig = useRuntimeConfig()
const env = { ...runtimeConfig.public }
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
      block1Scroll()
    }
  })
}
// Earth 進入動畫
function animatedEarthIn () {
  gsap.timeline().fromTo('.animation-group', {
    duration: 1,
    ease: 'circ.out',
    y: -100,
    opacity: 0
  }, {
    duration: 1,
    ease: 'circ.out',
    y: 0,
    opacity: 1
  }).fromTo('.video-earth', {
    duration: 1,
    ease: 'circ.out',
    y: 100,
    opacity: 0,
    delay: 0.2
  }, {
    duration: 1,
    ease: 'circ.out',
    y: 0,
    opacity: 1,
    delay: 0.2
  }, '<')
}
// scroll block1 觸發
function block1Scroll () {
  ScrollTrigger.create({
    // 以box2作為觸發時機
    trigger: '#block1',
    markers: false,

    // 向下滾動進入start點時觸發callback
    onEnter: function () {
      animatedEarthIn()
    },

    // 向下滾動超過end點時觸發callback
    onLeave: function () {
    },

    // 向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: function () {
      animatedEarthIn()
    }

  })
}

const signUp = () => {
  window.location.href = `${env.BASE_URL}/register?email=${email.value}`
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
    id="block1"
    class="block"
  >
    <div class="video-earth">
      <video
        autoplay
        muted
        loop
        class="video-earth-video"
      >
        <source
          src="../assets/video/globe-animation.mp4"
          type="video/mp4"
        >
      </video>
    </div>
    <div class="container">
      <div class="animation-group">
        <h2 class="des1">
          {{ $t('block1-des1') }}
        </h2>
        <h1>{{ $t('block1-title') }}</h1>
        <h2 class="des2">
          {{ $t('block1-des2') }}
        </h2>
        <div class="signUp">
          <input
            v-model="email"
            name="email"
            type="text"
            placeholder="YourEmail@example.com"
          >
          <div
            class="signUpBtn"
            @click="signUp()"
          >
            {{ $t('block1-content') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
#block1 {
  background-color: #000;
  color: $color_gray_White;
  text-align: center;
  position: relative;
  z-index: 0;
  min-height: 1000px;
  @include pad {
    min-height: auto;
    height: 1200px;
  }
  @include mobile {
    min-height: 900px;
    height: 100vh;
  }
  .video-earth {
    position: absolute;
    width: 100%;
    max-width: 1366px;
    height: 150%;
    min-height: 1027px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    opacity: 0;
    top: -350px;
    @include md_pc {
      top: -350px;
    }
    @include pad {
      width: 100%;
      max-width: 1624px;
      height: 100%;
      top:0;
      bottom: 0;
    }
    @include mobile {
      width: 546px;
      max-width: 546px;
      top: 140px
    }
  }
  video{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 30%;
    left:0;
    object-fit: cover;
    z-index: -1;
    @include pad {
      top:20%;
    }
    @include mobile {
      width: 100%;
      height: auto;
    }
}
  .animation-group {
    opacity: 0;
  }
  .des1 {
    margin-top: 150px;
    font-size: 38px;
    font-weight: 600;
    text-transform:uppercase;
    @include pad {
      font-size: 25px;
    }
    @include mobile {
      font-size: 20x;
      margin-top: 57px;

    }
  }
  h1 {
    margin-top: 22px;
    font-size: 65px;
    font-weight: 400;
    text-transform:uppercase;
    @include pad {
      font-size: 43px;
    }
    @include mobile {
      margin-top: 20px;
      font-size:37px;
    }
  }
  .des2 {
    margin-top: 22px;
    font-size: 38px;
    font-weight: 400;
    @include pad {
      font-size: 25px;
    }
    @include mobile {
      margin-top: 20px;
      font-size: 20px;
    }
  }
  .signUp {
    height: 52px;
    width: 513px;
    margin: 0 auto;
    margin-top: 54px;
    max-width: 514px;
    display: flex;
    border: 1px solid $color_identity_Primary;
    border-radius:  26px;
    background-color: $color_gray_Black;
    font-size: 20px;
    z-index: 10;
    @include pad {
      height: 46px;
      font-size: 15px;
      margin-top: 30px;
      width: 378px;
    }
    @include mobile {
      font-size: 10px;
      width: 311px;
    }

    input {
      box-sizing: border-box;
      display: inline-block;
      font-size: 20px;
      font-weight: 500;
      padding:0 20px;
      border-radius:  26px 0 0 26px;
      width: 326px;
      height: 50px;
      @include pad {
        font-size: 13px;
        padding:0 20px 0 20px;
        height: 44px;
        width: 232px;
      }
      @include mobile {
        font-size: 10px;
        width: 197px;
      }

    }
    .signUpBtn {
      display: inline-block;
      border-radius:  0 26px 26px 0;
      font-weight: bold;
      font-stretch: normal;
      line-height: 52px;
      text-transform:uppercase;
      color: $color_identity_Primary;
      background-color: $color_gray_Black;
      flex:4;
      cursor: pointer;
      &:hover {
        background-color: $color_identity_Primary;
        color: $color_gray_Black;
      }
      @include pad {
        line-height: 46px;
      }
      @include mobile {
        line-height: 46px;
      }
    }
  }
}

</style>
