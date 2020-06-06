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
            />
            <label class="label-icon" for="search">
              <i class="material-icons search-icon">search</i>
            </label>
            <i class="material-icons close-icon" @click="clearSearchTerm">close</i>
          </div>
        </form>
      </div>
    </li>
  </div>
</template>

<script>

// import {mapActions} from 'vuex';

export default {
  name: "SearchBox",
  computed: {
    searchTerm:{
      get(){
        return this.$store.getters.searchTerm;
      },
      set(value){
        this.$store.dispatch('searchTermUpdateHandler', value)
      }
    }
  },
  methods:{
    clearSearchTerm(){
      this.searchTerm = '';
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


  // methods: {
  //     ...mapActions(['updateNameFilter']),
  //     searchTitle() {
  //         console.log(this.searchTerm);
  //         this.updateNameFilter(this.searchTerm);
  //     }
  // }