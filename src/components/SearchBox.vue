<template>
  <div>
    <li>
      <div class="nav-wrapper orange darken-3">
        <form>
          <div class="input-field">
            <input id="search" type="search" required />
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "SearchBox"
};
</script>

<style  scoped>
</style>