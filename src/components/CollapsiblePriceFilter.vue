<template>
  <div>
    <ul class="collapsible">
      <li>
        <a class="collapsible-header orange darken-3 white-text">Price</a>
        <div class="collapsible-body">
          <div class="price-slider"></div>
          <div class="price-box row input-field">
            <input class="col s2 left price-value" v-on:change="updateSlider" v-model="priceMin" type="number" />
            <input class="col s2 right price-value" v-on:change="updateSlider" v-model="priceMax" type="number" />
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

import {mapActions} from 'vuex';

export default {
  name: "CollabsiblePriceFilter",
  components: {},
  data() {
    return {
      priceMin: 0,
      priceMax: 55
    }
  },
  methods: {
    ...mapActions(['updatePriceFilter']),
    initSlider() {
      const slider = document.querySelector(".price-slider");

      noUiSlider.create(slider, {
        start: [0, 55],
        connect: true,
        step: 1,
        range: {
          min: 0,
          max: 55
        }
      });

      slider.noUiSlider.on("update", this.updateTextboxes);
      slider.noUiSlider.on("set", this.updatePriceFilter);

    },
    updateTextboxes(e) {
      this.priceMin = Math.round(e[0]);
      this.priceMax = Math.round(e[1]);
      
    },
    updateSlider(){
      const slider = document.querySelector(".price-slider");
      slider.noUiSlider.set([this.priceMin, this.priceMax]);
      this.updatePriceFilter([this.priceMin, this.priceMax]);
    }
  },
  mounted() {
    M.AutoInit();

    this.initSlider();
  }
};
</script>

<style>
.price-slider {
  margin: 10px 20px;
}

.noUi-connect {
  background: #ff9800;
}

.price-box {
  padding: 0px 20px;
}

.input-field input[type="text"]:focus {
  border-bottom: 1px solid #ff9800 !important;
  box-shadow: 0 1px 0 0 #ff9800 !important;
}

.price-value {
  text-align: center;
}
</style>