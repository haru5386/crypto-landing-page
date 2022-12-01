<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// 引入 ScrollTrigger
const triggers = ScrollTrigger.getAll()
function gsapSet () {
  ScrollTrigger.matchMedia({
    '(min-width: 1200px)': () => {
      block5Out()
      shieldIn()
    },
    '(min-width: 768px)': () => {
      block5Out()
      shieldIn()
    },
    '(max-width: 768px)': () => {
      block5MobileOut()
    },
    all: () => {
      badgeIn()
      block5Scroll()
    }
  })
}
// shield 進入動畫
function shieldIn () {
  ScrollTrigger.create({
    // 以box2作為觸發時機
    trigger: '.shield',
    markers: false,

    // 向下滾動進入start點時觸發callback
    onEnter: function () {
      gsap.timeline().fromTo(
        '.shield',
        {
          ease: 'circ.out',
          y: -700,
          opacity: 0
        },
        {
          duration: 2,
          ease: 'circ.out',
          y: 0,
          opacity: 1
        }
      )
    },

    // 向下滾動超過end點時觸發callback
    onLeave: function () {
      // hide(box2)
    },

    // 向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: function () {
      // animatedEarthOut()
    }
  })
}
// badge block5-bg 進入動畫
function badgeIn () {
  ScrollTrigger.create({
    // 以block5作為觸發時機
    trigger: '#block5',
    markers: false,

    // 向下滾動進入start點時觸發callback
    onEnter: function () {
      gsap
        .timeline()
        .fromTo(
          '.badge',
          {
            ease: 'circ.out',
            y: 100,
            opacity: 0
          },
          {
            duration: 1,
            ease: 'circ.out',
            y: 0,
            opacity: 1
          }
        )
        .fromTo(
          '.block5-bg',
          {
            ease: 'circ.out',
            y: 100
          },
          {
            duration: 1,
            ease: 'circ.out',
            y: 0,
            delay: 0.2
          },
          '<'
        )
    },

    // 向下滾動超過end點時觸發callback
    onLeave: function () {
      // hide(box2)
    },

    // 向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: function () {
      // animatedEarthOut()
    }
  })
}

// left-word 進入動畫
function leftWordIn () {
  gsap.timeline().fromTo(
    '.left-word',
    {
      ease: 'circ.out',
      y: 300
    },
    {
      duration: 1.5,
      ease: 'circ.out',
      y: 0
    }
  )
}

// scroll block5 觸發
function block5Scroll () {
  ScrollTrigger.create({
    // 以block5作為觸發時機
    trigger: '#block5',
    markers: false,

    // 向下滾動進入start點時觸發callback
    onEnter: function () {
      leftWordIn()
    },

    // 向下滾動超過end點時觸發callback
    onLeave: function () {},

    // 向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: function () {
    }
  })
}

// shield badge left-word 離開動畫
function block5Out () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#block6',
        markers: false,
        start: 'top 100%',
        end: 'top 5%',
        scrub: true
      }
    })
    .to('.badge', {
      duration: 1,
      ease: 'easeIn',
      y: -180
    }).to('.shield', {
      duration: 1,
      ease: 'easeIn',
      y: -170
    }, '<').to('.left-word', {
      duration: 1,
      ease: 'easeIn',
      y: -200
    }, '<').to('.block5-bg', {
      duration: 1,
      opacity: 0,
      ease: 'easeIn',
      y: 1200
    }, '<')
}

