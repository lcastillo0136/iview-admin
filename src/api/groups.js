import axios from '@/libs/api.request'

export const getUsersGroups = (token, pagination) => {
  return axios.request({
    url: 'UserGroups',
    headers: { Authorization: `Bearer ${token}` },
    params: pagination,
    method: 'GET'
  })
}

export const getPermissionsGroups = (token, group_id) => {
  return axios.request({
    url: `ManagePermission/ByGroupId/${group_id}`,
    headers: { Authorization: `Bearer ${token}` },
    method: 'GET'
  })
}

export const saveUserGroup = (token, body) => {
  return axios.request({
    url: 'UserGroups',
    headers: { Authorization: `Bearer ${token}` },
    data: body,
    method: 'POST'
  })
}

export const updateUserGroup = (token, body) => {
  return axios.request({
    url: `UserGroups/${body.id}`,
    headers: { Authorization: `Bearer ${token}` },
    data: body,
    method: 'PATCH'
  })
}

export const deleteUserGroup = (token, body) => {
  return axios.request({
    url: `UserGroups/${body.id}`,
    headers: { Authorization: `Bearer ${token}` },
    method: 'DELETE'
  })
}
