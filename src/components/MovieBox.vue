<template>
  <div class="col s12 m6 l4 xl3 card-wrapper">
    <div class="card sticky-action">
      <div class="card-image waves-effect waves-block waves-light poster-container">
        <img class="activator responsive-img movie-poster" :src="movie.image_url" />
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
        <p>({{movie.year}}) {{movie.rating}}</p>
        <p class="genre">{{movie.genre}}</p>
        <p>
          <span class="label">dir:</span>
          {{movie.director}}
        </p>
        <p>
          <span class="label">actors:</span>
          {{movie.actors}}
        </p>
        <p>
          <span class="label">plot:</span>
          {{movie.description}}
        </p>
      </div>
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
  padding: 20px;
}

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.card-content {
  position: relative;
}

.poster-container {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.movie-poster {
  max-width: 200px;
}

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
  flex-grow: 8;
}

.action-container > * {
  margin-right: 0 !important;
}

.icon-btn {
  cursor: pointer;
}
</style>