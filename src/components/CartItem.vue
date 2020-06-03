<template>
  <div>
      <div>
                  <td>
                    <img avatar :src="product.photo" />
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

                     <li><a><i class="material-icons">expand_less</i></a></li>
                  
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
  </div>
</template>
<script>
export default {
    name: "CartItem",
    props: [
        "product",
        "index"
    ]
}
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