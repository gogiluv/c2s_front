import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import filters from '@/utils/filters'
import router from './router'
import { GOOGLE_ANALYTICS_ID } from '@/utils/constants'
import VueAnalytics from 'vue-analytics'

import Panel from './components/Panel.vue'
import IconBtn from './components/btn/IconBtn.vue'
import Save from './components/btn/Save.vue'
import Cancel from './components/btn/Cancel.vue'
import './style.less'

import VerticalMenu from '@oj/components/verticalMenu/verticalMenu.vue'
import VerticalMenuItem from '@oj/components/verticalMenu/verticalMenu-item.vue'

import BootstrapVue from 'bootstrap-vue'

import 'chart.js'
import 'hchs-vue-charts'

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VueAnalytics, {
  id: GOOGLE_ANALYTICS_ID,
  router
})
Vue.use(Element, {locale})
Vue.component(IconBtn.name, IconBtn)
Vue.component(Panel.name, Panel)
Vue.component(Save.name, Save)
Vue.component(Cancel.name, Cancel)

Vue.use(BootstrapVue)

Vue.component(VerticalMenu.name, VerticalMenu)
Vue.component(VerticalMenuItem.name, VerticalMenuItem)

Vue.use(window.VueCharts)

Vue.prototype.$error = (msg) => {
  Vue.prototype.$message({'message': msg, 'type': 'error'})
}

Vue.prototype.$warning = (msg) => {
  Vue.prototype.$message({'message': msg, 'type': 'warning'})
}

Vue.prototype.$success = (msg) => {
  if (!msg) {
    Vue.prototype.$message({'message': 'Succeeded', 'type': 'success'})
  } else {
    Vue.prototype.$message({'message': msg, 'type': 'success'})
  }
}

new Vue(Vue.util.extend({router, store}, App)).$mount('#app')
