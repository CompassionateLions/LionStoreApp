<template>
  <div>
    <h4 class="view-heading">View Users</h4>
    <div class="row valign-wrapper">
      <div class="input-field col s5">
        <input id="userId" type="number" class="validate" />
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

    <div class="row">
      <div v-bind:key="user.id" v-for="user in users" class="col s12 m6">
        <UserComponent v-bind:user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import UserComponent from "./UserComponent";

export default {
  name: "ViewUsersComponent",
  components: {
    UserComponent
  },
  data() {
    return {
      users: [
        {
          id: 23,
          email: "ben@fawcett.xyz",
          role: "admin"
        },
        {
          id: 24,
          email: "ben@lionstore.com",
          role: "admin"
        },
        {
          id: 25,
          email: "ruma@lionstore.com",
          role: "admin"
        },
        {
          id: 26,
          email: "ziyen@lionstore.com",
          role: "admin"
        },
        {
          id: 27,
          email: "karthik@lionstore.com",
          role: "admin"
        },
        {
          id: 28,
          email: "humphrey_bogart@test.com",
          role: "user"
        },
        {
          id: 29,
          email: "james_stewart@test.com",
          role: "user"
        },
        {
          id: 30,
          email: "ingrid_bergman@test.com",
          role: "user"
        },
        {
          id: 31,
          email: "rita_hayworth@test.com",
          role: "user"
        },
        {
          id: 32,
          email: "ginger_rodgers@test.com",
          role: "user"
        },
        {
          id: 33,
          email: "edward_robinson@test.com",
          role: "user"
        }
      ]
    };
  },
  methods: {
    viewOneUser() {},
    viewAllUsers() {}
  }
};
</script>

<style scoped>
.view-heading {
  margin-bottom: 3rem;
}
</style>