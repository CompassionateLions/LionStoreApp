<template>
  <div>
    <li>
      <div class="nav-wrapper orange darken-3">
        <form>
          <div class="input-field">
            <input 
            id="search" 
            class="white-text" 
            type="search" 
            placeholder="Search"
            v-model="searchTerm"
            v-on:keyup="searchTitle" />
            <label class="label-icon" for="search">
              <i class="material-icons search-icon">search</i>
            </label>
            <i class="material-icons close-icon">close</i>
          </div>
        </form>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  data() {
      return {
          searchTerm: ''
      }
  },
  methods: {
      searchTitle() {
          console.log(this.searchTerm);
      }
  }
};
</script>

<style  scoped>

.search-wrapper {
    position: relative;
}

.input-field {
    margin-top: 5px;
    margin-bottom: 5px;
}

#search {
    margin: 0;
}

#search:focus {
    color: black!important;
}

.search-icon,.close-icon {
    position: absolute;
    top: 24px!important;
    transform: translate(0, -50%);
}


</style>