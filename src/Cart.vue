<template>
  <div>
    <h4>Items added to your Shopping Cart</h4>
    <div class="row">
      <div class="col s4 offset-s4 border_style">
        <table>
          <tr class="collection-item">
            <div two-line>
              <template class="collection " v-for="(product, index) in products">
                <div v-bind:key="product.product_id" avatar>
                  <td>
                    <img avatar :src="product.photo" />
                    <img />
                  </td>
                  <td>
                    <li v-html="product.name"></li>
                  </td>
                  <td>
                    <li class="side_padd"><b>Price</b></li>
                    <li>{{product.price}}$</li>
                  </td>
                  <td>
                    <div class="side_padd">
                      <li><b>Quantity</b></li>
                      <li><a href="#!" class="secondary-content">
                      <i class="material-icons">expand_less</i>
                    </a></li>
                      <li  class="border_style" label="Quantity" v-html="product.qty"></li>
                      <li><i class="material-icons">expand_more</i></li>
                    </div>
                  </td>
                  <td>
                    <div  class="side_padd">
                      <li class="side_padd"><b>Total Price</b></li>
                      <li>{{product.price * product.qty}}$</li>
                    </div>
                  </td>
                  <td>
                    <a href="#!" class="secondary-content">
                      <i class="material-icons">delete</i>
                    </a>
                  </td>
                </div>
                <div  v-if="index + 1 < products.length" v-bind:key="index"><hr></div>
              </template>
            </div>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
i {
  color: #f44336;
}
img {
  height: 120px;
  width: 130px;
}
img:hover {
  cursor: pointer;
}
li {
  list-style: none;
  padding-left: 10px;
}
.border_style{
    border-style: groove;
}
.side_padd{
  padding-left: 20px;
}
</style>