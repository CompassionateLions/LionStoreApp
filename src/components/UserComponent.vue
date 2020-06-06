<template>

    <div>
      <div class="card">
        <div class="card-image">
          <img class="responsive-img user-avatar" v-bind:src="image" />
        </div>
          <span class="card-title black-text">{{user.email}}</span>
        <div class="card-content">
          <p>ID: <span class="bold">{{user.id}}</span></p>
          <p>Role: <span class="bold">{{user.role}}</span></p>
        </div>
      </div>
    </div>
    
</template>

<script>
export default {
  name: "UserComponent",
  props: ["user"],
  data(){
      return {
          image: `https://api.adorable.io/avatars/285/${this.user.email}.png`
      }
  }
};
</script>

<style scoped>
.card-image {
    
    display: flex;
    justify-content: center;
    align-content: center;
}
.user-avatar {
    max-height: 300px;
    max-width: 300px;
}

.card-title {
    overflow-wrap: break-word;
    padding: 0 15px;
}

.bold {
    font-weight: bold;
}

.card {
  height: 100%;
  padding: 20px;
}
</style>