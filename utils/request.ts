import { _AsyncData } from 'nuxt/dist/app/composables/asyncData'

const baseUrl = 'https://www.metacoin.is/'
const option = {
  headers: { 'exchange-token': '123123' }
}

const fetch = (url: string, options?: any): Promise<any> => {
  const reqUrl = baseUrl + url // 你的接口地址
  return new Promise((resolve, reject) => {
    useFetch(reqUrl, { ...options, ...option }).then(({ data, error }: _AsyncData<any, any>) => {
      if (error.value) {
        reject(error.value)
        return
      }
      const value = data.value
      if (!value) {
        throw createError({
          statusCode: 500,
          statusMessage: reqUrl,
          message: '後端報錯'
        })
      } else {
        resolve(value)
      }
    }).catch((err: any) => {
      console.log(err)
      reject(err)
    })
  })
}

export default new class Http {
  get (url: string, params?: any): Promise<any> {
    return fetch(url, { method: 'get', params })
  }

  post (url: string, params?: any): Promise<any> {
    return fetch(url, { method: 'post', params })
  }

  put (url: string, body?: any): Promise<any> {
    return fetch(url, { method: 'put', body })
  }

  delete (url: string, body?: any): Promise<any> {
    return fetch(url, { method: 'delete', body })
  }
}()
