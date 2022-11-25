import { defineStore } from 'pinia'
import { computed, ref, Ref } from 'vue'
import { getUserInfoApi, getNoReadMsgApi } from '@/api/base'
import { NoReadMsg, UserData } from '~~/types/interface/user.interface'
export const useUserStore = defineStore('userStore', () => {
  // state
  const userData: Ref<UserData | null> = ref(null) // 使用者資料
  const isLogin: Ref<boolean> = ref(false) // 是否登入

  const noReadMsg :Ref<NoReadMsg | null> = ref(null) // 通知資訊
  const timer = ref(0)

  // getter
  const USERDATA = computed(() => {
    return userData.value
  })
  const ISLOGIN = computed(() => {
    return isLogin.value
  })
  const NOREADMSG = computed(() => {
    return noReadMsg.value
  })

  // action
  const USER_DATA_INIT = async () => {
    const data = await getUserInfoApi()
    userData.value = { ...data.data }
    // 登入狀態
    isLogin.value = data.data !== null
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

  const LOGOUT = () => {
    userData.value = null
    // 登入狀態
    isLogin.value = false
    useCookie('token').value = ''
  }

  return {
    ISLOGIN,
    USERDATA,
    NOREADMSG,
    NO_READ_MSG,
    USER_DATA_INIT,
    LOGOUT
  }
})
