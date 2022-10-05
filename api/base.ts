import { useFetchData } from '~~/composables/fetch'

export const getBaseData = () => {
  return useFetchData.post('fe-ex-api/common/public_info_v4')
}

export const getUserInfo = () => {
  return useFetchData.post('fe-ex-api/common/user_info')
}
