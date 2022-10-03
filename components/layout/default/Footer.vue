<template>
  <div class="footer">
    <!-- desktop -->
    <div class="footer-container">
      <div class="titles">
        <img
          src="@/assets/images/logo.png"
          width="200"
          height="50"
        >
      </div>
      <!-- <div class="items">
        <div
          v-for="item in dataList"
          :key="item.id"
          class="item-ul"
        >
          <div class="label">
            {{ item.title }}
          </div>
          <div
            v-for="detail in item.footerArticleList"
            :key="'detail-' + detail.id"
            class="item-li"
            @click="goToWhat(detail)"
          >
            {{ detail.title }}
          </div>
        </div>
        <div class="item-ul">
          <div class="label">
            {{ langText(" Social media", "web.txt245") }}
          </div>
          <div class="shareFootList">
            <img
              v-for="(item, index) in Links"
              :key="index + 6654"
              class="social-icon"
              :src="item.logo"
              width="22.92px"
              height="18.6px"
              @click="openLink(item.url)"
            >
          </div>
        </div>
      </div>-->
      <div class="copy-right">
        Copyright © 2022 ACE FORTUNE PTY. LTD. All Rights Reserved
      </div>
    </div>
    <!-- mobile -->
    <div class="footer-container-mobile">
      <div class="titles">
        <img
          src="@/assets/images/logo.png"
          width="200"
          height="50"
        >
      </div>
      <!-- <el-collapse class="collapse">
        <el-collapse-item
          v-for="item in dataList"
          :key="item.id"
          title="一致性 Consistency"
          :name="item.id"
        >
          <template #title>
            <div class="collapse-title">
              {{ item.title }}
            </div>
          </template>
          <div
            v-for="detail in item.footerArticleList"
            :key="'detail-' + detail.id"
            class="item-li"
            @click="goToWhat(detail)"
          >
            {{ detail.title }}
          </div>
        </el-collapse-item>
      </el-collapse>
      <div class="social-media">
        <div class="label">
          {{ langText(" Social media", "web.txt245") }}
        </div>
        <div class="shareFootList">
          <img
            v-for="(item, index) in Links"
            :key="index + 6654"
            class="social-icon"
            :src="item.logo"
            width="22.92px"
            height="18.6px"
            @click="openLink(item.url)"
          >
        </div>
      </div> -->

      <div class="copy-right">
        Copyright © 2022 ACE FORTUNE PTY. LTD. All Rights Reserved
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../../assets/scss/index.scss";

.footer {
    width: 100%;
    display: flex;
    justify-content: center;
    background: $color_gray_80;
    padding: 48px 0;
    .footer-container {
        width: 1200px;
        .items {
            width: 100%;
            display: flex;
            justify-content: space-around;
            .item-ul {
                flex: 1;
                .label {
                    margin-top: 32px;
                    @include font("Heading3", #fff);
                }
                .item-li {
                    margin-top: 16px;
                    @include font("Body1-Reg", $color_gray_60);
                }
                .shareFootList {
                    display: flex;
                    .social-icon {
                        height: 30px;
                        margin: 16px 20px 10px 0;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .footer-container-mobile {
        width: 100%;
        display: none;
        .collapse {
            margin-top: 20px;
            .collapse-title {
                @include font("Heading3", #fff);
            }
            .item-li {
                margin-bottom: 10px;
                @include font("Body1-Reg", $color_gray_60);
            }
        }
        .social-media {
            .label {
                @include font("Heading3", #fff);
                height: 48px;
                line-height: 48px;
            }
            .shareFootList {
                display: flex;
                height: 50px;
                img {
                    margin: 20px 10px 10px 10px;
                }
            }
        }
    }

    .titles {
        .logoFootTitle {
            width: 150px;
            height: 50px;
        }
        .logoFootDese {
            @include font("Body1-Reg", $color_gray_60);
        }
    }

    .copy-right {
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 32px 16px;
        @include font("Body2-Reg", #fff);
    }

}

// pad
@include pad {
    .footer {
        .footer-container {
            display: none;
        }
        .footer-container-mobile {
            display: block;
            padding: 0 32px;
        }
    }
}

// mobile
@include mobile {
    .footer {
        .footer-container {
            display: none;
        }
        .footer-container-mobile {
            display: block;
            padding: 0 16px;
        }
    }
}
</style>
