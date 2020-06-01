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
        start: [2010,2020],
        connect: true,
        range: {
          min: 1900,
          max: 2020
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