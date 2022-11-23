<script lang="ts" setup>
import {
  ElCarousel,
  ElCarouselItem,
  ElIcon,
  ElCollapse,
  ElCollapseItem
} from 'element-plus'
import { CaretRight } from '@element-plus/icons-vue'
// import { Ref } from 'vue'
const activeIndx = ref(0)
const carouselBlock4 = ref<any | null>(null)
// const { t } = useLang()
const setActiveItem = (idx: number) => {
  carouselBlock4.value?.setActiveItem(idx)
  activeIndx.value = idx
}
</script>

<template>
  <div
    id="block4"
    class="block"
  >
    <img
      class="block4-bg rotate-ani"
      src="../assets/images/block4-img.webp"
    >

    <div class="container">
      <div class="section desktop">
        <div class="title">
          ACE GLOBAL LAUNCHPAD
        </div>
        <div class="carousel-labels">
          <div class="tab-items">
            <div
              class="tab-item"
              :class="{ active: activeIndx === 0 }"
              @click="setActiveItem(0)"
            >
              <el-icon
                class="icon"
                color="#e0b854"
                size="24px"
              >
                <CaretRight />
              </el-icon>
              Yield Farming
            </div>
            <div
              class="tab-item"
              :class="{ active: activeIndx === 1 }"
              @click="setActiveItem(1)"
            >
              <el-icon
                class="icon"
                color="#e0b854"
                size="24px"
              >
                <CaretRight />
              </el-icon>
              ACE Global Launchpad
            </div>
            <div
              class="tab-item"
              :class="{ active: activeIndx === 2 }"
              @click="setActiveItem(2)"
            >
              <el-icon
                class="icon"
                color="#e0b854"
                size="24px"
              >
                <CaretRight />
              </el-icon>
              Perpetual contracts trading
            </div>
            <div
              class="tab-item"
              :class="{ active: activeIndx === 3 }"
              @click="setActiveItem(3)"
            >
              <el-icon
                class="icon"
                color="#e0b854"
                size="24px"
              >
                <CaretRight />
              </el-icon>
              Copy Trading
            </div>
            <div
              class="tab-item"
              :class="{ active: activeIndx === 4 }"
              @click="setActiveItem(4)"
            >
              <el-icon
                class="icon"
                color="#e0b854"
                size="24px"
              >
                <CaretRight />
              </el-icon>
              ACE Global Referral Program
            </div>
            <div
              class="tab-item"
              :class="{ active: activeIndx === 5 }"
              @click="setActiveItem(5)"
            >
              <el-icon
                class="icon"
                color="#e0b854"
                size="24px"
              >
                <CaretRight />
              </el-icon>
              NFT MarketPlace
            </div>
          </div>
          <el-carousel
            ref="carouselBlock4"
            height="200px"
            direction="vertical"
            :autoplay="false"
          >
            <!-- 1 -->
            <el-carousel-item>
              <div class="carousel-title">
                What is Yield Farming?
              </div>
              <div class="carousel-des">
                ACE Global Exchange provides the one-stop hub where you can see
                all your earning possibilities open for you and the
                cryptocurrency you hold. Great options if you are a HODLer.
              </div>
              <div class="carousel-title">
                How does it work?
              </div>
              <div class="carousel-des">
                Simply choose from dozens of available products, and transfer
                your cryptocurrencies into your chosen product.
              </div>
            </el-carousel-item>
            <!-- 2 -->
            <el-carousel-item>
              <div class="carousel-title">
                What is ACE Global Launchpad?
              </div>
              <div class="carousel-des">
                The ACE Global Launchpad is the exclusive token launch platform,
                aiming to support the crypto ecosystem by offering first-look
                access to quality projects to all users.
              </div>
              <div class="carousel-title">
                How does it work?
              </div>
              <div class="carousel-des">
                The Launchpad allows AGET holders to commit an amount of AGET
                towards a Token sale. The final allocation of the new token is
                determined by the ratio of their committed AGET against the
                total committed AGET by all participating users.
              </div>
            </el-carousel-item>
            <!-- 3 -->
            <el-carousel-item>
              <div class="carousel-title">
                What is a perpetual contract?
              </div>
              <div class="carousel-des">
                A perpetual contract is a crypto futures contract without an
                expiry date. Like a futures contract, a perpetual contract is a
                derivative that derives its value from the underlying crypto
                asset. Contract is a derivative that derives its value from the
                underlying crypto asset.
              </div>
              <div class="carousel-title">
                How does it work?
              </div>
              <div class="carousel-table">
                <div class="carousel-table-title">
                  Perpetual Futures
                </div>
                <div class="table-col">
                  <div class="left">
                    Margin Type
                  </div>
                  <div class="right">
                    Support USDT
                  </div>
                </div>
                <div class="table-col">
                  <div class="left">
                    Order Type
                  </div>
                  <div class="right">
                    Limit Order, Market Order, IOC, FOK, Maker only
                  </div>
                </div>
                <div class="table-col">
                  <div class="left">
                    Position Management
                  </div>
                  <div class="right">
                    Isolated Margin, Cross Margin
                  </div>
                </div>
                <div class="table-col">
                  <div class="left">
                    Trading Fee
                  </div>
                  <div class="right">
                    Taker (executed instantly):0.075% <br>
                    Maker (pending orders):0.025%
                  </div>
                </div>
                <div class="table-col">
                  <div class="left">
                    Leverage
                  </div>
                  <div class="right">
                    1-125x
                  </div>
                </div>
              </div>
            </el-carousel-item>
            <!-- 4 -->
            <el-carousel-item>
              <div class="carousel-title">
                What is Copy Trading?
              </div>
              <div class="carousel-des">
                Copy Trading is a feature that allows copiers to copy the trades
                of multiple elite traders by automatically aligning with
                traders' trading activities and thus generating profits or
                losses. Copy trading saves users from the trouble of opening and
                closing positions and monitoring the market for themselves as
                all trades of the trader that they copy will be automatically
                copied.
              </div>
            </el-carousel-item>
            <!-- 5 -->
            <el-carousel-item>
              <div class="carousel-title">
                What is ACE Global Referral Program?
              </div>
              <div class="carousel-des">
                In the ACE Global referral program, you can invite your friends
                to ACE Global Exchange and get a portion of their trading fees
                (including spot and futures trading) as a commission.
              </div>
            </el-carousel-item>
            <!-- 6 -->
            <el-carousel-item>
              <div class="carousel-title">
                What is NFT MarketPlace
              </div>
              <div class="carousel-des">
                The NFT marketplace is a marketplace that features all forms of
                digital artworks and collectibles, the ACE Global NFT
                marketplace provides a high liquidity platform for users to
                launch and trade NFTs.
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="section phone">
        <div class="title">
          ACE GLOBAL <br>
          LAUNCHPAD
        </div>
        <el-collapse accordion>
          <el-collapse-item name="0">
            <template #title>
              <el-icon
                class="icon"
                color="#e0b854"
                size="32px"
              >
                <CaretRight />
              </el-icon>
              Yield Farming
            </template>
            <div class="carousel-title">
              What is Yield Farming?
            </div>
            <div class="carousel-des">
              ACE Global Exchange provides the one-stop hub where you can see
              all your earning possibilities open for you and the cryptocurrency
              you hold. Great options if you are a HODLer.
            </div>
            <div class="carousel-title">
              How does it work?
            </div>
            <div class="carousel-des">
              Simply choose from dozens of available products, and transfer your
              cryptocurrencies into your chosen product.
            </div>
          </el-collapse-item>
          <el-collapse-item name="1">
            <template #title>
              <el-icon
                class="icon"
                color="#e0b854"
                size="32px"
              >
                <CaretRight />
              </el-icon>
              ACE Global Launchpad
            </template>
            <div class="carousel-title">
              What is ACE Global Launchpad?
            </div>
            <div class="carousel-des">
              The ACE Global Launchpad is the exclusive token launch platform,
              aiming to support the crypto ecosystem by offering first-look
              access to quality projects to all users.
            </div>
            <div class="carousel-title">
              How does it work?
            </div>
            <div class="carousel-des">
              The Launchpad allows AGET holders to commit an amount of AGET
              towards a Token sale. The final allocation of the new token is
              determined by the ratio of their committed AGET against the total
              committed AGET by all participating users.
            </div>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template #title>
              <el-icon
                class="icon"
                color="#e0b854"
                size="32px"
              >
                <CaretRight />
              </el-icon>
              Perpetual contracts trading
            </template>
            <div class="carousel-title">
              What is a perpetual contract?
            </div>
            <div class="carousel-des">
              A perpetual contract is a crypto futures contract without an
              expiry date. Like a futures contract, a perpetual contract is a
              derivative that derives its value from the underlying crypto
              asset. Contract is a derivative that derives its value from the
              underlying crypto asset.
            </div>
            <div class="carousel-title">
              How does it work?
            </div>
            <div class="carousel-table">
              <div class="carousel-table-title">
                Perpetual Futures
              </div>
              <div class="table-col">
                <div class="left">
                  Margin Type
                </div>
                <div class="right">
                  Support USDT
                </div>
              </div>
              <div class="table-col">
                <div class="left">
                  Order Type
                </div>
                <div class="right">
                  Limit Order, Market Order, IOC, FOK, Maker only
                </div>
              </div>
              <div class="table-col">
                <div class="left">
                  Position Management
                </div>
                <div class="right">
                  Isolated Margin, Cross Margin
                </div>
              </div>
              <div class="table-col">
                <div class="left">
                  Trading Fee
                </div>
                <div class="right">
                  Taker (executed instantly):0.075% <br>
                  Maker (pending orders):0.025%
                </div>
              </div>
              <div class="table-col">
                <div class="left">
                  Leverage
                </div>
                <div class="right">
                  1-125x
                </div>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item name="3">
            <template #title>
              <el-icon
                class="icon"
                color="#e0b854"
                size="32px"
              >
                <CaretRight />
              </el-icon>
              Copy Trading
            </template>
            <div class="carousel-title">
              What is Copy Trading?
            </div>
            <div class="carousel-des">
              Copy Trading is a feature that allows copiers to copy the trades
              of multiple elite traders by automatically aligning with traders'
              trading activities and thus generating profits or losses. Copy
              trading saves users from the trouble of opening and closing
              positions and monitoring the market for themselves as all trades
              of the trader that they copy will be automatically copied.
            </div>
          </el-collapse-item>
          <el-collapse-item name="4">
            <template #title>
              <el-icon
                class="icon"
                color="#e0b854"
                size="32px"
              >
                <CaretRight />
              </el-icon>
              ACE Global Referral Program
            </template>
            <div class="carousel-title">
              What is ACE Global Referral Program?
            </div>
            <div class="carousel-des">
              In the ACE Global referral program, you can invite your friends to
              ACE Global Exchange and get a portion of their trading fees
              (including spot and futures trading) as a commission.
            </div>
          </el-collapse-item>
          <el-collapse-item name="5">
            <template #title>
              <el-icon
                class="icon"
                color="#e0b854"
                size="32px"
              >
                <CaretRight />
              </el-icon>
              NFT MarketPlace
            </template>
            <div class="carousel-title">
              What is NFT MarketPlace
            </div>
            <div class="carousel-des">
              The NFT marketplace is a marketplace that features all forms of
              digital artworks and collectibles, the ACE Global NFT marketplace
              provides a high liquidity platform for users to launch and trade
              NFTs.
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// desktop
@import '@/assets/scss/index.scss';

