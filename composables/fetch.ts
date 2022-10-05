//  types
enum AsyncApiMethod {
  get = 'get',
  post = 'post',
  put = 'pust',
  delete = 'delete'
}

const token: string = process.server ? '' : useCookie('token').value
const lang: string = process.server ? '' : useCookie('lan').value

// API 基礎設定
const fetchData = (reqUrl:string, method:AsyncApiMethod, params?:any) => {
  const runtimeConfig = useRuntimeConfig()
  const options = {
    baseURL: runtimeConfig.public.ENV_API,
    method,
    params,
    server: false,
    headers: {
    // token
      'exchange-token': token,
      // 語系
      'exchange-language': lang || 'en_US'
    }
  }
  return $fetch(reqUrl, options)
}

export const useFetchData = new class getData {
  get (url: string, params?: any): Promise<any> {
    return fetchData(url, AsyncApiMethod.get, params)
  }

  post (url: string, params?: any): Promise<any> {
    return fetchData(url, AsyncApiMethod.post, params)
  }

  put (url: string, body?: any): Promise<any> {
    return fetchData(url, AsyncApiMethod.put, body)
  }

  delete (url: string, body?: any): Promise<any> {
    return fetchData(url, AsyncApiMethod.delete, body)
  }
}()
