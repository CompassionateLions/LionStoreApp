<template>
  <div>
    <StoreHeader />
    <h4>Items added to your Shopping Cart</h4>
    <div class="row">
      <div class="col m6 s12 offset-m3 border_style ">
        <div class="collection-item">
          <div two-line>
            <div class="collection" v-bind:key="product.productId" v-for="(product) in products">
              <CartItem v-bind:product="product" />
            </div>
          </div>
        </div>
        <div class="col m3 s6 offset-m9 -s6">
          <button class="btn waves-effect waves-light orange darken-3" type="submit" name="action">
            Submit
            <i class="material-icons right">send</i>
          </button>
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
        quantity: 2
      }
    ]
  })
};
</script>

<style scoped>
.border_style {
  border-style: groove;
  padding: 10px;
}
</style>