// block5-mobile 離開動畫
function block5MobileOut () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#block6',
        markers: false,
        start: 'top 100%',
        end: 'top 5%',
        scrub: true
      }
    })
    .to('.block5-bg', {
      duration: 1,
      ease: 'easeIn',
      y: 1300
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
  <div class="rightPC">
    <div class="shield">
      <img
        src="../assets/images/block3-shield@2x.webp"
        alt="shield"
      >
    </div>
  </div>
  <div class="block5-bg-mask">
    <div class="block5-bg">
      <img
        src="../assets/images/block3-bg@2x.webp"
        alt="背景"
      >
    </div>
  </div>
  <div
    id="block5"
    class="block"
  >
    <div class="container">
      <div class="left">
        <div class="left-con">
          <div class="left-word">
            <h2 class="title">
              {{ $t('block5-title') }}
            </h2>
            <h3 class="description">
              {{ $t('block5-des') }}
            </h3>
          </div>
          <div class="badge">
            <div class="top">
              <div class="badge-img1">
                <img
                  src="../assets/images/badge1@2x.webp"
                  alt="badge1"
                >
              </div>
              <div class="badge-img2">
                <img
                  src="../assets/images/badge2@2x.webp"
                  alt="badge1"
                >
              </div>
            </div>
            <div class="bottom">
              <div class="badge-img3">
                <img
                  src="../assets/images/badge3@2x.webp"
                  alt="badge1"
                >
              </div>
              <div class="badge-img4">
                <img
                  src="../assets/images/badge4@2x.webp"
                  alt="badge1"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="shield">
          <img
            src="../assets/images/block3-shield@2x.webp"
            alt="shield"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
.rightPC {
  position: absolute;
  max-width: 900px;
  width: 100vw;
  height: 100vw;
  z-index: 10;
  left: 50%;
  transform: translate(-50%);
  @include mobile {
    display: none
  }
  .shield {
    position: absolute;
    width: 432px;
    height: 567px;
    top: 140px;
    right: 4%;
    opacity: 0;
    img {
      width: 100%;
      height: 100%;
    }
    @include pad {
      top: 300px;
      width: 298px;
      height: 392px;
      margin: 0 22px 0 0;
      right: 0%;
    }
  }
}
.block5-bg-mask {
    position: absolute;
    width: 100vw;
    height: 180vh;
    overflow: hidden;
    @include pad {
      height: 100vh;
      min-height: 1400px;
      margin-top: 64px;
    }
    @include mobile {
      height: 120vh;
    }
    .block5-bg {
      position: absolute;
      width: 90%;
      top: 0%;
      right: -5%;
      @include md_pc {
        width: 100%;
        left: 10%;
        top: 10%;
      }
      @include pad {
        top: 20%;
        left: -5%;
        width: 140%;
      }
      @include mobile {
        top: 15%;
        left: -30%;
        width: 240%;
      }
      img{
        width: 140%;
      }
    }
  }
#block5 {
  color: $color_gray_White;
  position: relative;
  min-height: 900px;
  height: 100vh;
  z-index: 10;

  .container {
    display: flex;
    margin-top: 40px;
    height: calc(100% - 40px);
    max-width: 900px;
    @include pad {
      padding: 0 0 0 66px;
    }
    @include mobile {
      display: block;
      padding: 0 22px;

    }
    .left {
      width:50%;
      @include pad {
        width:60%;
        }
      @include mobile {
        width: 100%;
      }
      .left-con {
        width: 357px;
        right: 0;
        @include pad {
          left: 0;
          margin: 0;
        }
        @include mobile {
        position: relative;
        width: 100%;
      }
      }
      .title {
        text-transform:uppercase;
        font-size: 52px;
        font-weight: 700;
        line-height: 1.08;
        margin-bottom: 26px;
        width: 100%;
        @include pad {
          font-size: 28px;
        }
        @include mobile {
          line-height: 1.26;
        }
      }
      .description {
        font-size: 30px;
        font-weight: bold;
        width: 357px;
        @include pad {
          font-size: 20px;
        }
        @include mobile {
          width: 100%;
        }
      }
      .badge {
        display: flex;
        flex-direction: column;
        margin-top: 58px;
        opacity: 0;
        .top, .bottom{
          display: flex;
          align-items: center;
          justify-content: center;
          @include mobile {
            justify-content: start;
          }
        }
        .bottom {
          margin-top: 20px;
        }
        @include mobile {
          margin-top: 27px;
          opacity: 1;

        }
        img{
          width: 100%;
        }
        .badge-img1,.badge-img3 {
          width: 100px;
          height: 100px;
          margin-right: 30px;
          @include pad {

          }
          @include mobile {
            width: 78px;
            height: 78px;
          }
        }
        .badge-img2,.badge-img4 {
          width: 205px;
          @include mobile {
            width: 160px;
          }
        }
      }
    }
    .right {
      flex:5;
      position: relative;
      display: none;
      @include mobile {
        overflow: hidden;
        display: block;
      }
      .shield {
        position: absolute;
        width: 433px;
        height: 567px;
        right: 2%;
        img {
          width: 100%;
          height: 100%;
        }
        @include pad {
          top: 30vh;
          width: 274.6px;
          height: 359.7px;
          margin: 0 auto;
        }
        @include mobile {
          position: relative;
          width: 50%;
          margin: 0 auto;
          margin-top: 40px;
          height: auto;
          right: 0;
          top: 0;
        }
      }
    }
  }
}

</style>
