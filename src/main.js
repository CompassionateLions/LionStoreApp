import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'

import "../node_modules/materialize-css/dist/css/materialize.css"
import 'materialize-css'

import Home from './Home.vue'
import Login from './Login.vue'
import Signup from './Signup.vue'
import Cart from './Cart.vue'
import Admin from './Admin.vue'
import Profile from './Profile.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path: "/", 
    component: Home
  },
  {
    path: "/Login", 
    component: Login,
    beforeEnter: (to, from, next) => {
      if(store.state.user.loggedIn){
        return next(false)
      }

      return next()
    }
  },
  {
    path: "/Signup", 
    component: Signup,
    beforeEnter: (to, from, next) => {
      if(store.state.user.loggedIn){
        return next(false)
      }

      return next()
    }
  },
  {
    path: "/Cart", 
    component: Cart
  },
  {
    path: "/Admin", 
    component: Admin,
    beforeEnter: (to, from, next) => {
      if(store.state.user.role !== 'admin'){
        return next('/')
      }
      return next()
    }
  },
  {
    path: "/Profile", 
    component: Profile,
    beforeEnter: (to, from, next) => {
      if(store.state.user.loggedIn){
        return next()
      }

      return next(false)
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
