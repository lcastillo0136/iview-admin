import HttpRequest from '@/libs/axios'
import config from '@/config'
const baseUrl = (config.baseUrl && config.baseUrl[process.env.NODE_ENV]) || config.baseUrl.production

const axios = new HttpRequest(baseUrl)
export default axios
