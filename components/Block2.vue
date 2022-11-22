<script lang="ts" setup>
const { t } = useLang()
</script>

<template>
  <div
    id="block2"
    class="block"
  >
    <video
      class="block2-video"
      autoplay
      loop
    >
      <source
        src="../assets/video/digitalmap.mp4"
        type="video/mp4"
      >
    </video>
    <div class="container">
      <div class="section">
        <div class="item1">
          <h2 class="title">
            {{ t('block2-title1') }}
          </h2>
          <p class="des">
            {{ t('block2-des1') }}
          </p>
        </div>
        <div class="item2">
          <h2 class="title">
            {{ t('block2-title2') }}
          </h2>
          <p class="des">
            {{ t('block2-des2') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

#block2 {
  z-index: 1;
  position: relative;
  overflow: hidden;
  .block2-video {
    width: 100%;
    position: absolute;
    top: 400px;
    z-index: -1;
    @include mobile {
      width: 150%;
      top: auto;
      left: 50%;
      transform: translateX(-50%);
      bottom: -50px;
    }
  }
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
