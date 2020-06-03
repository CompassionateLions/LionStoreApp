<template>
  <div class="row">
    <div class="col s12 m3 main-container right">
      <div class="card white">
        <div class="movie-img">
            <img src="https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg" alt="Dark Knight Poster" />
        </div>
        <span class="movie-title">The Dark knight</span>

        <div class="row">
          <div class="col s12 m6 left price">$30</div>
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
.price {
  font-size: 2em;
  color: #35d0ba;
}

.movie-img{
    padding: 1em;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    overflow: hidden;
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

.movie-title {
    font-size: 2em;
    margin-bottom: 1em;
    padding-bottom: 1em;
}
</style>