<script setup lang="ts">
const { t } = useLang()

const members = [
  {
    img: '../assets/images/prfiles/david.webp',
    name: t('role1-name'),
    position: t('role1-position'),
    company: t('role1-company'),
    link: ''
  },
  {
    img: '../assets/images/prfiles/dilys.webp',
    name: t('role2-name'),
    position: t('role2-position'),
    company: t('role2-company'),
    link: ''
  },
  {
    img: '../assets/images/prfiles/leong.webp',
    name: t('role3-name'),
    position: t('role3-position'),
    company: t('role3-company'),
    link: ''
  },
  {
    img: '../assets/images/prfiles/lincoln.webp',
    name: t('role4-name'),
    position: t('role4-position'),
    company: t('role4-company'),
    link: ''
  },
  {
    img: '../assets/images/prfiles/naser.webp',
    name: t('role5-name'),
    position: t('role5-position'),
    company: t('role5-company'),
    link: ''
  }
]
</script>

<template>
  <div
    id="block8"
    class="block"
  >
    <div class="block8-bg">
      <img src="../assets/images/block8-bg1.webp">
      <img src="../assets/images/block8-bg2.webp">
    </div>
    <div class="container">
      <div class="top">
        <h2 class="top-left">
          {{ $t('block8-title') }}
        </h2>
        <div class="top-right">
          <h3 class="title">
            {{ $t('block8-title-1') }}
          </h3>
          <p class="des">
            {{ $t('block8-des') }}
          </p>
        </div>
      </div>
      <div class="bottom">
        <div
          v-for="item in members"
          :key="item.name"
          class="profile-item"
        >
          <img
            class="avatar"
            width="100%"
            :src="item.img"
            alt="david"
          >
          <h3 class="name">
            {{ item.name }}
          </h3>
          <div class="position">
            {{ item.position }}
          </div>
          <div class="company">
            {{ item.company }}
          </div>
          <a
            class="linkedin"
            href="linkedin"
          >
            <img
              src="../assets/images/linkedin.png"
              alt="linkedin"
              width="24px"
              height="24px"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
#block8 {
  color: $color_gray_White;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;

  .block8-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    img:nth-child(1) {
      position: absolute;
      top: -75px;
      left: 0;
      @include mobile {
        width: 100%;
      }
    }
    img:nth-child(2) {
      position: absolute;
      bottom: 0;
      right: 0;
      @include mobile {
        width: 100%;
      }
    }
  }
  .container {
    padding-top: 129px;
    @include mobile {
      padding-top: 36px;
    }
    .top {
      display: flex;
      @include mobile {
        display: block;
      }
      .top-left {
        width: 30%;
        width: 259px;
        font-family: Barlow;
        font-size: 52px;
        font-weight: bold;
        line-height: 1.08;
        color: #fff;
        margin-right: 16px;
        @include mobile {
          width: 100%;
          font-size: 28px;
        }
      }

      .top-right {
        flex: 1;
        font-family: Barlow;
        font-size: 30px;
        font-weight: bold;
        color: #fff;
        line-height: 2;
        @include mobile {
          font-size: 20px;
          margin-top: 15px;
        }
        .des {
          font-size: 20px;
          line-height: 1.6;
          color: #fff;
          font-weight: normal;
          margin-top: 20px;
          @include mobile {
            font-size: 16px;
            margin-top: 15px;
          }
        }
      }
    }
    .bottom {
      display: flex;
      gap: 17px;
      margin-top: 94px;
      @include pad {
        margin-top: 51px;
        gap: 7px;
      }
      @include mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0px;
        margin-bottom: 30px;
      }
      .profile-item {
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 480px;
        @include pad {
          height: 450px;
        }
        @include mobile {
          height: 600px;
          max-width: 166px;
          margin-top: 42px;
          min-height: 400px;
        }
        .avatar {
          border: 1px solid rgb(42, 239, 232);
        }

        .name {
          font-family: Barlow;
          font-size: 20px;
          font-weight: bold;
          color: #fff;
          margin-top: 16px;
        }
        .position {
          font-family: Barlow;
          font-size: 14px;
          font-weight: bold;
          color: #fff;
          margin-top: 20px;
        }

        .company {
          font-family: Barlow;
          font-size: 14px;
          font-weight: normal;
          color: #fff;
          margin-top: 20px;
        }

        .linkedin {
          position: absolute;
          bottom: 0;
          @include mobile {
            position: initial;
            margin-top: 16px;
          }
        }
      }
    }
  }
}
</style>
