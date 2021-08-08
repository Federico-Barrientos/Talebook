import Vue from 'vue'
import App from './App.vue'
import Flipbook from 'flipbook-vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

Vue.config.productionTip = false

Vue.use(Flipbook)
Vue.use(VuePlyr, {plyr: {
  autoplay:true,
  settings:[ 'play', 'volume'],
}})

new Vue({
  render: h => h(App),
}).$mount('#app')
