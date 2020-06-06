<template>
  <div class="movie-img">
    <img
      src="https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg"
      alt="Dark Knight Poster"
    />
  </div>
</template>

<script>
export default {
  name: "MoviePoster"
};
</script>

<style>
.movie-img{
    padding: 1em;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    overflow: hidden;
}

</style>