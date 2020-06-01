<template>
  <div class="sidebar">
    <ul id="slide-out" class="sidenav sidenav-fixed">
        <!-- Filter title -->
        <h5>Filter Titles</h5>
        <SearchBox/>
        <CollapsibleGenreFilter v-bind:genres="genres" class="filter-item"/>
        <CollapsiblePriceFilter  class="filter-item"/>
        <CollapsibleYearFilter  class="filter-item"/>
      
    </ul>
    <a href="#" data-target="slide-out" class="sidenav-trigger left">
      <i class="material-icons">menu</i>
    </a>
  </div>
</template>

<script>
import SearchBox from "./SearchBox.vue";
import CollapsibleGenreFilter from "./CollapsibleGenreFilter";
import CollapsiblePriceFilter from "./CollapsiblePriceFilter";
import CollapsibleYearFilter from "./CollabsibleYearFilter";

export default {
  name: "StoreSideBar",
  props: ["genres"],
  components: {
    SearchBox,
    CollapsibleGenreFilter,
    CollapsiblePriceFilter,
    CollapsibleYearFilter
  }
};
</script>

<style  scoped>
.sidenav-fixed {
    padding-top: 70px;
}

.filter-item{
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>