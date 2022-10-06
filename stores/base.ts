import { defineStore } from 'pinia'
import { getBaseData, getUserInfo, getNoReadMsg } from '@/api/base'
export const useBaseStore = defineStore('useBaseStore', {
  // 對應 data
  state: () => ({
    baseData: null,
    userData: null,
    isLogin: false,
    wsUrl: '',
    noReadMsg: null,
    timer: 0
  }),
  getters: {
    BASEDATA: (state) => {
      return state.baseData
    },
    USERDATA: (state) => {
      return state.userData
    },
    ISLOGIN: (state) => {
      return state.isLogin
    },
    WSURL: (state) => {
      return state.wsUrl
    },
    NOREADMSG: (state) => {
      return state.noReadMsg
    }
  },
  // 對應 methods (物件形式)
  actions: {
    async BASE_DATA_INIT () {
      const data = await getBaseData()
      this.baseData = { ...data.data }
      this.wsUrl = data.data.market.wsUrl
    },
    async USER_DATA_INIT () {
      const data = await getUserInfo()
      this.userData = { ...data.data }
      // 登入狀態
      this.isLogin = !!data.data
    },
    async NO_READ_MSG () {
      clearInterval(this.timer)
      const data = await getNoReadMsg()
      this.noReadMsg = { ...data.data }
      this.timer = window.setInterval(async () => {
        const data = await getNoReadMsg()
        this.noReadMsg = { ...data.data }
      }, 10000)
    },
    STOP_FETCH_DATA () {
      window.clearInterval(this.timer)
    }

  }
})
// export const useBaseStore = defineStore('base', () => {
//   // state

//   // const header = ref(0)
//   // let baseData = reactive({})

//   // const BaseDataInit = async () => {
//   //   const { data: basedata } = await getBaseData()
//   //   baseData = basedata
//   //   console.log('basedata', baseData)
//   // }
//   // const UserInfoInit = async () => {
//   //   const { data: userInfo } = await getUserInfo()
//   //   console.log('userInfo', userInfo.value)
//   // }

//   // return {
//   //   header,
//   //   BaseDataInit,
//   //   UserInfoInit,
//   //   baseData
//   // }
// })
