import axios from 'axios'
import store from '@/store'
import RequestError from '@/libs/RequestError'
// import { Spin } from 'iview'
const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig (token) {
    const config = {
      baseURL: this.baseUrl,
      cancelToken: token,
      headers: {
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      config.headers['Accept-Language'] = store.state.app.local
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const { data, status } = res
      return { response: data, status }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      addErrorLog(errorInfo)
      // if (error && error.response && error.response.data && error.response.data.message) {
      //   return Promise.reject(new Error({ ...error.response.data }))
      // } else if (error && error.response && error.response && error.statusText) {
      //   return Promise.reject(error.response.statusText)
      // } else if (error && error.message) {
      //   return Promise.reject(error.message)
      // } else {
      //   return Promise.reject(error)
      // }
      return Promise.reject(new RequestError(error))
    })
  }
  request (options) {
    const instance = axios.create()
    this.cancelTokenSource = axios.CancelToken.source()

    options = Object.assign(this.getInsideConfig(this.cancelTokenSource.token), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
  abort () {
    this.cancelTokenSource && this.cancelTokenSource.cancel()
  }
}
export default HttpRequest
