// 瀏覽器端呼叫api
import { useFetchData } from '~~/composables/fetch'
// import { HeaderInfo } from '@/types/interface/base.interface'

// 伺服器端呼叫api
import { useAsyncFetchData } from '~~/composables/asyncFetch'

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

// 取得 Header & Footer 設定
export const getHeadAndFooterApi = (data:any) => {
  return useAsyncFetchData.post('fe-ex-api/common/footer_and_header', data)
}
