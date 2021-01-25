import { getResources, getPermissionList, savePermission } from '@/api/managment'
import { getToken } from '@/libs/util'

export default {
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
    getResources ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          if (!getToken()) reject(new Error('no_autorized'))
          getResources(getToken()).then(result => {
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
    getPermissionList ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          if (!getToken()) reject(new Error('no_autorized'))
          getPermissionList(getToken()).then(result => {
            const response = result.response
            if (response.success) {
              resolve(response.data)
            } else {
              reject(response.message)
            }
          }).catch((err) => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    },
    savePermission ({ state, commit }, permission) {
      return new Promise((resolve, reject) => {
        try {
          if (!getToken()) reject(new Error('no_autorized'))
          if (permission.controller.trim !== '') {
            savePermission(getToken(), permission).then((result) => {
              const response = result.response
              if (response.success) {
                resolve(response.data)
              } else {
                reject(response.message)
              }
            })
          } else {
            reject(new Error('no_controller_name'))
          }
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
