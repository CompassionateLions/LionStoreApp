<template>
  <div>
    <h4>Items added to your Shopping Cart</h4>
    <div class="row">
      <div class="col s4 offset-s4 border_style">
        <table>
          <tr class="collection-item">
            <div two-line>
              <div class="collection " v-bind:key="product.productId" v-for="(product) in products">
               <CartItem v-bind:product="product" />
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
        "productId": 1,
        "name": "That Obscure Object of Desire",
        "image_url": "https://m.media-amazon.com/images/M/MV5BNzY5NDZjNTEtMTVlZC00MzkxLTllNjQtZmQ5ODE3ZWQxNGM4XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
        "price": 1000,
        "year": 1977,
        "description": "Recounted in flashback are the romantic perils of Mathieu, a middle-aged French sophisticate as he falls for his nineteen year-old former chambermaid Conchita.",
        "genre": "Comedy, Drama",
        "actors": "Fernando Rey, Carole Bouquet, Ángela Molina, Julien Bertheau",
        "director": "Luis Buñuel",
        "format": "DVD",
        "rating": "R",
        "quantity": 1
    },
    {
        "productId": 2,
        "name": "The Umbrellas of Cherbourg",
        "image_url": "https://m.media-amazon.com/images/M/MV5BMWRkNWE1ZTMtY2ZhYy00NDFjLWI3ODktNDM4ZDIwOTMzNDQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "price": 2000,
        "year": 1964,
        "description": "A young woman separated from her lover by war faces a life-altering decision.",
        "genre": "Drama, Musical, Romance",
        "actors": "Catherine Deneuve, Nino Castelnuovo, Anne Vernon, Marc Michel",
        "director": "Jacques Demy",
        "format": "Blu-Ray",
        "rating": "PG",
        "quantity": 1
    }
]
  })
};
</script>

<style scoped>

</style>