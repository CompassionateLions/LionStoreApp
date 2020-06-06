<template>
  <div>
    <h4 class="update-heading">Update A Product</h4>
    <div class="row">
      <form class="col s12 product-form" v-on:submit="updateProductHandler">
        <div class="row">
          <div class="input-field col s8">
            <input
              id="updateid"
              type="number"
              required
              class="validate"
              name="updateid"
              v-model="id"
            />
            <label for="updateid">Product ID To Update</label>
          </div>
          <button
            class="btn waves-effect waves-light col s4"
            type="button"
            name="updatepopulate"
            v-on:click="populateData"
          >
            Populate Data
            <i class="material-icons right">assignment</i>
          </button>
        </div>

        <div class="row">
          <div class="input-field col s9">
            <input
              id="updatename"
              type="text"
              required
              class="validate"
              name="updatename"
              v-model="name"
            />
            <label for="updatename">Title</label>
          </div>

          <div class="input-field col s3">
            <input id="updateyear" type="number" class="validate" name="updateyear" v-model="year" />
            <label for="updateyear">Year</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="updategenre" type="text" class="validate" name="updategenre" v-model="genre" />
            <label for="updategenre">Genres</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s4">
            <input
              id="updatedirector"
              type="text"
              class="validate"
              name="updatedirector"
              v-model="director"
            />
            <label for="updatedirector">Director</label>
          </div>

          <div class="input-field col s8">
            <input
              id="updateactors"
              type="text"
              class="validate"
              name="updateactors"
              v-model="actors"
            />
            <label for="updateactors">Actors</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <textarea
              id="updatedescription"
              class="materialize-textarea"
              name="updatedescription"
              v-model="description"
            ></textarea>
            <label for="updatedescription">Description</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input
              id="updateimage_url"
              name="updateimage_url"
              type="text"
              class="validate"
              v-model="image_url"
            />
            <label for="updateimage_url">Poster URL</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s4">
            <input
              id="updatequantity"
              name="updatequantity"
              type="number"
              required
              class="validate"
              v-model="quantity"
            />
            <label for="updatequantity">Stock Quantity</label>
          </div>
          <div class="input-field col s4">
            <input
              id="updateprice"
              name="updateprice"
              type="number"
              required
              class="validate"
              step="0.01"
              v-model="price"
            />
            <label for="updateprice">Price</label>
          </div>
          <div class="input-field col s4">
            <input
              id="updateformat"
              name="updateformat"
              type="text"
              required
              class="validate"
              v-model="format"
            />
            <label for="updateformat">Format</label>
          </div>
        </div>
        <div class="row">
          <button class="btn waves-effect waves-light" type="submit" name="updateaction">
            Update Product
            <i class="material-icons right">send</i>
          </button>
          <button class="btn waves-effect waves-light red darken-2 delete-button" type="button" @click="deleteProductHandler" name="updateaction">
            Delete Product
            <i class="material-icons right">delete</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import M from "materialize-css";

export default {
  name: "UpdateProductComponent",
  data() {
    return {
      id: "",
      name: "",
      year: "",
      genre: "",
      director: "",
      actors: "",
      description: "",
      image_url: "",
      quantity: "",
      price: "",
      format: ""
    };
  },
  methods: {
    ...mapActions(["getOneProduct", "updateProduct", "deleteProduct"]),
    updateProductHandler(e) {
      e.preventDefault();

      const data = {
        id: this.id,
        name: this.name,
        year: this.year,
        genre: this.genre,
        director: this.director,
        actors: this.actors,
        description: this.description,
        image_url: this.image_url,
        quantity: this.quantity,
        price: this.price,
        format: this.format
      };

      console.log(data);

      this.updateProduct(data).then(res => {
        console.log(res);
        if (res.error) {
          M.toast({ html: `Error: ${res.error}` }, 4000);
        } else if (res.success) {
          M.toast({ html: `Successfully updated ${this.name}` }, 4000);
          this.clearData();
        }
      });
    },
    deleteProductHandler() {
      if(!this.id > 0) return M.toast({html: "Please enter an ID"});
      this.deleteProduct(this.id).then(res => {
        if(res.error){
          M.toast({ html: `Error: ${res.error}` }, 4000);
        } else {
          
          M.toast({ html: `Product succesfully deleted` }, 4000);
          this.clearData();
        }
      });
    },
    populateData() {
      this.getOneProduct(this.id).then(res => {

        if(res.error) return M.toast({html: `Couldn't find product with ID ${this.id}`})
        const entries = Object.entries(res);
        for (let prop of entries) {
          this[prop[0]] = prop[1];
        }
      });
      //Get request and fill v-models
      console.log();
    },
    clearData() {
      this.id = "";
      this.name = "";
      this.year = "";
      this.genre = "";
      this.director = "";
      this.actors = "";
      this.description = "";
      this.image_url = "";
      this.quantity = "";
      this.price = "";
      this.forma = "";
    }
  }
};
</script>

<style scoped>
.update-heading {
  margin-bottom: 3rem;
}

.delete-button {
  margin-left: 20px;
}
</style>