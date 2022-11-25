import { defineStore } from 'pinia'
import { computed, ref, Ref } from 'vue'
import { getUserInfoApi } from '@/api/base'
import { UserData } from '~~/types/interface/user.interface'

export const useUserStore = defineStore('userStore', () => {
  // state
  const userData: Ref<UserData | undefined | null> = ref() // 使用者資料
  const isLogin: Ref<boolean> = ref(false) // 是否登入

  // getter
  const USERDATA = computed(() => {
    return userData.value
  })
  const ISLOGIN = computed(() => {
    return isLogin.value
  })

  // action
  const USER_DATA_INIT = async () => {
    const data = await getUserInfoApi()
    userData.value = { ...data.data }
    // 登入狀態
    isLogin.value = data.data !== null
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
    USER_DATA_INIT,
    LOGOUT
  }
})
