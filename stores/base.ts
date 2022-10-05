import { defineStore } from 'pinia'
import { getBaseData, getUserInfo } from '@/api/base'
export const useBaseStore = defineStore('base', () => {
  // state

  const header = ref(0)

  const BaseDataInit = async () => {
    const { data: basedata } = await getBaseData()
    console.log('basedata', basedata.value)
  }
  const UserInfoInit = async () => {
    const { data: userInfo } = await getUserInfo()
    console.log('userInfo', userInfo.value)
  }

  return {
    header,
    BaseDataInit,
    UserInfoInit
  }
})
