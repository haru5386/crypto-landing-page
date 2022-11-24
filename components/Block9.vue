<template>
  <div
    id="block9"
    class="slide"
  >
    <div class="container">
      <h2>{{ $t('block9-title') }}</h2>
      <p>{{ $t('block9-des') }}</p>
      <div class="pic">
        <div class="soon">
          <img
            src="../assets/images/comingsoon.svg"
            alt="comingsoon"
          >
        </div>
        <div class="device">
          <img
            src="../assets/images/devices@2x.webp"
            alt="device"
          >
        </div>
      </div>
    </div>
    <div class="block9-bg">
      <img
        src="../assets/images/block9-bg@2x.webp"
        alt="block9-background"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
#block9 {
  color: $color_gray_White;
  padding-top: 64px;
  height: 700px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @include mobile {
    height: auto;
  }
  img {
    width: 100%;
  }
  .container {
    margin-top: 84px;
    display: inline-block;
    @include mobile {
        text-align: center;
      }
    h2 {
      font-size: 52px;
      font-weight: bold;
      @include mobile {
        font-size: 35px;
      }
    }
    p {
      display: inline-block;
      font-size: 20px;
      font-weight: 400;
      margin: 20px 0;
    }
    .pic {
      display: flex;
      z-index: 10;
      @include mobile {
        flex-direction: column;
        align-items: center;
      }
      .soon {
        @include mobile {
          width: 50%;
          margin: 30px 0;
        }
      }
      .device {
        width: 548px;
        height: 354px;
        margin-left: 40px;
        z-index: 10;
        opacity: 0;
        @include mobile {
          width: 90%;
          height: auto;
          margin-bottom: 30px;
          opacity: 1;

        }
      }
    }
  }
  .block9-bg {
    position: absolute;
    bottom: -95px;
    opacity: 0;
    @include pad {
      width: 1200px;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0px;
    }
    @include mobile {
      opacity: 1;
    }
  }
}

</style>
