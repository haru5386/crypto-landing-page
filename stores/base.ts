import { defineStore } from 'pinia'
import { computed, reactive, ref, UnwrapNestedRefs } from 'vue'
import { getBaseDataApi, getNoReadMsgApi, getIndexDataApi } from '@/api/base'
import { Banner, Notice } from '@/types/interface/base.interface'

export const useBaseStore = defineStore('baseStore', () => {
  // state
  const baseData = ref(null)
  const wsUrl = ref('')
  const noReadMsg = ref(null)
  const timer = ref(0)
  const banner:UnwrapNestedRefs<Banner[]> = reactive([])
  const noticeInfoList:UnwrapNestedRefs<Notice[]> = reactive([])

  // getter
  const BASEDATA = computed(() => {
    return baseData.value
  })

  const WSURL = computed(() => {
    return wsUrl.value
  })
  const NOREADMSG = computed(() => {
    return noReadMsg.value
  })
  const BANNER = computed(() => {
    return banner
  })
  const NOTICEINFOLIST = computed(() => {
    return noticeInfoList
  })

  // action
  const BASE_DATA_INIT = async () => {
    const data = await getBaseDataApi()
    baseData.value = { ...data.data }
    // wsUrl.value = data.data.market.wsUrl
  }
  const NO_READ_MSG = async () => {
    clearInterval(timer.value)
    const data = await getNoReadMsgApi()
    noReadMsg.value = { ...data.data }
    timer.value = window.setInterval(async () => {
      const data = await getNoReadMsgApi()
      noReadMsg.value = { ...data.data }
    }, 10000)
  }
  const INDEX_DATA = async () => {
    const data = await getIndexDataApi()
    banner.push(...data.data.cmsAdvertList)
    noticeInfoList.push(...data.data.noticeInfoList)
  }

  return {
    BASEDATA,
    WSURL,
    NOREADMSG,
    BANNER,
    NOTICEINFOLIST,
    BASE_DATA_INIT,
    NO_READ_MSG,
    INDEX_DATA
  }
})
