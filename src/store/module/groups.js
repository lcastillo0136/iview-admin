import { getUsersGroups, getPermissionsGroups, saveUserGroup, updateUserGroup, deleteUserGroup } from '@/api/groups'
import { getToken } from '@/libs/util'
import router from '@/router'

export default {
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
    getUsersGroups ({ state, commit }, pagination) {
      return new Promise((resolve, reject) => {
        try {
          if (!getToken()) {
            router.push({
              name: 'login',
              params: {
                hasAccess: true
              }
            }).catch(() => {})
            reject(new Error('no_autorized'))
          }
          getUsersGroups(getToken(), pagination).then(result => {
            const response = result.response
            if (response.success) {
              resolve(response)
            } else {
              reject(response.message)
            }
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    },
    getPermissionsGroups ({ state, commit }, { group_id }) {
      return new Promise((resolve, reject) => {
        try {
          if (!getToken()) {
            router.push({
              name: 'login',
              params: {
                hasAccess: true
              }
            }).catch(() => {})
            reject(new Error('no_autorized'))
          }
          getPermissionsGroups(getToken(), group_id).then(result => {
            const response = result.response
            if (response.success) {
              resolve(response.data)
            } else {
              reject(response.message)
            }
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    },
    saveUserGroup ({ state, commit }, user_group) {
      return new Promise((resolve, reject) => {
        try {
          if (!getToken()) {
            router.push({
              name: 'login',
              params: {
                hasAccess: true
              }
            }).catch(() => {})
            reject(new Error('no_autorized'))
          }
          if (user_group.id > 0) {
            updateUserGroup(getToken(), user_group).then((result) => {
              const response = result.response
              if (response.success) {
                resolve(response.data)
              } else {
                reject(response.message)
              }
            }).catch((err) => {
              reject(err)
            })
          } else {
            saveUserGroup(getToken(), user_group).then((result) => {
              const response = result.response
              if (response.success) {
                resolve(response.data)
              } else {
                reject(response.message)
              }
            }).catch((err) => {
              reject(err)
            })
          }
        } catch (error) {
          reject(error)
        }
      })
    },
    deleteUserGroup ({ state, commit }, user_group) {
      return new Promise((resolve, reject) => {
        try {
          if (!getToken()) {
            router.push({
              name: 'login',
              params: {
                hasAccess: true
              }
            }).catch(() => {})
            reject(new Error('no_autorized'))
          }
          if (user_group.id > 0) {
            deleteUserGroup(getToken(), user_group).then((result) => {
              const response = result.response
              if (response.success) {
                resolve(response.data)
              } else {
                reject(response.message)
              }
            }).catch((err) => {
              reject(err)
            })
          } else {
            reject(new Error('unable_to_delete'))
          }
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
