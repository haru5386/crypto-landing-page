// 瀏覽器端呼叫api
import { useFetchData } from '~~/composables/fetch'
import { NoticeListParams } from '@/types/interface/base.interface'

// 伺服器端呼叫api
import { useAsyncFetchData } from '~~/composables/asyncFetch'

export const getBaseDataApi = () => {
  return useFetchData.post('/fe-ex-api/common/public_info_v4')
}

export const getUserInfoApi = () => {
  return useFetchData.post('/fe-ex-api/common/user_info')
}

export const getNoReadMsgApi = () => {
  return useFetchData.post('/fe-ex-api/message/v4/get_no_read_message_count', {})
}

export const getIndexDataApi = () => {
  return useFetchData.post('/fe-ex-api/common/index')
}
export const getNoticeInfoListAPI = (params: NoticeListParams) => {
  return useFetchData.post('/fe-ex-api/notice/notice_info_list', params)
}

// 取得 Header & Footer 設定
export const getHeadAndFooterApi = () => {
  return useFetchData.post('/fe-ex-api/common/footer_and_header')
}

// 要在伺服器獲取語言
export const getAsyncBaseDataApi = () => {
  return useAsyncFetchData.post('/fe-ex-api/common/public_info_v4')
}
