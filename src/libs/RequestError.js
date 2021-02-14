export default class RequestError extends Error {
  data = null
  constructor (request) {
    super(request.message.toString())
    if (request && request.response && request.response.data) {
      this.data = request.response.data.data
      this.message = request.response.data.message
    } else if (request && request.response && request.statusText) {
      this.data = null
      this.message = request.statusText
    }
  }
}
