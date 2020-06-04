<template>
  <li>
    <a>
      <p>
        <label class="left">
          <input type="checkbox" class="filled-in checkbox-orange" />
          <span>{{genre}}</span>
        </label>
      </p>
    </a>
  </li>
</template>

<script>
export default {
  name: "CategoryItem",
  props: ["genre"]
};
</script>

<style scoped>
.checkbox-orange[type="checkbox"].filled-in:checked + span:after {
  border: 2px solid #ff9800 !important;
  background-color: #ff9800 !important;
}
</style>