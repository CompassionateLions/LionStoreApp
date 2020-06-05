<template>
  <div>
    <div class="row">
      <form class="col s12 product-form" v-on:submit="createProduct">
        <div class="row">
          <div class="input-field col s9">
            <input id="name" type="text" required class="validate" name="name" />
            <label for="name">Title</label>
          </div>

          <div class="input-field col s3">
            <input id="year" type="number" class="validate" name="year"/>
            <label for="year">Year</label>
          </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
            <input id="genre" type="text" class="validate" name="genre" />
            <label for="genre">Genres</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s4">
            <input id="director" type="text" class="validate" name="director" />
            <label for="director">Director</label>
          </div>

          <div class="input-field col s8">
            <input id="actors" type="text" class="validate" name="actors" />
            <label for="actors">Actors</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <textarea id="description" class="materialize-textarea" name="description"></textarea>
            <label for="description">Description</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="image_url" name="image_url" type="text" class="validate" />
            <label for="image_url">Poster URL</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s4">
            <input id="quantity" name="quantity" type="number" required class="validate" />
            <label for="quantity">Stock Quantity</label>
          </div>
          <div class="input-field col s4">
            <input id="price" name="price" type="number" required class="validate" step="0.01"/>
            <label for="price">Price</label>
          </div>
          <div class="input-field col s4">
            <input id="format" name="format" type="text" required class="validate" />
            <label for="format">Format</label>
          </div>
        </div>
        <div class="row">
          <button class="btn waves-effect waves-light" type="submit" name="action" >
            Add Product
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProductComponent",
  methods:{
      createProduct(e){
          e.preventDefault();

          const data = new FormData(e.target);
          console.log(data)
          //Validate?

          //post data
      }
  }
};
</script>

<style scoped>
</style>