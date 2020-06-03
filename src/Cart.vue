<template>
  <div>
    <h4>Items added to your Shopping Cart</h4>
    <div class="row">
      <div class="col s4 offset-s4 border_style">
        <table>
          <tr class="collection-item">
            <div two-line>
              <div class="collection " v-bind:key="product.product_id" v-for="(product, index) in products">
               <CartItem v-bind:product="product" v-bind:index="index" />
                     <div><hr></div>
              </div>
            </div>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./components/CartItem"
export default {
  name: "Cart", 
  components: {CartItem},
  data: () => ({
    products: [
      {
        product_id: 1,
        photo: "./img/movipic_2.jpg",
        name: "Ice Cream",
        description:
          "Our vintage kitchen utenils delight any chef. Made of bamboo by hand",
        price: 14.99,
        qty: 1
      },
      {
        product_id: 2,
        photo: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        name: "QW cooking utensils",
        description:
          "Our vintage kitchen utenils delight any chef. Made of bamboo by hand",
        price: 14.99,
        qty: 2
      }
  

   
    ]
  })
};
</script>

<style scoped>

</style>