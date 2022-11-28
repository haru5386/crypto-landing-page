<template>
  <footer class="footer">
    <!-- desktop -->
    <div class="footer-container">
      <div class="titles">
        <img src="@/assets/images/ACE-Global_logo.png">
      </div>
      <div class="items">
        <ul
          v-for="item in dataList"
          :key="item.id"
          class="item-ul"
        >
          <div class="label">
            {{ item.title }}
          </div>
          <a
            v-for="detail in item.footerArticleList"
            :key="'detail-' + detail.id"
            class="item-li"
            target="_blank"
            :href="detail.externalLink"
          >
            {{ detail.title }}
          </a>
        </ul>
        <div class="item-ul">
          <div class="label">
            {{ $t('Community') }}
          </div>
          <div class="shareFootList">
            <a
              v-for="item2 in links"
              :key="item2.id"
              :href="item2.url"
              target="_blank"
            >
              <img
                class="social-icon normal"
                :src="item2.logo"
                width="22.92px"
                height="18.6px"
              >
              <img
                class="social-icon active"
                :src="item2.hoverLogo"
                width="22.92px"
                height="18.6px"
              >
            </a>
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
        <img src="@/assets/images/ACE-Global_logo.png">
      </div>
      <el-collapse class="collapse">
        <el-collapse-item
          v-for="item in dataList"
          :key="item.id"
          :title="item.title"
          :name="item.id"
        >
          <template #title>
            <div class="collapse-title">
              {{ item.title }}
            </div>
          </template>
          <a
            v-for="detail in item.footerArticleList"
            :key="'detail-' + detail.id"
            class="item-li"
            target="_blank"
            :href="detail.externalLink"
          >
            {{ detail.title }}
          </a>
        </el-collapse-item>
      </el-collapse>
      <div class="social-media">
        <div class="label">
          {{ $t('Community') }}
        </div>
        <div class="shareFootList">
          <a
            v-for="item in links"
            :key="item.id"
            :href="item.url"
            target="_blank"
          >
            <img
              class="social-icon"
              :src="item.logo"
              width="22.92px"
              height="18.6px"
            >
          </a>
        </div>
      </div>

      <div class="copy-right">
        Copyright © 2022 ACE FORTUNE PTY. LTD. All Rights Reserved
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import { ElCollapse, ElCollapseItem } from 'element-plus'
// images
import twitter from '../../../assets/images/icons/FilledTwitter.svg'
import twitterHover from '../../../assets/images/icons/FilledTwitter-active.svg'

import telegram from '../../../assets/images/icons/FilledTelegram.svg'
import telegramHover from '../../../assets/images/icons/FilledTelegram-active.svg'

import facebook from '../../../assets/images/icons/FilledFB.svg'
import facebookHover from '../../../assets/images/icons/FilledFB-active.svg'

import medium from '../../../assets/images/icons/FilledMedium.svg'
import mediumHover from '../../../assets/images/icons/FilledMedium-active.svg'

import more from '../../../assets/images/icons/filledMore.svg'
import moreHover from '../../../assets/images/icons/filledMore-active.svg'

const { t } = useLang()

const localeSetting = useState<string>('locale.setting')

const urlLang = ref('')

// zendesk 語系設定
switch (localeSetting.value) {
  case 'en_US':
    urlLang.value = 'en-us'
    break
  case 'zh_CN':
    urlLang.value = 'zh-sg'
    break
  case 'el_GR':
    urlLang.value = 'zh-sg'
    break
  case 'vi_VN':
    urlLang.value = 'vi-vn'
    break
  default:
    urlLang.value = 'en-us'
    break
}

