//  types
enum AsyncApiMethod {
  get = 'get',
  post = 'post',
  put = 'pust',
  delete = 'delete'
}

// const config = useRuntimeConfig()
// const runtimeConfig = useRuntimeConfig()
// const baseURL = runtimeConfig.public.ENV_API

// console.log(config.public.apiBase)

const token: string = process.server ? '' : useCookie('token').value
const lang: string = process.server ? '' : useCookie('lan').value

// API 基礎設定
const fetchData = (reqUrl:string, method:AsyncApiMethod, params?:any) => {
  const options = {
    // baseURL,
    method,
    params,
    server: false,
    headers: {
    // token
      'exchange-token': token,
      // 語系
      'exchange-language': lang || 'zh_CN'
    }
  }
  return useFetch(reqUrl, options)
}

export default new class getData {
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
