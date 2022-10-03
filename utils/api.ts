import Http from './request'

export const config1 = () => {
  return Http.post('fe-ex-api/common/public_info_v4')
}
