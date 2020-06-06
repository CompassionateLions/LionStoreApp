<template>
  <div>
    <StoreHeader />
   
    <div class="row">
        <div class="col l6 s12 offset-l3 ">
       <h4>Items added to your Shopping <span class="cartSty">Cart</span>  </h4>
        </div>
      <div class="col l6 s12 offset-l3 border_style z-depth-2">
        <div class="col m12 s12 ">
           <router-link to="/">
             <a>
            <i class="material-icons right ">close</i>
          </a></router-link>
        
        </div>
        <div>
          <div class="collection" v-bind:key="product.productId" v-for="(product) in products">
            <CartItem v-bind:product="product" />
          </div>
        </div>
        <div class="col l3 s6 offset-l9 -s6">
           <router-link to="/login">
           <button class="btn waves-effect waves-light orange darken-3" type="submit" name="action">
            Submit
          </button>
           </router-link>        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoreHeader from "./components/StoreHeader";
import CartItem from "./components/CartItem";
export default {
  name: "Cart",
  components: { CartItem, StoreHeader },
  data: () => ({
    products: [
      {
        productId: 1,
        name: "That Obscure Object of Desire",
        image_url:
          "https://m.media-amazon.com/images/M/MV5BNzY5NDZjNTEtMTVlZC00MzkxLTllNjQtZmQ5ODE3ZWQxNGM4XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
        price: 10,
        year: 1977,
        description:
          "Recounted in flashback are the romantic perils of Mathieu, a middle-aged French sophisticate as he falls for his nineteen year-old former chambermaid Conchita.",
        genre: "Comedy, Drama",
        actors: "Fernando Rey, Carole Bouquet, Ángela Molina, Julien Bertheau",
        director: "Luis Buñuel",
        format: "DVD",
        rating: "R",
        quantity: 1
      },
      {
        productId: 2,
        name: "The Umbrellas of Cherbourg",
        image_url:
          "https://m.media-amazon.com/images/M/MV5BMWRkNWE1ZTMtY2ZhYy00NDFjLWI3ODktNDM4ZDIwOTMzNDQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        price: 20,
        year: 1964,
        description:
          "A young woman separated from her lover by war faces a life-altering decision.",
        genre: "Drama, Musical, Romance",
        actors: "Catherine Deneuve, Nino Castelnuovo, Anne Vernon, Marc Michel",
        director: "Jacques Demy",
        format: "Blu-Ray",
        rating: "PG",
        quantity: 100
      }
    ]
  })
};
</script>

<style scoped>
.border_style {
  padding: 10px;
  margin-top: 30px;
}
i {
  color: #f44336;
  font-size: 40px;
  padding-top: 10;
}
.cartSty{
  font-size: 50px;
    color: #f44336;
    font-weight: bold;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}
</style>