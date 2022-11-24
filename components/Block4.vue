<script lang="ts" setup>
import {
  ElCarousel,
  ElCarouselItem,
  ElIcon,
  ElCollapse,
  ElCollapseItem
} from 'element-plus'
import { CaretRight } from '@element-plus/icons-vue'
// import { Ref } from 'vue'
const activeIndx = ref(0)
const carouselBlock4 = ref<any | null>(null)
const { t } = useLang()
const setActiveItem = (idx: number) => {
  carouselBlock4.value?.setActiveItem(idx)
  activeIndx.value = idx
}
</script>

<template>
  <div
    id="block4"
    class="block"
  >
    <img
      class="block4-bg rotate-ani"
      src="../assets/images/block4-img.webp"
    >

    <div class="container">
      <div class="section desktop">
        <div class="title">
          {{ t('block4-title') }}
        </div>
        <div class="carousel-labels">
          <div class="tab-items">
            <div
              class="tab-item"
              :class="{ active: activeIndx === 0 }"
              @click="setActiveItem(0)"
            >
              <el-icon
                class="icon"
                color="#e0b854"
                size="24px"
              >
                <CaretRight />
              </el-icon>
              {{ t('block4-tab1') }}
            </div>
            <div
              class="tab-item"
              :class="{ active: activeIndx === 1 }"
              @click="setActiveItem(1)"
            >
              <el-icon
                class="icon"
                color="#e0b854"
                size="24px"
              >
                <CaretRight />
              </el-icon>
              {{ t('block4-tab2') }}
            </div>
            <div
              class="tab-item"
              :class="{ active: activeIndx === 2 }"
              @click="setActiveItem(2)"
            >
              <el-icon
                class="icon"
                color="#e0b854"
                size="24px"
              >
                <CaretRight />
              </el-icon>
              {{ t('block4-tab3') }}
            </div>
            <div
              class="tab-item"
              :class="{ active: activeIndx === 3 }"
              @click="setActiveItem(3)"
            >
              <el-icon
                class="icon"
                color="#e0b854"
                size="24px"
              >
                <CaretRight />
              </el-icon>
              {{ t('block4-tab4') }}
            </div>
            <div
              class="tab-item"
              :class="{ active: activeIndx === 4 }"
              @click="setActiveItem(4)"
            >
              <el-icon
                class="icon"
                color="#e0b854"
                size="24px"
              >
                <CaretRight />
              </el-icon>
              {{ t('block4-tab5') }}
            </div>
            <div
              class="tab-item"
              :class="{ active: activeIndx === 5 }"
              @click="setActiveItem(5)"
            >
              <el-icon
                class="icon"
                color="#e0b854"
                size="24px"
              >
                <CaretRight />
              </el-icon>
              {{ t('block4-tab6') }}
            </div>
          </div>
          <el-carousel
            ref="carouselBlock4"
            height="200px"
            direction="vertical"
            :autoplay="false"
          >
            <!-- 1 -->
            <el-carousel-item>
              <div class="carousel-title">
                {{ t('block4-tab1-title1') }}
              </div>
              <div class="carousel-des">
                {{ t('block4-tab1-des1') }}
              </div>
              <div class="carousel-title">
                {{ t('block4-tab1-title2') }}
              </div>
              <div class="carousel-des">
                {{ t('block4-tab1-des2') }}
              </div>
            </el-carousel-item>
            <!-- 2 -->
            <el-carousel-item>
              <div class="carousel-title">
                {{ t('block4-tab2-title1') }}
              </div>
              <div class="carousel-des">
                {{ t('block4-tab2-des1') }}
              </div>
              <div class="carousel-title">
                {{ t('block4-tab1-title2') }}
              </div>
              <div class="carousel-des">
                {{ t('block4-tab2-des2') }}
              </div>
            </el-carousel-item>
            <!-- 3 -->
            <el-carousel-item>
              <div class="carousel-title">
                {{ t('block4-tab3-title1') }}
              </div>
              <div class="carousel-des">
                {{ t('block4-tab3-des1') }}
              </div>
              <div class="carousel-title">
                {{ t('block4-tab1-title2') }}
              </div>
              <div class="carousel-table">
                <div class="carousel-table-title">
                  {{ t('carousel-table-title') }}
                </div>
                <div class="table-col">
                  <div class="left">
                    {{ t('carousel-table-key1') }}
                  </div>
                  <div class="right">
                    {{ t('carousel-table-val1') }}
                  </div>
                </div>
                <div class="table-col">
                  <div class="left">
                    {{ t('carousel-table-key2') }}
                  </div>
                  <div class="right">
                    {{ t('carousel-table-val2') }}
                  </div>
                </div>
                <div class="table-col">
                  <div class="left">
                    {{ t('carousel-table-key3') }}
                  </div>
                  <div class="right">
                    {{ t('carousel-table-val3') }}
                  </div>
                </div>
                <div class="table-col">
                  <div class="left">
                    {{ t('carousel-table-key4') }}
                  </div>
                  <div class="right">
                    {{ t('carousel-table-val4') }} <br>
                    {{ t('carousel-table-val4-2') }}
                  </div>
                </div>
                <div class="table-col">
                  <div class="left">
                    {{ t('carousel-table-key5') }}
                  </div>
                  <div class="right">
                    {{ t('carousel-table-val5') }}
                  </div>
                </div>
              </div>
            </el-carousel-item>
            <!-- 4 -->
            <el-carousel-item>
              <div class="carousel-title">
                {{ t('block4-tab4-title') }}
              </div>
              <div class="carousel-des">
                {{ t('block4-tab4-des') }}
              </div>
            </el-carousel-item>
            <!-- 5 -->
            <el-carousel-item>
              <div class="carousel-title">
                {{ t('block4-tab5-title') }}
              </div>
              <div class="carousel-des">
                {{ t('block4-tab5-des') }}
              </div>
            </el-carousel-item>
            <!-- 6 -->
            <el-carousel-item>
              <div class="carousel-title">
                {{ t('block4-tab6-title') }}
              </div>
              <div class="carousel-des">
                {{ t('block4-tab6-des') }}
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="section phone">
        <div class="title">
          {{ t('block4-title') }}
        </div>
        <el-collapse accordion>
          <el-collapse-item name="0">
            <template #title>
              <el-icon
                class="icon"
                color="#e0b854"
                size="32px"
              >
                <CaretRight />
              </el-icon>
              {{ t('block4-tab1') }}
            </template>
            <div class="carousel-title">
              {{ t('block4-tab1-title1') }}
            </div>
            <div class="carousel-des">
              {{ t('block4-tab1-des1') }}
            </div>
            <div class="carousel-title">
              {{ t('block4-tab1-title2') }}
            </div>
            <div class="carousel-des">
              {{ t('block4-tab1-des2') }}
            </div>
          </el-collapse-item>
          <el-collapse-item name="1">
            <template #title>
              <el-icon
                class="icon"
                color="#e0b854"
                size="32px"
              >
                <CaretRight />
              </el-icon>
              {{ t('block4-tab2') }}
            </template>
            <div class="carousel-title">
              {{ t('block4-tab2-title1') }}
            </div>
            <div class="carousel-des">
              {{ t('block4-tab2-des1') }}
            </div>
            <div class="carousel-title">
              {{ t('block4-tab1-title2') }}
            </div>
            <div class="carousel-des">
              {{ t('block4-tab2-des2') }}
            </div>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template #title>
              <el-icon
                class="icon"
                color="#e0b854"
                size="32px"
              >
                <CaretRight />
              </el-icon>
              {{ t('block4-tab3') }}
            </template>
            <div class="carousel-title">
              {{ t('block4-tab3-title1') }}
            </div>
            <div class="carousel-des">
              {{ t('block4-tab3-des1') }}
            </div>
            <div class="carousel-title">
              {{ t('block4-tab1-title2') }}
            </div>
            <div class="carousel-table">
              <div class="carousel-table-title">
                {{ t('carousel-table-title') }}
              </div>
              <div class="table-col">
                <div class="left">
                  {{ t('carousel-table-key1') }}
                </div>
                <div class="right">
                  {{ t('carousel-table-val1') }}
                </div>
              </div>
              <div class="table-col">
                <div class="left">
                  {{ t('carousel-table-key2') }}
                </div>
                <div class="right">
                  {{ t('carousel-table-val2') }}
                </div>
              </div>
              <div class="table-col">
                <div class="left">
                  {{ t('carousel-table-key3') }}
                </div>
                <div class="right">
                  {{ t('carousel-table-val3') }}
                </div>
              </div>
              <div class="table-col">
                <div class="left">
                  {{ t('carousel-table-key4') }}
                </div>
                <div class="right">
                  {{ t('carousel-table-val4') }} <br>
                  {{ t('carousel-table-val4-2') }}
                </div>
              </div>
              <div class="table-col">
                <div class="left">
                  {{ t('carousel-table-key5') }}
                </div>
                <div class="right">
                  {{ t('carousel-table-val5') }}
                </div>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item name="3">
            <template #title>
              <el-icon
                class="icon"
                color="#e0b854"
                size="32px"
              >
                <CaretRight />
              </el-icon>
              {{ t('block4-tab4') }}
            </template>
            <div class="carousel-title">
              {{ t('block4-tab4-title') }}
            </div>
            <div class="carousel-des">
              {{ t('block4-tab4-des') }}
            </div>
          </el-collapse-item>
          <el-collapse-item name="4">
            <template #title>
              <el-icon
                class="icon"
                color="#e0b854"
                size="32px"
              >
                <CaretRight />
              </el-icon>
              {{ t('block4-tab5') }}
            </template>
            <div class="carousel-title">
              {{ t('block4-tab5-title') }}
            </div>
            <div class="carousel-des">
              {{ t('block4-tab5-des') }}
            </div>
          </el-collapse-item>
          <el-collapse-item name="5">
            <template #title>
              <el-icon
                class="icon"
                color="#e0b854"
                size="32px"
              >
                <CaretRight />
              </el-icon>
              {{ t('block4-tab6') }}
            </template>
            <div class="carousel-title">
              {{ t('block4-tab6-title') }}
            </div>
            <div class="carousel-des">
              {{ t('block4-tab6-des') }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// desktop
@import '@/assets/scss/index.scss';

#block4 {
  z-index: 1;
  position: relative;
  overflow: hidden;
  .block4-bg {
    width: 80%;
    position: absolute;
    top: 700px;
    left: 50%;
    margin-left: -40%;
    z-index: -1;
    @include mobile {
      width: 120%;
      top: auto;
      left: 0;
      margin-left: -10%;
      bottom: -300px;
    }
  }
}
.container {
  .section {
    padding-top: 136px;
    &.phone {
      display: none;
    }
    .title {
      width: 100%;
      color: white;
      font-family: Barlow;
      font-size: 52px;
      font-weight: bold;
      text-align: left;
      margin-bottom: 84px;
      @include pad {
        font-size: 34px;
        margin-bottom: 69px;
      }
    }

    .carousel-labels {
      width: 100%;
      height: 700px;
      display: flex;
      justify-content: space-between;
      .tab-items {
        width: 30%;
        .tab-item {
          font-family: Barlow;
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 40px;
          cursor: pointer;
          display: flex;
          @include pad {
            margin-bottom: 32px;
          }
          .icon {
            display: none;
            margin-right: 5px;
          }
          &.active {
            color: rgba(255, 255, 255, 0.43);
            .icon {
              display: block;
            }
          }
        }
      }
      .el-carousel {
        width: 70%;
        .el-carousel__container {
          height: 950px;
          .el-carousel__item {
            height: 950px;
            .carousel-title {
              font-family: Barlow;
              font-size: 24px;
              font-weight: bold;
              color: #fff;
              line-height: 1.5;
            }
            .carousel-des {
              font-family: Barlow;
              font-size: 20px;
              font-weight: normal;
              color: #fff;
              margin-top: 13px;
              line-height: 1.6;
              opacity: 0.7;
              margin-bottom: 15px;
              @include pad {
                font-size: 18px;
              }
            }
            .carousel-table {
              color: #fff;
              width: 100%;
              margin-top: 24px;
              opacity: 0.7;
              @include pad {
                margin-top: 12px;
              }
              .carousel-table-title {
                width: 100%;
                text-align: center;
                font-family: Barlow;
                font-size: 10px;
                line-height: 3.2;
              }
              .table-col {
                display: flex;
                background-color: rgba(255, 255, 255, 0.1);
                padding: 15px 15px 15px 15px;
                @include pad {
                  font-size: 15px;
                }
                .left {
                  width: 40%;
                }
                .right {
                  flex: 1;
                }
              }
            }
          }
        }
      }

      // mobile
      @include pad {
        height: 900px;
        .tab-items {
          width: 40%;
        }
        .el-carousel {
          width: 60%;
        }
      }
    }

    // mobile
    @include pad {
      padding-top: 56px;
    }
  }
}
.rotate-ani {
  animation: rotation 60s infinite linear;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

// mobile
@include mobile {
  .container {
    .section {
      padding: 45px 26px;
      &.desktop {
        display: none;
      }
      &.phone {
        display: block;
      }

      .title {
        font-size: 27px;
        margin-bottom: 40px;
      }

      .carousel-title {
        font-family: Barlow;
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        line-height: 1.5;
      }
      .carousel-des {
        font-family: Barlow;
        font-size: 20px;
        font-weight: normal;
        color: #fff;
        margin-top: 13px;
        line-height: 1.6;
        opacity: 0.7;
        margin-bottom: 15px;
        @include pad {
          font-size: 18px;
        }
      }
      .carousel-table {
        color: #fff;
        width: 100%;
        margin-top: 24px;
        opacity: 0.7;
        @include pad {
          margin-top: 12px;
        }
        .carousel-table-title {
          width: 100%;
          text-align: center;
          font-family: Barlow;
          font-size: 10px;
          line-height: 3.2;
        }
        .table-col {
          display: flex;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 15px 15px 15px 15px;
          @include pad {
            font-size: 15px;
          }
          .left {
            width: 40%;
          }
          .right {
            flex: 1;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.el-carousel__indicators {
  display: none;
}

#block4 .el-collapse-item__header {
  background: none;
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  border: none;

  i {
    display: none;
    margin-right: 10px;
  }
  &.is-active {
    color: rgba(255, 255, 255, 0.43);
    .icon {
      display: block;
    }
  }
}

.el-collapse-item__content {
  padding: 16px;
}

.el-collapse {
  border: none;
}

.el-collapse-item {
  border: none;
}
</style>
