import axios from '@/libs/api.request'

export const getResources = (token) => {
  return axios.request({
    url: 'ManagePermission',
    headers: { Authorization: `Bearer ${token}` },
    method: 'get'
  })
}

export const savePermission = (token, body) => {
  return axios.request({
    url: 'ManagePermission',
    headers: { Authorization: `Bearer ${token}` },
    data: body,
    method: 'POST'
  })
}

export const getPermissionList = (token) => {
  return axios.request({
    url: 'ManagePermission/getPermissions',
    headers: { Authorization: `Bearer ${token}` },
    method: 'get'
  })
}
