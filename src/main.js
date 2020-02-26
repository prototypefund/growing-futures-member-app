import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Buefy from 'buefy'
Vue.use(Buefy, {defaultIconPack: 'fas',})
import 'buefy/dist/buefy.css'


import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
