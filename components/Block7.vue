<template>
  <div
    id="block7"
    class="slide7"
  >
    <div class="container">
      <div class="title">
        {{ $t('block7-title') }}
      </div>
      <div class="bg-roadMap ">
        <img
          src="../assets/images/roadMap@2x.webp"
          alt="roadMap"
        >
        <div class="roadMap-line" />
        <div class="location location-2021">
          <img
            src="../assets/images/location@2x.webp"
            alt="location"
          >
          <div class="year">
            2021
          </div>
        </div>
        <div class="year-content content-2021">
          <div class="line" />
          <div
            v-for="item in roadMapData1"
            :key="item.title"
            class="content-list"
          >
            <div class="dot" />
            <div>
              <div class="year-content-title">
                {{ item.title }}
              </div>
              <div class="year-content-content">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
        <div class="location location-2022">
          <img
            src="../assets/images/location@2x.webp"
            alt="location"
          >
          <div class="year">
            2022
          </div>
        </div>
        <div class="year-content content-2022">
          <div class="line" />
          <div
            v-for="item in roadMapData2"
            :key="item.title"
            class="content-list"
          >
            <div class="dot" />
            <div>
              <div class="year-content-title">
                {{ item.title }}
              </div>
              <div class="year-content-content">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
        <div class="location location-2023">
          <img
            src="../assets/images/location@2x.webp"
            alt="location"
          >
          <div class="year">
            2023
          </div>
        </div>
        <div class="year-content content-2023">
          <div class="line" />
          <div
            v-for="item in roadMapData3"
            :key="item.title"
            class="content-list"
          >
            <div class="dot" />
            <div>
              <div class="year-content-title">
                {{ item.title }}
              </div>
              <div class="year-content-content">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
        <div class="location location-2024">
          <img
            src="../assets/images/location@2x.webp"
            alt="location"
          >
          <div class="year">
            2024
          </div>
        </div>
        <div class="year-content content-2024">
          <div class="line" />
          <div
            v-for="item in roadMapData4"
            :key="item.title"
            class="content-list"
          >
            <div class="dot" />
            <div>
              <div class="year-content-title">
                {{ item.title }}
              </div>
              <div class="year-content-content">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const { t } = useLang()
const roadMapData1 = [{
  title: 'Q3',
  content: t('block7-2021-1')
}]
const roadMapData2 = [{
  title: 'Q1',
  content: t('block7-2022-1')
},
{
  title: 'Q3',
  content: t('block7-2022-2')
},
{
  title: 'Q4',
  content: t('block7-2022-3')
}]

const roadMapData3 = [{
  title: 'Q1',
  content: t('block7-2023-1')
},
{
  title: 'Q2',
  content: t('block7-2023-2')
},
{
  title: 'Q3',
  content: t('block7-2023-3')
},
{
  title: 'Q4',
  content: t('block7-2023-3')
}]

const roadMapData4 = [{
  title: 'Q2',
  content: t('block7-2024-1')
}]

// 引入 ScrollTrigger
const triggers = ScrollTrigger.getAll()

gsap.registerPlugin(ScrollTrigger)

