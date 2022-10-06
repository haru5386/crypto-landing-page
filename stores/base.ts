import { defineStore } from 'pinia'
import { getBaseData, getUserInfo, getNoReadMsg } from '@/api/base'

export const useBaseStore = defineStore('useBaseStore', () => {
  // state

  const baseData = ref(null)
  const userData = ref(null)
  const isLogin = ref(false)
  const wsUrl = ref('')
  const noReadMsg = ref(null)
  const timer = ref(0)

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

  // action
  const BASE_DATA_INIT = async () => {
    const data = await getBaseData()
    baseData.value = { ...data.data }
    wsUrl.value = data.data.market.wsUrl
  }
  const USER_DATA_INIT = async () => {
    const data = await getUserInfo()
    userData.value = { ...data.data }
    // 登入狀態
    isLogin.value = !!data.data
  }
  const NO_READ_MSG = async () => {
    clearInterval(timer.value)
    const data = await getNoReadMsg()
    noReadMsg.value = { ...data.data }
    timer.value = window.setInterval(async () => {
      const data = await getNoReadMsg()
      noReadMsg.value = { ...data.data }
    }, 10000)
  }

  return {
    BASEDATA,
    USERDATA,
    ISLOGIN,
    WSURL,
    NOREADMSG,
    BASE_DATA_INIT,
    USER_DATA_INIT,
    NO_READ_MSG
  }
})
