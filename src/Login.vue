<template>
  <div id="app">
    <StoreHeader />
    <div class="container">
    <div class="row login-container">
      <div class="col s12 m10 l8">
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
            <!-- <div v-if="error" class="card-panel red lighten-1 error-msg">
                <span class="white-text">{{error}}</span>
              </div> -->

            <div class="row">
                <div class ="col s6">
                <a
                    class="btn waves-effect waves-light orange darken-3"
                    style="width:49%;"
                    type="submit"
                    id="login-btn"
                    v-on:click="loginHandler"           
                >Login</a>
                </div>
                <div class ="col s6">
                <a
<<<<<<< HEAD
                    class="btn waves-effect waves-light orange darken-3"
                    style="width:49%;"
=======
                    class="btn waves-effect waves-light orange darken-3 "
                    style="width:50%;"
>>>>>>> ca659f9ee201a6e5e3667f0a7b4fa1d8ec7759a4
                    id="clear-btn"
                    v-on:click="clear"
                >Clear</a>
                </div>
            </div>
            <div class="row">
              <router-link to="/Signup">
                <a
                  class="btn waves-effect waves-light orange darken-3"
                  style="width:50%;"
                  id="signup-btn"
                >Sign Up</a>
              </router-link>
            </div>
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

.login-container {
  display: flex;
  justify-content: center;
}

.col {
  margin: 0!important;
}
</style>