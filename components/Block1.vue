<template>
  <div
    id="block1"
    ref="block1"
    class="block"
  >
    <div class="video-earth">
      <video
        autoplay
        muted
        loop
      >
        <source
          src="../assets/video/globe-animation.mp4"
          type="video/mp4"
        >
      </video>
    </div>
    <div class="container">
      <div class="animation-group">
        <h2 class="des1">
          {{ $t('block1-des1') }}
        </h2>
        <h1>{{ $t('block1-title') }}</h1>
        <h2 class="des2">
          {{ $t('block1-des2') }}
        </h2>
        <div class="signUp">
          <input
            v-model="email"
            name="email"
            type="text"
            placeholder="YourEmail@example.com"
          >
          <div
            class="signUpBtn"
            @click="signUp()"
          >
            {{ $t('block1-content') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const email = ref<string>('')
const runtimeConfig = useRuntimeConfig()
const env = { ...runtimeConfig.public }
const block1 = inject('ref')

const signUp = () => {
  window.location.href = `${env.BASE_URL}/register?email=${email.value}`
}

</script>

<style lang="scss">
@import '../assets/scss/index.scss';
#block1 {
  background-color: #000;
  color: $color_gray_White;
  text-align: center;
  position: relative;
  z-index: 0;
  .video-earth {
    position: absolute;
    width: 100%;
    height: calc(100% - 64px);
    overflow: hidden;
    z-index: -1;
    opacity: 0;
  }
  video{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left:0;
    object-fit: cover;
    z-index: -1;
    overflow: hidden;
    @include pad {
      top:20%;
    }
    @include mobile {
      top: 20%;
    }
}
  .animation-group {
    opacity: 0;
  }
  .des1 {
    margin-top: 150px;
    font-size: 38px;
    font-weight: 600;
    text-transform:uppercase;
    @include pad {
      font-size: 25px;
    }
    @include mobile {
      font-size: 16px;
      margin-top: 57px;

    }
  }
  h1 {
    margin-top: 22px;
    font-size: 65px;
    font-weight: 400;
    text-transform:uppercase;
    @include pad {
      font-size: 43px;
    }
    @include mobile {
      margin-top: 12px;
      font-size: 38px;
    }
  }
  .des2 {
    margin-top: 22px;
    font-size: 38px;
    font-weight: 400;
    @include pad {
      font-size: 25px;
    }
    @include mobile {
      margin-top: 42px;
      font-size: 21px;
    }
  }
  .signUp {
    height: 52px;
    width: 50%;
    margin: 0 auto;
    margin-top: 54px;
    max-width: 514px;
    display: flex;
    border: 1px solid $color_identity_Primary;
    border-radius:  26px;
    background-color: $color_gray_Black;
    font-size: 20px;
    z-index: 10;
    @include pad {
      height: 33px;
      font-size: 13px;
      margin-top: 30px;
    }
    @include mobile {
      height: 26px;
      font-size: 10px;
      max-width: 350px;
      width: 80%;
    }

    input {
      box-sizing: border-box;
      display: inline-block;
      font-size: 20px;
      font-weight: 500;
      padding:0 20px;
      border-radius:  26px 0 0 26px;
      flex:6;
      @include pad {
        font-size: 13px;
        padding:0 20px 0 20px;
      }
      @include mobile {
        font-size: 10px;
        padding:0 10px 0 10px;
      }

    }
    .signUpBtn {
      display: inline-block;
      border-radius:  26px 0 0 26px;
      font-weight: bold;
      font-stretch: normal;
      line-height: 52px;
      text-transform:uppercase;
      color: $color_identity_Primary;
      flex:4;
      @include pad {
        line-height: 33px;
      }
      @include mobile {
        line-height: 26px;
      }
    }
  }
}

</style>
