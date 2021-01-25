import { getUsersGroups, getPermissionsGroups, saveUserGroup, updateUserGroup, deleteUserGroup } from '@/api/groups'
import { getToken } from '@/libs/util'

export default {
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
    getUsersGroups ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          if (!getToken()) reject(new Error('no_autorized'))
          getUsersGroups(getToken()).then(result => {
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
    getPermissionsGroups ({ state, commit }, { group_id }) {
      return new Promise((resolve, reject) => {
        try {
          if (!getToken()) reject(new Error('no_autorized'))
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
          if (!getToken()) reject(new Error('no_autorized'))
          if (user_group.id > 0) {
            updateUserGroup(getToken(), user_group).then((result) => {
              const response = result.response
              if (response.success) {
                resolve(response.data)
              } else {
                reject(response.message)
              }
            })
          } else {
            saveUserGroup(getToken(), user_group).then((result) => {
              const response = result.response
              if (response.success) {
                resolve(response.data)
              } else {
                reject(response.message)
              }
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
          if (!getToken()) reject(new Error('no_autorized'))
          if (user_group.id > 0) {
            deleteUserGroup(getToken(), user_group).then((result) => {
              const response = result.response
              if (response.success) {
                resolve(response.data)
              } else {
                reject(response.message)
              }
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
