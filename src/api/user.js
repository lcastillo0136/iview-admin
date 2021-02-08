import axios from '@/libs/api.request'

export const login = ({ user, password, remember }) => {
  const data = {
    user,
    password,
    remember
  }
  return axios.request({
    url: 'users/login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'users/getData',
    headers: { Authorization: `Bearer ${token}` },
    method: 'post'
  })
}

export const getPermissions = ({ token, userId }) => {
  return axios.request({
    url: `ManagePermission/ByUserId/${userId}`,
    headers: { Authorization: `Bearer ${token}` },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'users/logout',
    headers: { Authorization: `Bearer ${token}` },
    method: 'post'
  })
}

export const getUnreadCount = () => {
  // return axios.request({
  //   url: 'message/count',
  //   method: 'get'
  // })
  return new Promise(() => {})
}

export const getMessage = () => {
  return axios.request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const getUsersList = ({ token, search }) => {
  return axios.request({
    url: `users/list`,
    headers: { Authorization: `Bearer ${token}` },
    data: { search },
    method: 'post'
  })
}

export const abortRequest = () => {
  axios.abort()
}
