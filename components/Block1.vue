<template>
  <div
    id="block1"
    class="block"
  >
    <div class="container">
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
        <div class="signUpBtn">
          {{ $t('block1-content') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref<string>('')
</script>

<style lang="scss">
@import '../assets/scss/index.scss';
#block1 {
  background-color: #000;
  color: $color_gray_White;
  text-align: center;
  .des1 {
    margin-top: 150px;
    font-size: 38px;
    font-weight: 600;
    text-transform:uppercase;
  }
  h1 {
    margin-top: 22px;
    font-size: 65px;
    font-weight: 400;
    text-transform:uppercase;
  }
  .des2 {
    margin-top: 22px;
    font-size: 38px;
    font-weight: 400;
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
    input {
      box-sizing: border-box;
      display: inline-block;
      padding:0 24px;
      border-radius:  26px 0 0 26px;
      flex:7;
    }
    .signUpBtn {
      display: inline-block;
      border-radius:  26px 0 0 26px;
      line-height: 52px;
      color: $color_identity_Primary;
      text-transform:uppercase;
      flex:3;
    }
  }
}

</style>
