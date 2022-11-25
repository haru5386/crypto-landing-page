<template>
  <div
    id="block3"
  >
    <div class="container">
      <div class="description">
        <div class="leftDes">
          {{ $t('block3-des1') }}
        </div>
        <div class="rightDes">
          {{ $t('block3-des2') }}
        </div>
      </div>
      <div class="video-ace">
        <iframe
          height="100%"
          width="100%"
          :src="videoUrl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" scoped>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const videoUrl = ref<string>('https://www.youtube.com/embed/IOpaj8ZQxzs')
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
      block3Scroll()
    }
  })
}

// video-ace 進入動畫
function aceVideoIn () {
  gsap.timeline().fromTo(
    '.video-ace',
    {
      ease: 'circ.out',
      y: 200
    },
    {
      duration: 1,
      ease: 'circ.out',
      y: 0
    }
  )
}
// scroll block3 觸發
function block3Scroll () {
  ScrollTrigger.create({
    // 以block3作為觸發時機
    trigger: '.video-ace',
    markers: false,

    // 向下滾動進入start點時觸發callback
    onEnter: function () {
      aceVideoIn()
    },

    // 向下滾動超過end點時觸發callback
    onLeave: function () {},

    // 向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: function () {
      aceVideoIn()
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

<style lang="scss">
@import '../assets/scss/index.scss';
#block3 {
color: $color_gray_White;
display: flex;
justify-content: center;
align-items: center;
z-index: 10;
overflow: hidden;
height: 100vh;
@include pad {
height: 70vh;

}
@include mobile {
  align-items: start;
}
.description {
  display: flex;
  justify-content: center;
  margin: 0 auto 50px auto;
  width: 80%;
  font-size: 20px;
  font-weight: normal;
  line-height: 1.6;
  z-index: 10;
  @include mobile {
    flex-direction: column;
    margin-top: 74px;
    margin-bottom: 30px;
    width: 100%;
    font-size: 16px;
    line-height: 1.63;

  }
  .leftDes {
    flex: 1;
  }
  .rightDes {
    flex: 1;
    margin-left: 22px;
    @include mobile {
      margin-left: 0px;
      margin-top: 40px;
    }
  }
}
.video-ace {
    position: relative;
    margin:  0 auto;
    width: 100%;
    max-width: 1000px;
    aspect-ratio: 16 / 9;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  }
}
}

</style>
