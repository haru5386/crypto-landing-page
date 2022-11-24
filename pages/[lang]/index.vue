<template>
  <div class="page-index">
    <!-- content -->
    <block1 />
    <block3 />
    <block5 />
    <block7 />
    <block9 />
  </div>
</template>
<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useBaseStore } from '../../stores/base.js'
import { useUserStore } from '../../stores/user.js'
// fetch 資料
const BaseStore = useBaseStore()
const UserStore = useUserStore()

// 引入 store action
const { BASE_DATA_INIT, NO_READ_MSG } = BaseStore
const { USER_DATA_INIT } = UserStore
// 引入 ScrollTrigger
const triggers = ScrollTrigger.getAll()
// 引入 ref
// const block1 = ref()
// provide('ref', block1)
// 引入 store state / getter

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
      block3Scroll()
      // block5Scroll()
      block7Scroll()
      block9Scroll()
      badgeIn()
      shieldIn()
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

// video-ace 進入動畫
function aceVideoIn () {
  gsap.timeline().fromTo('.video-ace', {
    ease: 'circ.out',
    y: 200
  }, {
    duration: 1,
    ease: 'circ.out',
    y: 0
  })
}
// shield 進入動畫
function shieldIn () {
  ScrollTrigger.create({
    // 以box2作為觸發時機
    trigger: '.shield',
    markers: true,

    // 向下滾動進入start點時觸發callback
    onEnter: function () {
      gsap.timeline().fromTo('.shield', {
        ease: 'circ.out',
        y: -700,
        opacity: 0
      }, {
        duration: 2,
        ease: 'circ.out',
        y: 0,
        opacity: 1
      })
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
// badge 進入動畫
function badgeIn () {
  ScrollTrigger.create({
    // 以box2作為觸發時機
    trigger: '.badge',
    markers: true,

    // 向下滾動進入start點時觸發callback
    onEnter: function () {
      gsap.timeline().fromTo('.badge', {
        ease: 'circ.out',
        y: 100,
        opacity: 0
      }, {
        duration: 1,
        ease: 'circ.out',
        y: 0,
        opacity: 1
      }).fromTo('.block5-bg', {
        ease: 'circ.out',
        y: 100
      }, {
        duration: 1,
        ease: 'circ.out',
        y: 0,
        delay: 0.2
      }, '<')
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

// roadMap 進入動畫
function roadMapIn () {
  gsap.timeline().fromTo('.bg-roadMap', {
    ease: 'circ.out',
    y: 250
  }, {
    duration: 0.8,
    ease: 'circ.out',
    y: 0
  }).fromTo('.location-2021', {
    ease: 'circ.out',
    y: -250,
    opacity: 0
  }, {
    duration: 0.8,
    ease: 'circ.out',
    y: 0,
    opacity: 1
  }).fromTo('.content-2021', {
    ease: 'circ.out',
    y: 550,
    opacity: 0
  }, {
    duration: 0.8,
    ease: 'circ.out',
    y: 0,
    opacity: 1
  }, '<').fromTo('.location-2022', {
    ease: 'circ.out',
    y: -250,
    opacity: 0
  }, {
    duration: 0.8,
    ease: 'circ.out',
    y: 0,
    opacity: 1
  }).fromTo('.content-2022', {
    ease: 'circ.out',
    y: 550,
    opacity: 0
  }, {
    duration: 0.8,
    ease: 'circ.out',
    y: 0,
    opacity: 1
  }, '<').fromTo('.location-2023', {
    ease: 'circ.out',
    y: -250,
    opacity: 0
  }, {
    duration: 0.8,
    ease: 'circ.out',
    y: 0,
    opacity: 1
  }).fromTo('.content-2023', {
    ease: 'circ.out',
    y: 550,
    opacity: 0
  }, {
    duration: 0.8,
    ease: 'circ.out',
    y: 0,
    opacity: 1
  }, '<').fromTo('.location-2024', {
    ease: 'circ.out',
    y: -250,
    opacity: 0
  }, {
    duration: 0.8,
    ease: 'circ.out',
    y: 0,
    opacity: 1
  }).fromTo('.content-2024', {
    ease: 'circ.out',
    y: 550,
    opacity: 0
  }, {
    duration: 0.8,
    ease: 'circ.out',
    y: 0,
    opacity: 1
  }, '<')
}

// device 進入動畫
function deviceIn () {
  gsap.timeline().fromTo('.device', {
    ease: 'circ.out',
    opacity: 0,
    y: -150
  }, {
    duration: 0.8,
    ease: 'circ.out',
    opacity: 1,
    y: 0
  }).fromTo('.block9-bg', {
    ease: 'circ.out',
    opacity: 0,
    y: 150
  }, {
    duration: 0.8,
    ease: 'circ.out',
    opacity: 1,
    y: 0
  }, '<')
}
// scroll block1 觸發
function block1Scroll () {
  ScrollTrigger.create({
    // 以box2作為觸發時機
    trigger: '#block1',
    markers: true,

    // 向下滾動進入start點時觸發callback
    onEnter: function () {
      animatedEarthIn()
    },

    // 向下滾動超過end點時觸發callback
    onLeave: function () {
      // animatedEarthReset()
      // hide(box2)
    },

    // 向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: function () {
      animatedEarthIn()
    }

  })
}

// scroll block3 觸發
function block3Scroll () {
  ScrollTrigger.create({
    // 以box2作為觸發時機
    trigger: '#block3',
    markers: true,

    // 向下滾動進入start點時觸發callback
    onEnter: function () {
      aceVideoIn()
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

// scroll block7 觸發
function block7Scroll () {
  ScrollTrigger.create({
    // 以block7作為觸發時機
    trigger: '#block7',
    markers: true,

    // 向下滾動進入start點時觸發callback
    onEnter: function () {
      roadMapIn()
    },

    // 向下滾動超過end點時觸發callback
    onLeave: function () {
    },

    // 向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: function () {
      roadMapIn()
    }

  })
}

// scroll block9 觸發
function block9Scroll () {
  ScrollTrigger.create({
    // 以block9作為觸發時機
    trigger: '#block9',
    markers: true,

    // 向下滾動進入start點時觸發callback
    onEnter: function () {
      deviceIn()
    },

    // 向下滾動超過end點時觸發callback
    onLeave: function () {
    },

    // 向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: function () {
      deviceIn()
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
  // 取得使用者資訊
  USER_DATA_INIT()
  BASE_DATA_INIT()
  NO_READ_MSG()
  // 觸發動畫
  ScrollTrigger.refresh()
  gsapSet()
})
</script>
<style lang="scss">
@import '../assets/scss';

.page-index {
  background-color: #000;
}

.block {
  min-height: 100vh;
  width: 100vw;
  padding-top: 64px;
}
.container {
  max-width: 1200px;
  padding: 0 $spacing_4;
  margin: 0 auto;
  @include mobile {
    padding: 0 $spacing_2;
  }
}
</style>
