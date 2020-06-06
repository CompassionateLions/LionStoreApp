<template>
  <div>
    <h4 class="view-heading">View Users</h4>
    <div class="row valign-wrapper">
      <div class="input-field col s5">
        <input id="userId" type="number" v-model="userId" />
        <label for="userId">UserID To View</label>
      </div>
      <button
        class="btn waves-effect waves-light col s3"
        type="button"
        name="viewOneUser"
        v-on:click="viewOneUser"
      >
        View User
        <i class="material-icons right">assignment</i>
      </button>
      <button
        class="btn waves-effect waves-light col s3"
        type="button"
        name="vewAllUsers"
        v-on:click="viewAllUsers"
      >
        View All Users
        <i class="material-icons right">assignment</i>
      </button>
    </div>

    <div class="row box-container">
      <div v-bind:key="user.id" v-for="user in users" class="col s12 m4 box-outer-wrapper">
        <UserComponent v-bind:user="user" class="card-wrapper"/>
      </div>
    </div>
  </div>
</template>

<script>
import UserComponent from "./UserComponent";

import {mapActions} from 'vuex'

export default {
  name: "ViewUsersComponent",
  components: {
    UserComponent
  },
  data(){
    return {
      users: [],
      userId: '',
    }
  },
  methods: {
    ...mapActions(['getAllUsers','getOneUser']),
    viewAllUsers() {
      this.getAllUsers().then(users => {
        this.users = users
      });
    },
    viewOneUser(){
      this.getOneUser(this.userId).then(user => {
        this.users = [user]
      }).catch(err => {
        console.log(err);
      });
    }

  }
};
</script>

<style scoped>
.view-heading {
  margin-bottom: 3rem;
}
.box-container{
  display: flex;
  align-content: stretch;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.box-container::after{
  display: none;
}

.card-wrapper {
  height: 100%;
  padding: 10px;
}

.box-outer-wrapper {
  margin: 0!important;
}
</style>