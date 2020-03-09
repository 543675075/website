import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'common/bg.js'




// CSS
import 'assets/css/base.css'
import 'assets/css/iconfont.css'
import 'assets/css/animation.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
