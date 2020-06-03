<template>
  <div>
    <nav>
      <div class="nav-wrapper orange darken-4">
        <a href="#!" class="brand-logo">Lion Movie Store</a>
        <ul class="right">
          <li>
          <router-link to="/Login">
            <i class="material-icons left">person</i><span class="hide-on-med-and-down">Login</span>
          </router-link>
          </li>
          <li>
            <router-link to="/Cart">
            <i class="material-icons left">shopping_cart</i> <span class="hide-on-med-and-down">Cart</span>
            </router-link>
          </li>
          <li>
            <router-link to="/About">
            <i class="material-icons left">info</i> <span class="hide-on-med-and-down">About</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

import M from "materialize-css"

export default {
  name: "StoreHeader",
  props: {},
  mounted() {
    M.AutoInit();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-wrapper {
    z-index: 1000;
  }
</style>
