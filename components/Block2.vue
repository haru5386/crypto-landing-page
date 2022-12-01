<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// 引入 ScrollTrigger
const triggers = ScrollTrigger.getAll()
function gsapSet () {
  ScrollTrigger.matchMedia({
    '(min-width: 1200px)': () => {
      block2VideoOut()
      animatedEarthOut()
    },
    '(min-width: 768px)': () => {
      block2VideoOut()
    },
    '(max-width: 768px)': () => {
      block2VideoOutMobile()
      animatedEarthOut()
    },
    all: () => {}
  })
}

function animatedEarthOut () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#block2',
        markers: false,
        start: 'top 95%',
        end: 'top 30%',
        scrub: true
      }
    })
    .to('.video-earth-video', {
      duration: 1,
      ease: 'easeIn',
      y: -400
    })
    .to(
      '.animation-group',
      {
        duration: 1,
        ease: 'easeIn',
        y: -900
      },
      '<'
    )
}

// block2VideoMobile 離開動畫
function block2VideoOutMobile () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.block2-video',
        markers: false,
        start: 'top 100%',
        end: 'top 50%',
        scrub: true
      }
    })
    .to('.block2-video', {
      duration: 1,
      ease: 'easeIn',
      y: -200
    })
    .to(
      '.item1',
      {
        duration: 1,
        ease: 'easeIn',
        y: -100
      },
      '<'
    )
    .to(
      '.item2',
      {
        duration: 1,
        ease: 'easeIn',
        y: -100
      },
      '<'
    )
}

// block2Video 離開動畫
function block2VideoOut () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.block2-video',
        markers: false,
        start: 'top 90%',
        end: 'top 30%',
        scrub: true
      }
    })
    .to('.block2-video', {
      duration: 1,
      ease: 'easeIn',
      y: -300
    })
    .to(
      '.item1',
      {
        duration: 1,
        ease: 'easeIn',
        y: -200
      },
      '<'
    )
    .to(
      '.item2',
      {
        duration: 1,
        ease: 'easeIn',
        y: -200
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
  <div id="block2">
    <div class="container">
      <div class="section">
        <div class="item1">
          <h2 class="title">
            {{ $t('block2-title1') }}
          </h2>
          <p class="des">
            {{ $t('block2-des1') }}
          </p>
        </div>
        <div class="item2">
          <h2 class="title">
            {{ $t('block2-title2') }}
          </h2>
          <p class="des">
            {{ $t('block2-des2') }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="block2-video">
    <video
      autoplay
      muted
      loop
    >
      <source
        src="../assets/video/digitalmap.mp4"
        type="video/mp4"
      >
    </video>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.block2-video {
  width: 100vw;
  height: 20vh;
  z-index: 0;
  max-width: 1380px;
  @include pad {
    height: 10vh;
  }
  video {
    width: 100%;
    margin-left: 50vw;
    transform: translate(-50%);
    margin-top: -40%;
    z-index: -1;
    @include pad {
      width: 130%;
      margin-top: -40%;
    }
    @include mobile {
      width: 150%;
      margin-top: -20vh;
    }
  }
}
#block2 {
  z-index: 1;
  position: relative;
  overflow: hidden;
  min-height: 900px;
  height: 120vh;

  @include pad {
    height: 80vh;
    min-height: 700px;
  }
}
.container {
  max-width: 900px;
  padding: 0;
  margin-top: 200px;
  @include pad {
    padding: 0 32px;
  }

  @include mobile {
    padding: 0 22px;
  }

  .section {
    padding-top: 176px;
    display: flex;
    gap: 16px;
    flex-direction: row;
    @include pad {
      gap: 26px;
    }
    // mobile
    @include mobile {
      flex-direction: column;
      padding-top: 44px;
      gap: 15px;
    }
    .item1 {
      width: 256px;
      @include mobile {
        width: 100%;
      }
      .title {
        font-family: Barlow;
        font-size: 28px;
        font-weight: 600;
        color: #fff;
      }
      .des {
        margin-top: 12px;
        font-family: Barlow;
        font-size: 20px;
        line-height: 1.6;
        color: #fff;
        @include pad {
          font-size: 16px;
        }
        @include mobile {
          margin-top: 17px;
          font-size: 16px;
        }
      }
    }
    .item2 {
      flex: 1;
      @include pad {
        width: auto;
        min-width: auto;
        flex: 3;
      }
      @include mobile {
        width: 100%;
        min-width: 100%;
        margin-top: 15px;
      }
      .title {
        font-family: Barlow;
        font-size: 52px;
        font-weight: 600;
        color: #fff;
        line-height: 1.08;
        @include pad {
          font-size: 28px;
        }
        @include mobile {
          font-size: 27.3px;
          line-height: 1.2;
        }
      }
      .des {
        margin-top: 35px;
        font-family: Barlow;
        font-size: 20px;
        line-height: 1.6;
        color: #fff;
        @include pad {
          font-size: 16px;
          margin-top: 16px;
        }
        @include mobile {
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
