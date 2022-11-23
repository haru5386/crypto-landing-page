<template>
  <div
    id="block5"
    class="block"
  >
    <div class="block5-bg">
      <img
        src="../assets/images/block3-bg@2x.webp"
        alt="背景"
      >
    </div>
    <div class="container">
      <div class="left">
        <div class="left-con">
          <div class="title">
            {{ $t('block5-title') }}
          </div>
          <div class="description">
            {{ $t('block5-des') }}
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

<script setup lang="ts">
</script>

<style lang="scss">
@import '../assets/scss/index.scss';
#block5 {
  color: $color_gray_White;
  position: relative;
  overflow: hidden;
  .block5-bg {
    position: absolute;
    width: 100%;
    bottom: -60%;
    @include pad {
      bottom: -40%;
    }
    @include mobile {
      bottom: -20%;
    }
    img{
      width: 140%;
    }
    @include mobile {
      width: 200%;
    }
  }
  .container {
    display: flex;
    margin-top: 40px;
    overflow: hidden;
    height: calc(100% - 40px);
    @include mobile {
      display: block;
      padding: 0 36px;
    }
    .left {
      flex:4;
      position: relative;
      @include mobile {
      }
      .left-con {
        position: absolute;
        width: 357px;
        right: 0;
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
        width: 80px;
        @include mobile {
          font-size: 27px;
          width: 300px;
          line-height: 1.26;
        }
      }
      .description {
        font-size: 30px;
        font-weight: bold;
        width: 357px;
        @include mobile {
          font-size: 20px;
          width: 100%;
        }
      }
      .badge {
        display: flex;
        flex-direction: column;
        margin-top: 58px;
        .top, .bottom{
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bottom {
          margin-top: 20px;
        }
        @include mobile {
          margin-top: 27px;
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
      @include pad {
        flex: 3;
      }
      @include mobile {
        overflow: hidden;
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
          right: 0;
          top: 30vh;
          width: 274.6px;
          height: 359.7px;
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
