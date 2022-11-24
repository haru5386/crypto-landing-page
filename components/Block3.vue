<template>
  <div
    id="block3"
    class="block slide"
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

<script setup lang="ts">
const videoUrl = ref<string>('https://www.youtube.com/embed/cSgFSrEnLxQ')
</script>

<style lang="scss">
@import '../assets/scss/index.scss';
#block3 {
color: $color_gray_White;
display: flex;
justify-content: center;
align-items: center;
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
