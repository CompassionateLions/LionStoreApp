<template>
  <div>
    <ul class="collapsible">
      <li>
        <a class="collapsible-header orange darken-3 white-text">Year</a>
        <div class="collapsible-body">
          <div class="year-slider"></div>
          <div class="price-box row input-field">
            <input class="col s2 left year-value" v-on:change="updateSlider" v-model="yearMin" type="number" />
            <input class="col s2 right year-value" v-on:change="updateSlider" v-model="yearMax" type="number" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import M from "materialize-css";

import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";

export default {
  name: "CollabsibleYearFilter",
  components: {},
  computed: {
    years(){
      if(this.$store.state.shop.allProducts.length === 0){
        return [1920, 2020];
      }else{
        return this.$store.state.shop.allProducts.reduce((years, movie) => {
         if(movie.year > years[1]){
           years[1] =  movie.year;
         }
         if(movie.year < years[0]){
           years[0] = movie.year
         } 
         return years
       }, [9999, 0]);
      }
    }
  },
  watch:{
    years(){
      this.updateSliderRange();
    }
  },
  data() {
    return {
      yearMin: 0,
      yearMax: 100
    }
  },
  methods: {
    initSlider() {
      const yearSlider = document.querySelector(".year-slider");

      noUiSlider.create(yearSlider, {
        start: [this.years[0],this.years[1]],
        connect: true,
        step: 1,
        range: {
          min: this.years[0]-1,
          max: this.years[1]+1
        }
      });

      yearSlider.noUiSlider.on("update", this.updateTextboxes);

    },
    updateTextboxes(e) {
      this.yearMin = Math.round(e[0]);
      this.yearMax = Math.round(e[1]);
      console.log(e)
    },
    updateSlider(){
      const yearSlider = document.querySelector(".year-slider");
      yearSlider.noUiSlider.set([this.yearMin, this.yearMax]);
    },
    updateSliderRange(){
      const yearSlider = document.querySelector(".year-slider");
      yearSlider.noUiSlider.updateOptions({
        start: [this.years[0],this.years[1]],
        range: {
          min: this.years[0]-1,
          max: this.years[1]+1
        }
      });
    }
  },
  mounted() {
    M.AutoInit();

    this.initSlider();
  }
};
</script>

<style>
.year-slider {
  margin: 10px 20px;
}

.noUi-connect {
  background: #ff9800;
}

.year-box {
  padding: 0px 20px;
}

input.year-value::-webkit-outer-spin-button,
input.year-value::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input-field input[type="text"]:focus {

  border-bottom: 1px solid #ff9800 !important;
  box-shadow: 0 1px 0 0 #ff9800 !important;
}

.price-value {
  text-align: center;
}
</style>