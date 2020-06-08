<template>
  <div id="app">
    <StoreHeader />
    <div class="row">
      <div class="col s12 m4 offset-m4">
        <div class="card">
          <div class="card-action">
            <h3>Login Form</h3>
          </div>
          <div class="card-content">
            <div class="form-field">
              <label for="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                v-model="credentials.email"
              />
            </div>
            <br />

            <div class="form-field">
              <label for="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                v-model="credentials.password"
              />
            </div>
            <br />
            <div class="row">
                <a
                    class="btn waves-effect waves-light orange darken-3"
                    style="width:49%;"
                    type="submit"
                    id="login-btn"
                    v-on:click="loginHandler"           
                >Login</a>
                <a
                    class="btn waves-effect waves-light orange darken-3"
                    style="width:49%;"
                    id="clear-btn"
                    v-on:click="clear"
                >Clear</a>
            </div>
            <div class="row">
              <router-link to="/Signup">
                <a
                  class="btn waves-effect waves-light orange darken-3"
                  style="width:100%;"
                  id="signup-btn"
                >Sign Up</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoreHeader from "./components/StoreHeader.vue";

import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {
    StoreHeader
  },

  data() {
    return {
      credentials: {
        email: "",
        password: ""
      },
      error: ""
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    loginHandler() {
      //console.log(this.email);
      //Do validation
      console.log(this.credentials);

      this.loginUser(this.credentials).then(result => {
        if (result.error) return console.log(result); //handle error

       //console.log(this.$store.state.user.token)

        this.$router.push("/");
      });
    },
    clear(e) {
      e.preventDefault();
      (this.credentials.email = ""), (this.credentials.password = "");
    }
  }
};
</script>

<style scoped>

.btn:hover {
filter: brightness(130%);
}
.btn {
      margin-left: 2px;

}
</style>