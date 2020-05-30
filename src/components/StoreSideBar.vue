<template>
  <div class="sidebar">
    <ul id="slide-out" class="sidenav sidenav-fixed">
      <div v-bind:key="catagory.id" v-for="catagory in catagories">
        <CatagoryItem v-bind:catagory="catagory" />
      </div>
    </ul>
    <a href="#" data-target="slide-out" class="sidenav-trigger">
      <i class="material-icons">menu</i>
    </a>
  </div>
</template>

<script>
import CatagoryItem from "./CatagoryItem.vue";

export default {
  name: "StoreSideBar",
  props: ["catagories"],
  components: {
    CatagoryItem
  }
};
</script>

<style  scoped>
.sidenav-fixed {
    padding-top: 64px;
}
</style>