import { defineStore } from 'pinia'
import { computed, ref, Ref } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'
import { getUserInfoApi, getNoReadMsgApi } from '@/api/base'
import { NoReadMsg, UserData } from '~~/types/interface/user.interface'
export const useUserStore = defineStore('userStore', () => {
  // state
  const isLoading : Ref<boolean> = ref(true)
  const userData: Ref<UserData | null> = ref(null) // 使用者資料
  const isLogin: Ref<boolean> = ref(false) // 是否登入

  const noReadMsg :Ref<NoReadMsg | null> = ref(null) // 通知資訊
  const timer = ref(0)
  const runtimeConfig = useRuntimeConfig()

  // getter
  const ISLOADING_USERDATA = computed(() => {
    return isLoading.value
  })
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
    isLoading.value = true
    const data = await getUserInfoApi()
    userData.value = { ...data.data }
    // 登入狀態
    isLogin.value = data.data !== null
    isLoading.value = false
    clearInterval(timer.value)
    NO_READ_MSG()
  }

  const NO_READ_MSG = async () => {
    if (isLogin.value) {
      const data = await getNoReadMsgApi()
      noReadMsg.value = { ...data.data }
      timer.value = window.setInterval(async () => {
        const data = await getNoReadMsgApi()
        noReadMsg.value = { ...data.data }
      }, 10000)
    } else {
      clearInterval(timer.value)
    }
  }

  const LOGOUT = () => {
    userData.value = null
    // 登入狀態
    isLogin.value = false
    const cookie = useCookies(['token'])
    cookie.remove('token', {
      domain: runtimeConfig.public.DOMAIN_NAME
    })
  }

  return {
    ISLOGIN,
    ISLOADING_USERDATA,
    USERDATA,
    NOREADMSG,
    NO_READ_MSG,
    USER_DATA_INIT,
    LOGOUT
  }
})
