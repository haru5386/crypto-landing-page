import { defineStore } from 'pinia'
import { UnwrapNestedRefs } from 'vue'
import { getBaseDataApi, getUserInfoApi, getNoReadMsgApi, getIndexDataApi } from '@/api/base'
import { Banner, Notice } from '@/types/interface/base.interface'

export const useBaseStore = defineStore('useBaseStore', () => {
  // state

  const baseData = ref(null)
  const userData = ref(null)
  const isLogin = ref(false)
  const wsUrl = ref('')
  const noReadMsg = ref(null)
  const timer = ref(0)
  const banner:UnwrapNestedRefs<Banner[]> = reactive([])
  const noticeInfoList:UnwrapNestedRefs<Notice[]> = reactive([])

  // getter
  const BASEDATA = computed(() => {
    return baseData.value
  })
  const USERDATA = computed(() => {
    return userData.value
  })
  const ISLOGIN = computed(() => {
    return isLogin.value
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
    wsUrl.value = data.data.market.wsUrl
  }
  const USER_DATA_INIT = async () => {
    const data = await getUserInfoApi()
    userData.value = { ...data.data }
    // 登入狀態
    isLogin.value = !!data.data
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
    USERDATA,
    ISLOGIN,
    WSURL,
    NOREADMSG,
    BANNER,
    NOTICEINFOLIST,
    BASE_DATA_INIT,
    USER_DATA_INIT,
    NO_READ_MSG,
    INDEX_DATA
  }
})