const dataList = reactive([
  {
    id: 1,
    title: t('Corporate'),
    footerArticleList: [
      {
        id: '1-1',
        title: t('About us'),
        externalLink: `https://aceglobal.zendesk.com/hc/${urlLang.value}/articles/7017988231833-About-`
      },
      {
        id: '1-2',
        title: t('Contact us'),
        externalLink: `https://aceglobal.zendesk.com/hc/${urlLang.value}/articles/7018310221337-Contact-Us`
      }
    ]
  },
  {
    id: 2,
    title: t('Products'),
    footerArticleList: [
      {
        id: '2-1',
        title: 'AGET',
        externalLink: 'https://aget.aceglobal.io/'
      }
    ]
  },
  {
    id: 3,
    title: t('Legal'),
    footerArticleList: [
      {
        id: '3-1',
        title: t('Privacy Agreement'),
        externalLink: `https://aceglobal.zendesk.com/hc/${urlLang.value}/articles/7018482240537-Privacy-Agreement`
      },
      {
        id: '3-2',
        title: t('User Agreement'),
        externalLink: `https://aceglobal.zendesk.com/hc/${urlLang.value}/articles/7018401423257-User-Agreement`
      },
      {
        id: '3-3',
        title: t('Legal Statement'),
        externalLink: `https://aceglobal.zendesk.com/hc/${urlLang.value}/articles/7018967931289-Legal-Statement`
      },
      {
        id: '3-4',
        title: t('Disclaimer'),
        externalLink: `https://aceglobal.zendesk.com/hc/${urlLang.value}/articles/7018535884057-Disclaimer`
      }
    ]
  },
  {
    id: 4,
    title: t('Support'),
    footerArticleList: [
      {
        id: '4-1',
        title: t('Ace Global isn’t available in countries below'),
        externalLink: `https://aceglobal.zendesk.com/hc/${urlLang.value}/articles/7018535884057-Disclaimer`
      },
      {
        id: '4-2',
        title: 'FAQ',
        externalLink: `https://aceglobal.zendesk.com/hc/${urlLang.value}/categories/5737448286105-FAQ`
      }
    ]
  }
])

const links = reactive([
  {
    id: 1,
    title: 'Twitter',
    logo: twitter,
    hoverLogo: twitterHover,
    url: 'https://twitter.com/exchange_ace'
  },
  {
    id: 2,
    title: 'Telegram',
    logo: telegram,
    hoverLogo: telegramHover,
    url: 'https://t.me/aceglobalexchangechannel'
  },
  {
    id: 3,
    title: 'Facebook',
    logo: facebook,
    hoverLogo: facebookHover,
    url: 'https://www.facebook.com/ACEGlobalExchange'
  },
  {
    id: 4,
    title: 'Medium',
    logo: medium,
    hoverLogo: mediumHover,
    url: 'https://medium.com/@aceglobalexchange'
  },
  {
    id: 5,
    title: 'more',
    logo: more,
    hoverLogo: moreHover,
    url: 'https://linktr.ee/ace_global'
  }
])
</script>

<style lang="scss">
@import '../../../assets/scss/index.scss';

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  background: $color_gray_80;
  padding: 48px 0 0 0;
  z-index: 100px;
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
          @include font('Heading3', #fff);
        }
        a.item-li {
          display: block;
          text-decoration: none;
          margin-top: 16px;
          @include font('Body1-Reg', $color_gray_60);
        }
        .shareFootList {
          display: flex;
          .normal {
            display: block;
          }
          .active {
            display: none;
          }
          a:hover {
            .social-icon {
              height: 30px;
              margin: 16px 20px 10px 0;
              cursor: pointer;
            }
            .normal {
              display: none;
            }
            .active {
              display: block;
            }
          }
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
      margin-top: 8px;
      .collapse-title {
        padding-left: 16px;
        @include font('Heading3', #fff);
      }
      .item-li {
        display: block;
        margin-bottom: 10px;
        margin-top: 16px;
        padding: 0 16px;
        @include font('Body1-Reg', $color_gray_60);
      }
    }
    .social-media {
      padding: 0 16px;
      .label {
        @include font('Heading3', #fff);
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
    margin-bottom: 32px;
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
    @include font('Body2-Reg', #fff);
  }
}

// pad
@include pad {
  .footer {
    padding: 32px 0 0 0;
    .footer-container {
      display: none;
    }
    .footer-container-mobile {
      display: block;
    }
    .titles {
      margin-bottom: 0px;
      padding-left: 16px;
      .logoFootTitle {
        width: 150px;
        height: 50px;
      }
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
    }
  }
}
</style>

<style scoped lang="scss">
.footer {
  & {
    ::v-deep(.el-collapse-item__wrap) {
      background: none;
      border: none;
    }
    ::v-deep(.el-collapse-item__content) {
      padding-bottom: 10px;
    }
    ::v-deep(.el-collapse) {
      .el-collapse-item {
        padding: 0;
      }
      --el-collapse-header-height: 45px;
    }
    ::v-deep(.el-collapse-item__header) i {
      color: white;
    }
    ::v-deep(.el-collapse-item__header) {
      padding: 0;
      background: none;
      border: none;
    }
    ::v-deep(.el-collapse-item__arrow) {
      margin-right: 16px;
    }
  }
}
</style>
