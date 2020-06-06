<template>
  <li>
    <a>
      <p>
        <label class="left">
          <input type="checkbox" v-on:change="checkboxHandler" class="filled-in checkbox-orange" :checked="genre.checked"/>
          <span>{{genre.name}}</span>
        </label>
      </p>
    </a>
  </li>
</template>

<script>

import {mapActions} from 'vuex';

export default {
  name: "CategoryItem",
  props: ["genre"],
  methods: {
    ...mapActions(['updateGenreFilter']),
    checkboxHandler(){
      this.updateGenreFilter(this.genre.name);
    }
  }
};
</script>

<style scoped>
.checkbox-orange[type="checkbox"].filled-in:checked + span:after {
  border: 2px solid #ff9800 !important;
  background-color: #ff9800 !important;
}
</style>