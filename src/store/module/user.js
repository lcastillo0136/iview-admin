import {
  login,
  logout,
  getUserInfo,
  getUserById,
  getPermissions,
  getMessage,
  getContentByMsgId,
  hasRead,
  removeReaded,
  restoreTrash,
  getUnreadCount,
  getUsersList,
  abortRequest,
  saveUserData,
  deleteUser
} from '@/api/user'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {
    userName: '',
    userId: '',
    avatarImgPath: '',
    token: getToken(),
    expiration: new Date(),
    access: '',
    hasGetInfo: false,
    unreadCount: 0,
    messageUnreadList: [],
    messageReadedList: [],
    messageTrashList: [],
    messageContentStore: {},
    permissions: [],
    lastListSearch: null
  },
  mutations: {
    setAvatar (state, avatarPath) {
      state.avatarImgPath = avatarPath
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setToken (state, { token, date }) {
      state.token = token
      state.expiration = date
      setToken(token, date)
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    },
    setPermissions (state, permissions) {
      state.permissions = permissions
    },
    setMessageCount (state, count) {
      state.unreadCount = count
    },
    setMessageUnreadList (state, list) {
      state.messageUnreadList = list
    },
    setMessageReadedList (state, list) {
      state.messageReadedList = list
    },
    setMessageTrashList (state, list) {
      state.messageTrashList = list
    },
    updateMessageContentStore (state, { msg_id, content }) {
      state.messageContentStore[msg_id] = content
    },
    moveMsg (state, { from, to, msg_id }) {
      const index = state[from].findIndex(_ => _.msg_id === msg_id)
      const msgItem = state[from].splice(index, 1)[0]
      msgItem.loading = false
      state[to].unshift(msgItem)
    },
    setLastListSearch (state, request) {
      state.lastListSearch = request
    }
  },
  getters: {
    messageUnreadCount: state => state.messageUnreadList.length,
    messageReadedCount: state => state.messageReadedList.length,
    messageTrashCount: state => state.messageTrashList.length
  },
  actions: {
    // 登录
    handleLogin ({ commit }, { user, password, remember }) {
      user = user.trim()
      return new Promise((resolve, reject) => {
        login({
          user,
          password,
          remember
        }).then(result => {
          const response = result.response
          if (response.success) {
            commit('setToken', {
              token: response.data.token.token_key,
              date: new Date(response.data.token.expiration_date)
            })
            resolve(response)
          } else {
            reject(response.message)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then((result) => {
          let { response } = result
          if (response.success) {
            commit('setToken', { token: '' })
            commit('setAccess', [])
            resolve()
          } else {
            reject(new Error('unable_logout'))
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          if (!state.token) reject(new Error('no_autorized'))
          getUserInfo(state.token).then(result => {
            const response = result.response
            if (response.success) {
              commit('setAvatar', response.data.user.avatar)
              commit('setUserName', `${response.data.user.first_name} ${response.data.user.last_name}`)
              commit('setUserId', response.data.user.id)
              commit('setAccess', response.data.user.Role.name)
              commit('setHasGetInfo', true)
              commit('setToken', {
                token: response.data.token.token_key,
                date: new Date(response.data.token.expiration_date)
              })
              getPermissions({ token: response.data.token.token_key, userId: response.data.user.id }).then(resultPermission => {
                const permissions = resultPermission.response
                if (permissions.success) {
                  commit('setPermissions', permissions.data.permissions)
                  resolve({ user: response.data.user, permission: permissions.data })
                } else {
                  reject(responsePermission.message)
                }
              }).catch((err) => {
                reject(err)
              })
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
    // 此方法用来获取未读消息条数，接口只返回数值，不返回消息列表
    getUnreadMessageCount ({ state, commit }) {
      getUnreadCount().then(res => {
        const { data } = res
        commit('setMessageCount', data)
      })
    },
    // 获取消息列表，其中包含未读、已读、回收站三个列表
    getMessageList ({ state, commit }) {
      return new Promise((resolve, reject) => {
        getMessage().then(res => {
          const { unread, readed, trash } = res.data
          commit('setMessageUnreadList', unread.sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
          commit('setMessageReadedList', readed.map(_ => {
            _.loading = false
            return _
          }).sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
          commit('setMessageTrashList', trash.map(_ => {
            _.loading = false
            return _
          }).sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 根据当前点击的消息的id获取内容
    getContentByMsgId ({ state, commit }, { msg_id }) {
      return new Promise((resolve, reject) => {
        let contentItem = state.messageContentStore[msg_id]
        if (contentItem) {
          resolve(contentItem)
        } else {
          getContentByMsgId(msg_id).then(res => {
            const content = res.data
            commit('updateMessageContentStore', { msg_id, content })
            resolve(content)
          })
        }
      })
    },
    // 把一个未读消息标记为已读
    hasRead ({ state, commit }, { msg_id }) {
      return new Promise((resolve, reject) => {
        hasRead(msg_id).then(() => {
          commit('moveMsg', {
            from: 'messageUnreadList',
            to: 'messageReadedList',
            msg_id
          })
          commit('setMessageCount', state.unreadCount - 1)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 删除一个已读消息到回收站
    removeReaded ({ commit }, { msg_id }) {
      return new Promise((resolve, reject) => {
        removeReaded(msg_id).then(() => {
          commit('moveMsg', {
            from: 'messageReadedList',
            to: 'messageTrashList',
            msg_id
          })
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 还原一个已删除消息到已读消息
    restoreTrash ({ commit }, { msg_id }) {
      return new Promise((resolve, reject) => {
        restoreTrash(msg_id).then(() => {
          commit('moveMsg', {
            from: 'messageTrashList',
            to: 'messageReadedList',
            msg_id
          })
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getUsersList ({ state, commit }, search) {
      return new Promise((resolve, reject) => {
        try {
          if (!state.token) reject(new Error('no_autorized'))
          if (state.lastListSearch) {
            abortRequest()
          }
          let request = getUsersList({ token: state.token, search })

          request.then(result => {
            const response = result.response
            if (response.success) {
              resolve(response.data)
            } else {
              reject(response.message)
            }
          }).catch(err => {
            reject(err)
          })

          commit('setLastListSearch', request)
        } catch (error) {
          reject(error)
        }
      })
    },
    getUserById ({ state, commit }, id) {
      return new Promise((resolve, reject) => {
        try {
          if (!state.token) reject(new Error('no_autorized'))
          if (state.lastListSearch) {
            abortRequest()
          }
          getUserById({ token: state.token, id }).then(result => {
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
    saveUserData ({ state, commit }, data) {
      return new Promise((resolve, reject) => {
        try {
          if (!state.token) reject(new Error('no_autorized'))
          if (state.lastListSearch) {
            abortRequest()
          }
          saveUserData({ token: state.token, data }).then(result => {
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
    deleteUser ({ state, commit }, id) {
      return new Promise((resolve, reject) => {
        try {
          if (!state.token) reject(new Error('no_autorized'))
          if (state.lastListSearch) {
            abortRequest()
          }
          deleteUser({ token: state.token, id }).then(result => {
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
    }
  }
}
