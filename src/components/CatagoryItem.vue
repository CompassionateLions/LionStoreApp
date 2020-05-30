<template>
  <li>
    <a>
      <p>
        <label>
          <input type="checkbox" class="filled-in checkbox-orange" />
          <span>{{catagory.name}}</span>
        </label>
      </p>
    </a>
  </li>
</template>

<script>
export default {
  name: "CatagoryItem",
  props: ["catagory"]
};
</script>

<style scoped>
.checkbox-orange[type="checkbox"].filled-in:checked + label:after {
  border: 2px solid #ff9800 !important;
  background-color: #ff9800 !important;
}
</style>