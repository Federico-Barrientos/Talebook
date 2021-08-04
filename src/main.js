import Vue from 'vue'
import App from './App.vue'
import Flipbook from 'flipbook-vue'

Vue.config.productionTip = false

Vue.use(Flipbook)

new Vue({
  render: h => h(App),
}).$mount('#app')
