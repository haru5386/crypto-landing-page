import { useGtm as useVueGTM } from '@gtm-support/vue-gtm'

// 可在頁面中使用 const $gtm = useGtm()
export const useGTM = () => {
  const gtm = useVueGTM()
  return gtm
}
