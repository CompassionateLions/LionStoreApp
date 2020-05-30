<template>
  <div>
    <ul class="collapsible">
      <li>
        <a class="collapsible-header orange darken-3 white-text">Price</a>
        <div class="collapsible-body">
          <div class="price-slider"></div>
          <div class="price-box row input-field">
            <input class="col s2 left price-value" v-model="priceMin" type="text" />
            <input class="col s2 right price-value" v-model="priceMax" type="text" />
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
  name: "CollabsiblePriceFilter",
  components: {},
  data() {
    return {
      priceMin: 0,
      priceMax: 100
    }
  },
  methods: {
    initSlider() {
      const slider = document.querySelector(".price-slider");

      noUiSlider.create(slider, {
        start: [0, 100],
        connect: true,
        range: {
          min: 0,
          max: 100
        }
      });

      slider.noUiSlider.on("update", this.updateSlider);

    },
    updateSlider(e) {
      this.priceMin = Math.round(e[0]);
      this.priceMax = Math.round(e[1]);
      console.log(e)
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