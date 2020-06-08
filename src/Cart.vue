<template>
  <div>
    <StoreHeader />
    <div class="container">
      <div class="row">
        <div class="col m12 s12" v-if="order === ''">
          <h4>
            Items in your Shopping
            <span class>Cart</span>
          </h4>
        </div>
        <div v-if="order === ''" class="col m12 l8 s12 offset-l2 border_style z-depth-2">
          <div class="col m12 s12">
            <router-link to="/">
              <a>
                <i class="material-icons right">close</i>
              </a>
            </router-link>
          </div>
          <div v-if="cartProducts.length  === 0">
            <div>
              <h2>Your cart is Empty</h2>
              <div></div>
              <router-link to="/">
                <button
                  class="btn waves-effect waves-light deep-orange darken-3"
                  name="mainPage"
                >Go Shopping</button>
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
            <div class="col m6 s12 offset-m6">
              <div class="row">
                <button to="/Order">
                  <button
                    class="btn waves-effect waves-light deep-orange darken-3"
                    type="submit"
                    name="orders"
                    @click="createOrderHandler"
                  >Process Order</button>
                </button>
                <button
                  class="btn waves-effect waves-light deep-orange darken-3"
                  name="clearCart"
                  @click="removeAllCartProductsHandler"
                >Empty Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row" v-if="order !== ''">
        <div>
          <h4>Order placed Sucessfully</h4>
            <OrderComponent v-bind:order="order"/>
        </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoreHeader from "./components/StoreHeader";
import CartItem from "./components/CartItem";
import OrderComponent from "./components/OrderComponent";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Cart",
  components: { CartItem, StoreHeader, OrderComponent },
  computed: {
    ...mapGetters(["cartProducts"])
  },
  data(){
    return {
      order: ''
    }
  },
  created() {
    this.getCartProducts();
  },
  methods: {
    ...mapActions(["getCartProducts", "createOrder", "removeAllCartProducts"]),
    cartClear() {
      this.removeCartProduct();
    },
    createOrderHandler (){
      //If not logged in redirect to login
      if(! this.$store.state.user.loggedIn) {
        return this.$router.push("/Login");
      }

      this.createOrder().then(res => {
        console.log(res);
        if(res.error) return console.log(res.error);

        this.order = res.order
        //Print out Order summary
      })
    },
    removeAllCartProductsHandler(){
      this.removeAllCartProducts()
    }
  }
};
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
  .container {
    width: 100%;
  }
}
</style>