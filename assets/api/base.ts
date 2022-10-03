import http from '../../utils/apiBase'

export const getBaseData = () => {
  console.log('http', http)
  return http.post('fe-ex-api/common/public_info_v4')
}
