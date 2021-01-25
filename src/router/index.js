import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { setToken, getToken, setTitle } from '@/libs/util'
import config from '@/config'
const { homeName } = config

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'

const turnTo = (to, access, next, token) => {
  if (to.meta && to.meta.access) {
    let foundAccess = access.map(r => { return { url: `${r.controller}/${r.action}`, access: r.value } }).find(f => to.meta.access.indexOf(f.url) > -1 && f.access !== 'disabled')
    if (foundAccess) {
      if (token && to.name === LOGIN_PAGE_NAME) next({ name: homeName, params: { hasAccess: true }, replace: true })
      else next({ ...to, ...{ params: { hasAccess: true }, replace: true } })
    } else {
      next({
        name: 'error_401',
        params: { hasAccess: true }
      })
    }
  } else {
    next({
      name: 'error_401',
      params: { hasAccess: true }
    })
  }
}

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  if (!to.params.hasAccess) {
    const token = getToken()
    if (token) {
      store.dispatch('getUserInfo').then(({ user, permission }) => {
        turnTo(to, permission.permissions, next, token)
      }).catch((err) => {
        let params = { redirect: to.fullPath }
        if (LOGIN_PAGE_NAME === from.name) {
          iView.LoadingBar.finish()
          params.error = err
          next({
            name: 'error_401',
            params: {
              hasAccess: true,
              error: err
            }
          })
        }

        setToken('', new Date())
        next({
          name: LOGIN_PAGE_NAME,
          params: params
        })
      })
    } else {
      store.dispatch('getGuestAccess').then(result => {
        let login = router.resolve({ name: LOGIN_PAGE_NAME })
        turnTo({ ...login.resolved, ...{ params: { redirect: to.fullPath } } }, result, next)
      }).catch(() => {
        next({
          name: 'error_401',
          params: { hasAccess: true }
        })
      })
    }
  } else {
    next()
  }
})

router.afterEach(to => {
  setTitle(to, router.app)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