function gsapSet () {
  ScrollTrigger.matchMedia({
    '(min-width: 1200px)': () => {
    },
    '(min-width: 768px)': () => {
    },
    '(max-width: 768px)': () => {
    },
    all: () => {
      roadMapIn()
    }
  })
}
// roadMap 進入動畫
function roadMapIn () {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.location-2021',
      markers: false,
      start: 'top 100%',
      end: 'top 50%'
    }
  }).fromTo(
    '.bg-roadMap',
    {
      ease: 'circ.out',
      y: 250

    },
    {
      duration: 0.8,
      ease: 'circ.out',
      y: 0
    }
  ).fromTo(
    '.location-2021',
    {
      ease: 'circ.out',
      y: -250,
      opacity: 0
    },
    {
      duration: 0.8,
      ease: 'circ.out',
      y: 0,
      opacity: 1
    }
  ).fromTo(
    '.content-2021',
    {
      ease: 'circ.out',
      y: 550,
      opacity: 0
    },
    {
      duration: 0.8,
      ease: 'circ.out',
      y: 0,
      opacity: 1
    },
    '<'
  ).fromTo(
    '.location-2022',
    {
      ease: 'circ.out',
      y: -250,
      opacity: 0
    },
    {
      duration: 0.8,
      ease: 'circ.out',
      y: 0,
      opacity: 1
    }
  ).fromTo(
    '.content-2022',
    {
      ease: 'circ.out',
      y: 550,
      opacity: 0
    },
    {
      duration: 0.8,
      ease: 'circ.out',
      y: 0,
      opacity: 1
    },
    '<'
  ).fromTo(
    '.location-2023',
    {
      ease: 'circ.out',
      y: -250,
      opacity: 0
    },
    {
      duration: 0.8,
      ease: 'circ.out',
      y: 0,
      opacity: 1
    }
  ).fromTo(
    '.content-2023',
    {
      ease: 'circ.out',
      y: 550,
      opacity: 0
    },
    {
      duration: 0.8,
      ease: 'circ.out',
      y: 0,
      opacity: 1
    },
    '<'
  ).fromTo(
    '.location-2024',
    {
      ease: 'circ.out',
      y: -250,
      opacity: 0
    },
    {
      duration: 0.8,
      ease: 'circ.out',
      y: 0,
      opacity: 1
    }
  ).fromTo(
    '.content-2024',
    {
      ease: 'circ.out',
      y: 550,
      opacity: 0
    },
    {
      duration: 0.8,
      ease: 'circ.out',
      y: 0,
      opacity: 1
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

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
#block7 {
  color: $color_gray_White;
  padding-top: 100px;
  width: 100vw;
  overflow: hidden;
  padding-bottom: 130px;
  .container {
    position: relative;
    padding-bottom: 400px;
    @include pad {
      padding-bottom: 0;
      height: 900px;
    }
    @include mobile {
      height: auto;
    }
    .title {
      position: absolute;
      right: 10px;
      font-size: 52px;
      font-weight: bold;
      @include pad {
        font-size: 34px;
        top: -70px;
        left: 100px;
        z-index: 10;
      }
      @include mobile {
        position: relative;
        right: 0;
        left: 0;
        top: 0;
        margin-bottom: 50px;
      }
    }
    .bg-roadMap {
      width: 100%;
      position: relative;
      @include pad {
        margin-top: 80px;
        width: 140%;
        left: -20%;
      }
      @include mobile {
        display: flex;
        flex-direction: column;
        margin-top: 0px;
        width: 100%;
        left: 0;
      }
      .roadMap-line {
        position: absolute;
        height: 100%;
        width: 2px;
        border-left: 1px dashed $color_identity_Primary;;
        left: 15px;
        display: none;
        @include mobile {
          display: block;
        }
      }
      img {
        width: 100%;
      }
      > img {
        @include mobile {
          display: none;
        }
      }
    }
    .location {
      display: flex;
      align-items: center;
      position: absolute;
      opacity: 0;
      @include mobile {
        position: relative;
        opacity: 1;
      }
      .year {
        font-size: 40px;
        font-weight: 600;
        margin-left: 8px;
        @include pad {
        font-size: 30px;
        }
        @include mobile {
          font-size: 40px;
        }
      }
      img {
        height: 54px;
        @include pad {
          height: 36px;
        }
        @include pad {
          width: 32px;
          height: 54px;
        }
      }
    }
    .location-2021 {
      top: 18%;
      left: 15%;
      @include pad {
        top:20%;
        left: 15%;
      }
      @include mobile {
        top:0;
        left:0;
      }
    }
    .location-2022 {
      top: 43%;
      left: 27%;
      @include pad {
        top: 47%;
        left: 28%;
      }
      @include mobile {
        top:0;
        left:0;
      }
    }
    .location-2023 {
      top: 38%;
      left: 47%;
      @include pad {
        top: 40%;
        left: 47%;
      }
      @include mobile {
        top:0;
        left:0;
      }
    }
    .location-2024 {
      top: 60%;
      left: 71%;
      @include pad {
        top: 60%;
        left: 71.5%;
      }
      @include mobile {
        top:0;
        left:0;
      }
    }
    .year-content{
      position: absolute;
      width: 15%;
      white-space: pre-line;
      opacity: 0;
      @include mobile {
          position: relative;
          width: 100%;
          opacity: 1;
        }
      .content-list {
        margin-top: 16px;
        @include pad {
          margin-top: 8px;
        }
        @include mobile {
          display: flex;
          margin-top: 16px;
          margin-bottom: 16px;
        }
        .dot {
          display: none;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: $color_identity_Primary;
          @include mobile {
            display: block;
            margin: 8px 25px 0 10px;
          }
        }

        .year-content-title {
          font-size: 25px;
          font-weight: bold;
          @include pad {
            font-size: 20px;
        }
        }
        .year-content-content {
          font-size: 14px;
          font-weight: 400;
          @include pad {
            font-size: 12px;
          }
          @include mobile {
            font-size: 14px;
          }
        }
      }
      .line {
        height: 100px;
        width: 1px;
        margin-left: 3px;
        background-color: $color_identity_Primary;
        @include pad {
          height: 50px;
        }
        @include mobile {
          display: none;
        }
      }
    }
    .content-2021 {
      top: 30%;
      left: 16%;
      @include pad {
        top: 32%;
        left: 15.5%;
      }
      @include mobile {
        top:0;
        left:0;
      }
    }
    .content-2022 {
      top: 59%;
      left: 28%;
      @include pad {
        top: 59%;
        left: 28.5%;
      }
      @include mobile {
        top:0;
        left:0;
      }
    }
    .content-2023 {
      top: 53%;
      left: 48%;
      width: 20%;
      @include pad {
        top: 53%;
        left: 48%;
      }
      @include mobile {
        top:0;
        left:0;
        width: 100%;
      }
    }
    .content-2024 {
      top: 72%;
      left: 72%;
      @include pad {
        top: 71%;
        left: 72%;
      }
      @include mobile {
        top:0;
        left:0;
      }
    }
  }
}

</style>
