// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import { directive as clickOutside } from 'v-click-outside-x'
import installPlugin from '@/plugin'
import { icons } from '@/libs/icons'
import './index.less'
import '@/assets/icons/iconfont.css'
import TreeTable from 'tree-table-vue'
import VOrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMoment from 'vue-moment'
import 'moment/locale/es'
import moment from 'moment-timezone'
import VueSweetalert2 from 'vue-sweetalert2'

// 实际打包时应该不引入mock
/* eslint-disable */
// if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(TreeTable)
Vue.use(VOrgTree)
Vue.use(VueMaterial)
Vue.use(Vuetify)
Vue.use(VueMoment, {
    moment,
})
Vue.use(VueSweetalert2)

iView.Notice.config({ duration: 5 })
/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)
Vue.directive('clickOutside', clickOutside)

Vue.filter('avatar', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase()
})

Vue.filter('phone', function (phone) {
  phone = ('' + phone).replace(/\D/g, '')
  let match = ''
  switch (phone.length) {
    case 10:
      match = phone.match(/^(\d{3})(\d{3})(\d{4})$/)

      if (match) {
        phone = `(${match[1]}) ${match[2]}-${match[3]}`
      }
      break
    case 11:
    case 12:
    case 13:
      match = phone.match(/^(\d{1,3})(\d{3})(\d{3})(\d{4})$/)

      if (match) {
        phone = `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`
      }
      break
    default:
      break
  }

  return phone;
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  vuetify: new Vuetify({
    icons
  }),
  render: h => h(App)
})
