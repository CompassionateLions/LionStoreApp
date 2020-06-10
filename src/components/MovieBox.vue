<template>
  <div class="col s12 m6 l4 xl3 card-wrapper">
    <div class="card sticky-action">
      <div class="img-outer-wrapper">

      <div class="card-image waves-effect waves-block waves-light poster-container">
        <img class="activator responsive-img movie-poster" :src="movie.image_url" />
      </div>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{{movie.name}}</span>
        <p>{{movie.format}}</p>
      </div>

      <div class="card-reveal">
        <div class="card-title grey-text text-darken-4">
          <div>
            <i class="material-icons right">close</i>
          </div>
          <div>{{movie.name}}</div>
        </div>
       <br>
        <p>({{movie.year}}) {{movie.rating}}</p>
        <p class="genre info-genre">{{movie.genre}}</p>
        <p class="text-align">
          <span class="info-label">dir:</span>
          {{movie.director}}
        </p>
        <p class="text-align">
          <span class="info-label">actors:</span>
          {{movie.actors}}
        </p>
        <p class="text-align">
          <span class="info-label">plot:</span>
          {{movie.description}}
        </p>
      </div>
      <div class="action-spacer"></div>
      <div class="card-action action-container">
        <a class="icon-btn" @click="addtoCardHandler">
          <i class="material-icons">add_shopping_cart</i>
        </a>
        <a class="movie-price">${{movie.price.toFixed(2)}}</a>
        <a class="activator icon-btn">
          <i class="material-icons">info</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import M from "materialize-css";

export default {
  name: "MovieBox",
  props: ["movie"],
  methods: {
    ...mapActions(["addToCart", "addToCartGuest"]),
    addtoCardHandler() {

      //If logged in then add to cart using api
      if (this.$store.state.user.loggedIn) {
        return this.addToCart(this.movie.id).then(response => {
          if (response.error) {
            console.log(response.error);

            return M.toast(
              { html: response.error, classes: "red lighten-1" },
              4000
            );
          }

          M.toast({ html: `${this.movie.name} added to cart` }, 4000);
        });

        //If not logged in just add prod to local storage cart
      } else {
        this.addToCartGuest(this.movie);
        M.toast({ html: `${this.movie.name} added to cart` }, 4000);
      }
    }
  },
  created() {}
};
</script>

<style scoped>
.card-wrapper {
  padding: 10px 20px;
  margin: 0!important;
}

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin: 0;
}

.card-content {
  position: relative;
  padding-bottom: 10px;
}

.img-outer-wrapper {
  display: flex;
  justify-content: center;
}
.poster-container {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 200px;
}
/* .movie-poster {
} */

.movie-price {
  font-size: 1.5rem;
}

.movie-price:hover {
  color: #ffab40 !important;
}

.action-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  justify-self: flex-end;
}

.action-spacer{
  flex-grow: 8;
}

.action-container > * {
  margin-right: 0 !important;
}

.icon-btn {
  cursor: pointer;
}
.text-align{
 text-align: left;
}
.info-genre {
  color: #ef6c00
}

.info-label {
  color: #ef6c00;
  font-weight: bold;
}
</style>