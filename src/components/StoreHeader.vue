<template>
  <div>
    <nav class="nav-extended">
      <div class="nav-wrapper orange darken-4">
        <router-link to="/" class="brand-logo left">Lion Movie Store</router-link>
        <ul class="right">
          <li v-if="user.loggedIn === false">
            <router-link to="/Signup">
              <i class="material-icons left">person</i>
              <span class="hide-on-med-and-down">Signup</span>
            </router-link>
          </li>
          <li v-if="user.loggedIn === false">
            <router-link to="/Login">
              <i class="material-icons left">person</i>
              <span class="hide-on-med-and-down">Login</span>
            </router-link>
          </li>
          <li>
            <router-link to="/Cart">
              <i class="material-icons left">shopping_cart</i>
              <span class="hide-on-med-and-down">Cart</span>
            </router-link>
          </li>
          <li v-if="user.role === 'admin'">
            <router-link to="/Admin">
              <i class="material-icons left">info</i>
              <span class="hide-on-med-and-down">Admin</span>
            </router-link>
          </li>
          <UserDropDown v-if="user.loggedIn"/>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import M from "materialize-css";
import UserDropDown from './UserDropDown';

import { mapGetters } from "vuex";

export default {
  name: "StoreHeader",
  props: {},
  components:{
    UserDropDown
  },
  computed: {
    ...mapGetters(["user"])
  },
  mounted() {
    M.AutoInit();
   
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-wrapper {
  z-index: 1000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.brand-logo {
  position: relative;
  padding-left: 2rem;
}
</style>
