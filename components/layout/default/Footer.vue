<template>
  <div class="footer">
    <!-- desktop -->
    <div class="footer-container">
      <div class="titles">
        <img
          src="@/assets/images/ACE-Global_logo.png"
        >
      </div>
      <div class="items">
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
            @click="goToWhat()"
          >
            {{ detail.title }}
          </div>
        </div>
        <div class="item-ul">
          <div class="label">
            title
          </div>
          <div class="shareFootList">
            <img
              v-for="(item, index) in links"
              :key="index + 6654"
              class="social-icon"
              :src="item.logo"
              width="22.92px"
              height="18.6px"
              @click="openLink(item.url)"
            >
          </div>
        </div>
      </div>
      <div class="copy-right">
        Copyright © 2022 ACE FORTUNE PTY. LTD. All Rights Reserved
      </div>
    </div>
    <!-- mobile -->
    <div class="footer-container-mobile">
      <div class="titles">
        <img
          src="@/assets/images/ACE-Global_logo.png"
        >
      </div>
      <el-collapse class="collapse">
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
            @click="goToWhat()"
          >
            {{ detail.title }}
          </div>
        </el-collapse-item>
      </el-collapse>
      <div class="social-media">
        <div class="label">
          title
        </div>
        <div class="shareFootList">
          <img
            v-for="(item, index) in links"
            :key="index + 6654"
            class="social-icon"
            :src="item.logo"
            width="22.92px"
            height="18.6px"
            @click="openLink(item.url)"
          >
        </div>
      </div>

      <div class="copy-right">
        Copyright © 2022 ACE FORTUNE PTY. LTD. All Rights Reserved
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElCollapse, ElCollapseItem } from 'element-plus'

const dataList = reactive([
  {
    id: 2,
    title: 'About us',
    lang: 'en_US',
    sort: 0,
    typeId: 1,
    footerArticleList: [
      {
        id: 6,
        title: 'Disclaimer',
        typeId: 1,
        lang: 'en_US',
        content: '<p>2222222222222222222222222222</p>',
        description: '222222222222222',
        status: 1,
        sort: 1,
        articleId: 2,
        externalLink: 'https://aceglobal.zendesk.com/hc/en-us/articles/7018535884057-Disclaimer',
        externalLinkFlag: 1
      },
      {
        id: 22,
        title: 'Community platform',
        typeId: 1,
        lang: 'en_US',
        content: '<p>Community platform</p>',
        status: 1,
        sort: 1,
        articleId: 4,
        externalLink: 'https://linktr.ee/ace_global',
        externalLinkFlag: 1
      }
    ]
  },
  {
    id: 10,
    title: 'Service',
    lang: 'en_US',
    sort: 0,
    typeId: 3,
    footerArticleList: [
      {
        id: 34,
        title: 'Buy Crypto',
        typeId: 3,
        lang: 'en_US',
        content: '<p><br></p>',
        status: 1,
        sort: 1,
        articleId: 7,
        externalLink: 'https://thirdparty.aceglobal.io/',
        externalLinkFlag: 1
      }
    ]
  },
  {
    id: 6,
    title: 'Item list',
    lang: 'en_US',
    sort: 1,
    typeId: 2,
    footerArticleList: [
      {
        id: 50,
        title: 'Exchange',
        typeId: 2,
        lang: 'en_US',
        status: 1,
        sort: 1,
        articleId: 10,
        externalLink: 'https://www.aceglobal.io/',
        externalLinkFlag: 1
      }
    ]
  },
  {
    id: 14,
    title: 'Support',
    lang: 'en_US',
    sort: 1,
    typeId: 4,
    footerArticleList: [
      {
        id: 38,
        title: 'FAQ',
        typeId: 4,
        lang: 'en_US',
        content: '<p>FAQ</p>',
        status: 1,
        sort: 1,
        articleId: 8,
        externalLink: 'https://aceglobal.zendesk.com/hc/',
        externalLinkFlag: 1
      }
    ]
  }
])

const links = reactive([
  {
    id: 1,
    title: 'Twitter',
    logo: 'https://ipfs.metabazaar.vip/ipfs/QmSELYYW9f5j3HnGYA9orgrJA3AmpgSiHFDK3HjQDjb4d9',
    hoverLogo: 'https://ipfs.metabazaar.vip/ipfs/QmUURuaBvEo7f3JK4WPC4L1RNv2X3Fc2n4X8VMcBeTmHta',
    url: 'https://twitter.com/exchange_ace',
    status: 1,
    active: false
  },
  {
    id: 2,
    title: 'Telegram',
    logo: 'https://ipfs.metabazaar.vip/ipfs/Qmcvxozmo3ugmJxQebXYnyjMvwWxZhjfzjigGQB4ffBKd6',
    hoverLogo: 'https://ipfs.metabazaar.vip/ipfs/QmS7U7yeQs59GS8k4yVxGNBYhrAbCPK3QYSvGMTfyJ9HWQ',
    url: 'https://t.me/aceglobalexchangechannel',
    status: 1,
    active: false
  }
])
const openLink = (url:string) => {
  console.log(url)
}

const goToWhat = () => {
  console.log('goToWhat')
}
</script>

<style lang="scss">
@import "../../../assets/scss/index.scss";

.footer {
    width: 100%;
    display: flex;
    justify-content: center;
    background: $color_gray_80;
    padding: 48px 0 0 0;
    .footer-container {
        width: 1200px;
        .items {
            width: 100%;
            display: flex;
            justify-content: space-around;
            .item-ul {
                flex: 1;
                padding-bottom: 32px;
                margin-bottom: 32px;
                .label {
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
        margin-bottom: 38px;
        .logoFootTitle {
            width: 150px;
            height: 50px;
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

<style>
.footer .el-collapse-item__header {
  background: none;
  border: none;
}

.footer .el-collapse-item__header i{
  color: white;
}
.footer .el-collapse {
  border: none;
}
.el-collapse-item__wrap {
  background: none;
  border: none;
}
.el-collapse-item__content {
  padding-bottom: 10px;
}
</style>
