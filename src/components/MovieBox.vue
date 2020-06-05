<template>
  <div class="row">
      <div class="card white">
        <MovieTitle />
        <MoviePoster /> 
        <div class="row">
          <MoviePrice />
          <div class="col s12 m6">
            <ul>
              <li>
                <MovieDetails />
              </li>
              <li>
                <MovieAddToCart />
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import MovieTitle from "./MovieTitle.vue";
import MovieDetails from "./MovieDetails.vue";
import MoviePoster from "./MoviePoster.vue";
import MoviePrice from "./MoviePrice.vue";
import MovieAddToCart from "./MovieAddToCart.vue";

export default {
  name: "MovieBox",
  components: {
    MovieTitle,
    MovieDetails,
    MoviePoster,
    MoviePrice,
    MovieAddToCart
  },
  data() {
    return {
      SelectedMovie: ""
    };
  },
  methods: {
    searchTitle() {
      console.log(this.SelectedMovie);
    }
  }
};
</script>

<style>
*{
    box-shadow: none !important;
}

.main-container{
    margin: 1em;
    border: none;
    box-shadow: none;
    margin-right: 2em;
}
.card {
    border: none !important;
}

a{
    color: black;
    text-decoration: underline;
}


</style>