<template>
  <div>
    <div class="row divStyle">
      <div class="col l2 m12 ">
        <li>
          <a>
            <img class="responsive-img" :src="product.image_url" />
          </a>
        </li>
      </div>
      <div class="col l4 m12 textStyle">
        <h6 v-html="product.name" class="red-text text-darken-3"></h6>
        <li v-html="product.format"></li>
        <li>
          <b>Price</b>
        </li>
        <li>${{product.price}}</li>
      </div>
      <div class="col l2 m12  textStyle">
        <li>
          <b>Quantity</b>
        </li>
        <li class="padL">
          <a>
            <i class="material-icons">expand_less</i>
          </a>
        </li>
        <li class="qty" label="Quantity" v-html="product.quantity"></li>
        <li class="padL">
          <a>
            <i class="material-icons">expand_more</i>
          </a>
        </li>
      </div>
      <div class="col l2 m12  s12textStyle">
        <li>
          <b>Total Price</b>
        </li>
        <li>${{product.price * product.quantity}}</li>
      </div>
      <div class="col l2 m12 s12 offset-l1 divStyle">
        <a class="secondary-content ">
          <i class="material-icons ">delete</i>
        </a>
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
  padding: 5px;
}
.divStyle {
  padding-top: 20px;
  padding-left: 10px;
  margin: 10px;
}
.binStyle {
  padding-top: 60%;
  padding-left: 80%;
}
.textStyle {
  text-align: left;
  padding-left: 20px;
  margin-left: 20px;
}
a {
  cursor: pointer;
}
.qty {
  text-align: center;
  padding: 3px;
  border: 2px solid #f44336;
  width: 40px;
  height: 40px;
  margin-left: 10px;
}
.padL {
  padding-left: 20px;
}
</style>