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
      animatedEarthOut()
      block2Scroll()
      block2VideoOut()
    }
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

// block2-video 進入動畫
function block2VideoIn () {
  // gsap.timeline().fromTo(
  //   '.block2-video',
  //   {
  //     ease: 'circ.out',
  //     opacity: 0,
  //     y: 100
  //   },
  //   {
  //     duration: 1,
  //     ease: 'circ.out',
  //     opacity: 1,
  //     y: 0
  //   }
  // )
}
// scroll block2 觸發
function block2Scroll () {
  ScrollTrigger.create({
    // 以block2作為觸發時機
    trigger: '#block2',
    markers: false,

    // 向下滾動進入start點時觸發callback
    onEnter: function () {
      block2VideoIn()
    },

    // 向下滾動超過end點時觸發callback
    onLeave: function () {},

    // 向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: function () {
    }
  })
}

// block2Video 離開動畫
function block2VideoOut () {
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
      y: -400
    })
    .to(
      '.item1',
      {
        duration: 1,
        ease: 'easeIn',
        y: -200
      },
      '<'
    ).to(
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
  <div
    id="block2"
    class="block"
  >
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
  max-width: 1680px;
  @include pad {
    height: 10vh;
  }
  video{
    width: 100%;
    margin-left: 50vw;
    transform: translate(-50%);
    margin-top: -20%;
    z-index: -1;
    @include pad {
      width: 130%;
      margin-top: -40%;
  }
    @include mobile {
        width: 150%;
        margin-top: -40vh;
    }
  }

  }
#block2 {
  z-index: 1;
  position: relative;
  overflow: hidden;

}
.container {
  .section {
    padding-top: 176px;
    display: flex;
    gap: 80px;
    flex-direction: row;
    // mobile
    @include mobile {
      flex-direction: column;
      padding-top: 44px;
      gap: 24px;
    }
    .item1 {
      flex: 1;
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
        @include mobile {
          margin-top: 17px;
          font-size: 16px;
        }
      }
    }
    .item2 {
      width: 588px;
      min-width: 588px;
      @include mobile {
        width: 100%;
        min-width: 100%;
        margin-top: 20px;
      }
      .title {
        font-family: Barlow;
        font-size: 52px;
        font-weight: 600;
        color: #fff;
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
        @include mobile {
          margin-top: 19px;
        }
      }
    }
  }
}
</style>
