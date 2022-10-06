import { useFetchData } from '~~/composables/fetch'

export const getBaseDataApi = () => {
  return useFetchData.post('fe-ex-api/common/public_info_v4')
}

export const getUserInfoApi = () => {
  return useFetchData.post('fe-ex-api/common/user_info')
}

export const getNoReadMsgApi = () => {
  return useFetchData.post('fe-ex-api/message/v4/get_no_read_message_count', {})
}

export const getIndexDataApi = () => {
  return useFetchData.post('fe-ex-api/common/index')
}
