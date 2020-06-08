<template>
  <div class="row divStyle">
    <div class="col l2 m12">
      <li>
        <a>
          <img class="responsive-img" :src="product.image_url" />
        </a>
      </li>
    </div>
    <div class="col l4 m12 textStyle">
      <li v-html="product.name" class="red-text text-darken-3 movName"></li>
      <li v-html="product.format"></li>
      <li>
        <b>Price</b>
      </li>
      <li>${{product.price.toFixed(2)}}</li>
    </div>
    <div class="col l2 m12 textStyle">
      <li>
        <b>Quantity</b>
      </li>
      <li class="padL">
        <a>
          <i class="material-icons" @click="increaseProductByOne()">expand_less</i>
        </a>
      </li>
      <li class="qty" label="Quantity" v-html="product.quantity"></li>
      <li class="padL">
        <a>
          <i class="material-icons"  @click=" decreaseProductByOne()">expand_more</i>
        </a>
      </li>
    </div>
    <div class="col l2 m12 s12 textStyle">
      <li>
        <b>Total Price</b>
      </li>
      <li>${{(product.price * product.quantity).toFixed(2)}}</li>
    </div>
    <div class="col l2 m12 s12 offset-l1 divStyle">
      <a class="secondary-content">
        <i class="material-icons" @click="removeProduct()">delete</i>
      </a>
    </div>
  </div>
</template>
<script>

import {mapActions} from 'vuex';


export default {
  name: "CartItem",
  props: ["product"],
  methods: {
    ...mapActions(['removeProductFromCart', 'updateCartQuantity']),
    removeProduct(){
      //Needs to call an action from vueX store
    this.removeProductFromCart(this.product.productId);
    },
    increaseProductByOne(){
      this.updateCartQuantity({productId: this.product.productId,newQuantity: this.product.quantity + 1})
    },
    decreaseProductByOne(){
      this.updateCartQuantity({productId: this.product.productId,newQuantity: this.product.quantity - 1})
    }
  }
 

};
</script>

<style scoped>
i {
  color: #bf360c;
}
.movName {
  font-weight: bold;
  font-size: 14px;
}

img:hover {
  cursor: pointer;
}
li {
  list-style: none;
  padding-bottom: 3px;
}
.border_style {
  border-style: groove;
}
.divStyle {
  padding-top: 20px;
  padding-left: 10px;
}
.binStyle {
  padding-top: 60%;
  padding-left: 80%;
}
.textStyle {
  text-align: left;
  padding-left: 20px;
  margin-left: 20px;
  font-size: 14px;
}
a {
  cursor: pointer;
}
.qty {
  text-align: center;
  padding: 3px;
  border: 2px solid #bf360c;
  width: 40px;
  height: 40px;
  margin-left: 10px;
}
.padL {
  padding-left: 20px;
}
</style>