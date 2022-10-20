import { ElMessage } from 'element-plus'
import i18n from '../utils/i18n'
const { t } = i18n.global
//  types
enum AsyncApiMethod {
  get = 'get',
  post = 'post',
  put = 'put',
  delete = 'delete'
}

const fetchAsyncData = (reqUrl:string, method:AsyncApiMethod, data?:any) => {
  const runtimeConfig = useRuntimeConfig()
  const options = {
    baseURL: runtimeConfig.public.ENV_API,
    method,
    server: false,
    headers: {
      // 語系
      'exchange-language': data && data.lang ? data.lang : 'en_US'
    }
  }
  if (method === AsyncApiMethod.get) {
    return useAsyncData('data', () => $fetch(reqUrl, { ...options, params: data })
      .catch(() => {
        ElMessage.error(t('伺服器錯誤'))
      }))
  }
  return useAsyncData('data', () => $fetch(reqUrl, { ...options, body: data })
    .catch(() => {
      ElMessage.error(t('伺服器錯誤'))
    }))
}

export const useAsyncFetchData = new class getData {
  get (url: string, params?: any): Promise<any> {
    return fetchAsyncData(url, AsyncApiMethod.get, params)
  }

  post (url: string, body?:any): Promise<any> {
    return fetchAsyncData(url, AsyncApiMethod.post, body)
  }

  put (url: string, body?:any): Promise<any> {
    return fetchAsyncData(url, AsyncApiMethod.put, body)
  }

  delete (url: string, body?:any): Promise<any> {
    return fetchAsyncData(url, AsyncApiMethod.delete, body)
  }
}()
