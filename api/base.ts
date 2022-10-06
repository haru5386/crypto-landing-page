import { useFetchData } from '~~/composables/fetch'

export const getBaseData = () => {
  return useFetchData.post('fe-ex-api/common/public_info_v4')
}

export const getUserInfo = () => {
  return useFetchData.post('fe-ex-api/common/user_info')
}

export const getNoReadMsg = () => {
  return useFetchData.post('fe-ex-api/message/v4/get_no_read_message_count', {})
}
