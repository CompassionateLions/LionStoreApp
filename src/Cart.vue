<template>

    <div class="container">
<StoreHeader />
    <div class="row">
      <div class="col l12 s12 ">
        <h4>
          Items added to your Shopping
          <span class>Cart</span>
        </h4>
      </div>
      <div class="col l8 s12 offset-l2 border_style z-depth-2">
        <div class="col m12 s12">
          <router-link to="/">
            <a>
              <i class="material-icons right">close</i>
            </a>
          </router-link>
        </div>
        <div v-if="cartProducts.length  === 0"> 
          <div> 
            <h2> Your cart is Empty </h2>
              <div>
     
        </div>
                <router-link to="/">
                             <button
                class="btn waves-effect waves-light deep-orange darken-3"
                name="mainPage"
              >Go for Shopping</button>
          </router-link>
          </div>
        </div>

        <div v-if="cartProducts.length > 0">
                  <div>
          <div class="collect" v-bind:key="product.productId" v-for="(product) in cartProducts">
            <CartItem v-bind:product="product" />
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div class="col m6 s12 offset-m6 ">
          <div class="row">
            <router-link to="/Order">
              <button
                class="btn waves-effect waves-light deep-orange darken-3"
                type="submit"
                name="orders"
              >Process Order</button>
            </router-link>
            <button
              class="btn waves-effect waves-light deep-orange darken-3"
              name="clearCart" @click="cartClear()"
            >Clear Cart</button>
          </div>
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
  components: { CartItem, StoreHeader},
  computed: {
    ...mapGetters(["cartProducts","removeCartProduct"])
  },
  created() {
    this.getCartProducts();
  },
  methods: {
    ...mapActions(["getCartProducts"]),
    cartClear(){
      this.removeCartProduct();

    }
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
.btn:hover {
filter: brightness(140%);
}
@media only screen and (max-width: 600px) {
  .btn {
    width: 100%;
  }
}
@media only screen and (device-width: 768px) {
  .container{
  width: 100%;
  }
}

</style>