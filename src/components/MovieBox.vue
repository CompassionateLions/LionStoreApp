<template>
  <div class="row">
    <div class="card white">
      <div class="movie-container">
        <div class="movie-title center-align ">{{movie.name}}</div>
        <div class="movie-img">
           <img :src="movie.image_url" width = 100% height= 400em>
        </div>
        <div class="row">
          <div class="col s12 m6 left price"> ${{movie.price}}</div>
          <div class="col s12 m6">
            <ul>
              <li>
                <a href="#">Details</a>
              </li>
              <li>
                <a href="#">Add to Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieBox",
  props: ["movie"],
  methods: {
  },
  created() {
  }
};
</script>

<style scoped>

.movie-title {
  font-size: 2em;
  margin-bottom: 1em;
  padding-bottom: 1em;
  height: 2em;
  text-align: center;
}

.price {
  font-size: 2em;
  color: #35d0ba;
}

.main-container {
  margin: 1em;
  border: none;
  box-shadow: none;
  margin-bottom: 1em;
}

a {
  color: black;
  text-decoration: underline;
}

.movie-img {
  padding: 1em;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  overflow: hidden;
}
</style>