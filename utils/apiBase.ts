const baseUrl = 'https://www.metacoin.is/'
const options = {
  baseURL: baseUrl,
  headers: {
    token: '12fff3'
  }
}
const http = {
  // get (url:string) {
  //   return useFetch(url, { ...options, method: 'get', params: {} })
  // }
  post (url:string) {
    return useFetch(url, { ...options, method: 'post' })
  }
  // put (url, params = {}) {
  //   return axios({
  //     url,
  //     params,
  //     method: 'PUT'
  //   })
  // },
  // delete (url, params = {}) {
  //   return axios({
  //     url,
  //     params,
  //     method: 'DELETE'
  //   })
  // },
  // postJson (url, params = {}) {
  //   return axios({
  //     url,
  //     params,
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     isJson: true
  //   })
  // },
  // upload (url, file, key = 'file') {
  //   const data = new FormData()
  //   data.append(key, file)
  //   axios({
  //     url,
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  // }
}
export default http
