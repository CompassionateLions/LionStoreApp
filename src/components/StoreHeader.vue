<template>
  <div>
    <nav>
      <div class="nav-wrapper orange darken-4">
        <a href="#!" class="brand-logo">Lion Movie Store</a>
        <ul class="right">
          <li>
            <a href><i class="material-icons left">person</i><span class="hide-on-med-and-down">Login</span></a>
          </li>
          <li>
            <a href><i class="material-icons left">shopping_cart</i> <span class="hide-on-med-and-down">Cart</span></a>
          </li>
          <li>
            <a href><i class="material-icons left">info</i> <span class="hide-on-med-and-down">About</span></a>
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
