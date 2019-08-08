import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import PortalVue from 'portal-vue'
import { FormPlugin } from 'bootstrap-vue'


Vue.use(BootstrapVue)
Vue.use(FormPlugin)
Vue.use(PortalVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
