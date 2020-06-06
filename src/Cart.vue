<template>
  <div>
    <StoreHeader />

    <div class="row">
      <div class="col l6 s12 offset-l3">
        <h4>
          Items added to your Shopping
          <span class>Cart</span>
        </h4>
      </div>
      <div class="col l6 s12 offset-l3 border_style z-depth-2">
        <div class="col m12 s12">
          <router-link to="/">
            <a>
              <i class="material-icons right">close</i>
            </a>
          </router-link>
        </div>
        <div>
          <div class="collect" v-bind:key="product.productId" v-for="(product) in cartProducts">
            <CartItem v-bind:product="product" />
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div class="col l3 s6 offset-l9 -s6">
          <div class="row">
            <router-link to="/login">
              <button
                class="btn waves-effect waves-light deep-orange darken-3"
                type="submit"
                name="action"
              >Checkout</button>
            </router-link>
            <button
              class="btn waves-effect waves-light deep-orange darken-3"
              type="submit"
              name="action"
            >Clear Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoreHeader from "./components/StoreHeader";
import CartItem from "./components/CartItem";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Cart",
  components: { CartItem, StoreHeader },
  computed: {
    ...mapGetters(["cartProducts"])
  },
  created() {
    this.getCartProducts();
  },
  methods: {
    ...mapActions(["getCartProducts"]),
  }
   
}
</script>

<style scoped>
.border_style {
  padding: 15px;
  margin-top: 30px;
}
i {
  color: #bf360c;
  padding-top: 10;
}
.cartSty {
  font-size: 50px;
  color: #bf360c;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.collect {
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  border-block-end-style: none;
}
button {
  margin-top: 10px;
  margin-left: 2px;
}
</style>