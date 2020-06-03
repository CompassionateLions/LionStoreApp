<template>
  <div>
    <div class="row divStyle">
      <div class="col m2 s12 ">
        <li>
          <img :src="product.image_url" />
        </li>
      </div>
    <div class="col  m4 s12 textStyle">
   <li v-html="product.name"></li>
        <li v-html="product.format"></li>
        <li > <b>Price</b></li>
        <li>${{product.price}}</li>
     </div>
        <div class="col m2 s12">
          <li><b>Quantity</b></li>
          <li>
            <a><i class="material-icons">expand_less</i> </a>
          </li>
          <li class="border_style" label="Quantity" v-html="product.quantity"></li>
          <li>
            <a><i class="material-icons">expand_more</i></a>         
          </li>
        </div>
       <div class="col m2 s12 textStyle">
        <li >
          <b>Total Price</b>
        </li>
        <li>{{product.price * product.quantity}}$</li>
      </div>
      <div class="col m1 s12 divStyle">
        <a class="secondary-content binStyle"><i class="material-icons flow-text">delete</i></a>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "CartItem",
  props: ["product", "index"]
};
</script>

<style scoped>
i {
  color: #f44336;
}
img {
  width: 70%;
  height: 70%;
 
}
img:hover {
  cursor: pointer;
}
li {
  list-style: none;

}
.border_style {
  border-style: groove;
  padding: 5px;
}
.divStyle{
  padding-top: 20px;
  padding-left: 10px;
  margin: 10px;
}
.binStyle{
 padding-top: 50%;
 padding-right: 40%;
}
.textStyle{
  text-align: left;
  padding-left: 20px;
  margin-left: 20px;

}
</style>