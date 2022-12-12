import { ElMessage } from 'element-plus'
import { useCookies } from '@vueuse/integrations/useCookies'
import i18n from '../utils/i18n'
const { t } = i18n.global
//  types
enum AsyncApiMethod {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete'
}

const cookie = useCookies()
const token: string = process.server ? '' : cookie.get('token')
const lang: string = process.server ? '' : cookie.get('lan')

// API 基礎設定
const fetchData = (reqUrl:string, method:AsyncApiMethod, data?:any) => {
  const runtimeConfig = useRuntimeConfig()
  const options = {
    baseURL: runtimeConfig.public.ENV_API,
    method,
    server: false,
    headers: {
      // token
      'exchange-token': token,
      // 語系
      'exchange-language': lang || 'en_US'
    }
  }
  if (method === AsyncApiMethod.get) {
    return $fetch(reqUrl, { ...options, params: data })
      .catch(() => {
        ElMessage.error(t('伺服器錯誤'))
      })
  }
  return $fetch(reqUrl, { ...options, body: data })
    .catch(() => {
      ElMessage.error(t('伺服器錯誤'))
    })
}

export const useFetchData = new class getData {
  get (url: string, params?: any): Promise<any> {
    return fetchData(url, AsyncApiMethod.get, params)
  }

  post (url: string, body?:any): Promise<any> {
    return fetchData(url, AsyncApiMethod.post, body)
  }

  put (url: string, body?:any): Promise<any> {
    return fetchData(url, AsyncApiMethod.put, body)
  }

  delete (url: string, body?:any): Promise<any> {
    return fetchData(url, AsyncApiMethod.delete, body)
  }
}()
