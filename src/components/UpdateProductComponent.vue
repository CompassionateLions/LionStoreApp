<template>
  <div>
      <h4 class="update-heading">Update A Product</h4>
    <div class="row">
      <form class="col s12 product-form" v-on:submit="updateProduct">
        <div class="row">
          <div class="input-field col s8">
            <input id="updateid" type="number" required class="validate" name="updateid" />
            <label for="updateid">Product ID To Update</label>
          </div>
          <button class="btn waves-effect waves-light col s4" type="button" name="updatepopulate" v-on:click="populateData">
            Populate Data
            <i class="material-icons right">assignment</i>
          </button>
        </div>

        <div class="row">
          <div class="input-field col s9">
            <input id="updatename" type="text" required class="validate" name="updatename" />
            <label for="updatename">Title</label>
          </div>

          <div class="input-field col s3">
            <input id="updateyear" type="number" class="validate" name="updateyear" />
            <label for="updateyear">Year</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="updategenre" type="text" class="validate" name="updategenre" />
            <label for="updategenre">Genres</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s4">
            <input id="updatedirector" type="text" class="validate" name="updatedirector" />
            <label for="updatedirector">Director</label>
          </div>

          <div class="input-field col s8">
            <input id="updateactors" type="text" class="validate" name="updateactors" />
            <label for="updateactors">Actors</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <textarea id="updatedescription" class="materialize-textarea" name="updatedescription"></textarea>
            <label for="updatedescription">Description</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="updateimage_url" name="updateimage_url" type="text" class="validate" />
            <label for="updateimage_url">Poster URL</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s4">
            <input id="updatequantity" name="updatequantity" type="number" required class="validate" />
            <label for="updatequantity">Stock Quantity</label>
          </div>
          <div class="input-field col s4">
            <input id="updateprice" name="updateprice" type="number" required class="validate" step="0.01" />
            <label for="updateprice">Price</label>
          </div>
          <div class="input-field col s4">
            <input id="updateformat" name="updateformat" type="text" required class="validate" />
            <label for="updateformat">Format</label>
          </div>
        </div>
        <div class="row">
          <button class="btn waves-effect waves-light" type="submit" name="updateaction">
            Update Product
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateProductComponent",
  methods: {
    updateProduct(e) {
      e.preventDefault;
      const data = new FormData(e.target);

      console.log(...data);
    },
    populateData(e){

        //Get request and fill v-models
        console.log(e);
    }
  }
};
</script>

<style scoped>

.update-heading {
    margin-bottom: 3rem;
}
</style>