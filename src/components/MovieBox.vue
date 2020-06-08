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
            <div>
          {{movie.name}}
          </div>
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
        <a class="icon-btn">
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
export default {
  name: "MovieBox",
  props: ["movie"],
  methods: {},
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
  color: #ffab40!important;
}

.action-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  justify-self: flex-end;
  flex-grow: 8;
}

.action-container > * {
  margin-right: 0!important;
}

.icon-btn {
  cursor: pointer;
}
</style>