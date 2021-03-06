import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import auth from './views/auth'
Vue.use(App)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')