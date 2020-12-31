import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'assets/css/base.css'
import 'assets/fonts/iconfont.css'

import axios from 'axios'

Vue.prototype.$axios = axios

Vue.filter('showFrontPrice', function(value) {
  let price = value.split('.')[0]
  return price
})
Vue.filter('showBackPrice', function(value) {
  let price = value.split('.')[1]
  return `.${price}`
})
Vue.filter('handleNumber', function(value) {
  if(value < 9999) {
    return value
  }
  let num = (value/10000).toFixed(1)
  return `${num}万`
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