#block4 {
  z-index: 1;
  position: relative;
  overflow: hidden;
  .block4-bg {
    width: 80%;
    position: absolute;
    top: 700px;
    left: 50%;
    margin-left: -40%;
    z-index: -1;
    @include mobile {
      width: 120%;
      top: auto;
      left: 0;
      margin-left: -10%;
      bottom: -300px;
    }
  }
}
.container {
  .section {
    padding-top: 136px;
    &.phone {
      display: none;
    }
    .title {
      width: 100%;
      color: white;
      font-family: Barlow;
      font-size: 52px;
      font-weight: bold;
      text-align: left;
      margin-bottom: 84px;
      @include pad {
        font-size: 34px;
        margin-bottom: 69px;
      }
    }

    .carousel-labels {
      width: 100%;
      height: 700px;
      display: flex;
      justify-content: space-between;
      .tab-items {
        width: 30%;
        .tab-item {
          font-family: Barlow;
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 40px;
          cursor: pointer;
          display: flex;
          @include pad {
            margin-bottom: 32px;
          }
          .icon {
            display: none;
            margin-right: 5px;
          }
          &.active {
            color: rgba(255, 255, 255, 0.43);
            .icon {
              display: block;
            }
          }
        }
      }
      .el-carousel {
        width: 70%;
        .el-carousel__container {
          height: 950px;
          .el-carousel__item {
            height: 950px;
            .carousel-title {
              font-family: Barlow;
              font-size: 24px;
              font-weight: bold;
              color: #fff;
              line-height: 1.5;
            }
            .carousel-des {
              font-family: Barlow;
              font-size: 20px;
              font-weight: normal;
              color: #fff;
              margin-top: 13px;
              line-height: 1.6;
              opacity: 0.7;
              margin-bottom: 15px;
              @include pad {
                font-size: 18px;
              }
            }
            .carousel-table {
              color: #fff;
              width: 100%;
              margin-top: 24px;
              opacity: 0.7;
              @include pad {
                margin-top: 12px;
              }
              .carousel-table-title {
                width: 100%;
                text-align: center;
                font-family: Barlow;
                font-size: 10px;
                line-height: 3.2;
              }
              .table-col {
                display: flex;
                background-color: rgba(255, 255, 255, 0.1);
                padding: 15px 15px 15px 15px;
                @include pad {
                  font-size: 15px;
                }
                .left {
                  width: 40%;
                }
                .right {
                  flex: 1;
                }
              }
            }
          }
        }
      }

      // mobile
      @include pad {
        height: 900px;
        .tab-items {
          width: 40%;
        }
        .el-carousel {
          width: 60%;
        }
      }
    }

    // mobile
    @include pad {
      padding-top: 56px;
    }
  }
}
.rotate-ani {
  animation: rotation 60s infinite linear;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

// mobile
@include mobile {
  .container {
    .section {
      padding: 45px 26px;
      &.desktop {
        display: none;
      }
      &.phone {
        display: block;
      }

      .title {
        font-size: 27px;
        margin-bottom: 40px;
      }

      .carousel-title {
        font-family: Barlow;
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        line-height: 1.5;
      }
      .carousel-des {
        font-family: Barlow;
        font-size: 20px;
        font-weight: normal;
        color: #fff;
        margin-top: 13px;
        line-height: 1.6;
        opacity: 0.7;
        margin-bottom: 15px;
        @include pad {
          font-size: 18px;
        }
      }
      .carousel-table {
        color: #fff;
        width: 100%;
        margin-top: 24px;
        opacity: 0.7;
        @include pad {
          margin-top: 12px;
        }
        .carousel-table-title {
          width: 100%;
          text-align: center;
          font-family: Barlow;
          font-size: 10px;
          line-height: 3.2;
        }
        .table-col {
          display: flex;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 15px 15px 15px 15px;
          @include pad {
            font-size: 15px;
          }
          .left {
            width: 40%;
          }
          .right {
            flex: 1;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.el-carousel__indicators {
  display: none;
}

#block4 .el-collapse-item__header {
  background: none;
  font-family: Barlow;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  border: none;

  i {
    display: none;
    margin-right: 10px;
  }
  &.is-active {
    color: rgba(255, 255, 255, 0.43);
    .icon {
      display: block;
    }
  }
}

.el-collapse-item__content {
  padding: 16px;
}

.el-collapse {
  border: none;
}

.el-collapse-item {
  border: none;
}
</style>
