import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import "../node_modules/materialize-css/dist/css/materialize.css"
import 'materialize-css'

import Home from './Home.vue'
import Login from './Login.vue'
import Signup from './Signup.vue'
import About from './About.vue'
import Cart from './Cart.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: "/", component: Home},
  {path: "/Login", component: Login},
  {path: "/Signup", component: Signup},
  {path: "/About", component: About},
  {path: "/Cart", component: Cart}
]

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
