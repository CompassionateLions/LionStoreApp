import Vue from 'vue'
import App from './App.vue'

import "../node_modules/materialize-css/dist/css/materialize.css"
import 'materialize-css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
