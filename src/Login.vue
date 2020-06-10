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
              

              <div class="form-field">
                <label for="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="password"
                  v-model="credentials.password"
                />
              </div>
              
              <Errors
              v-if="errors.length"
              :errors="errors"
              />

              <div class="row btn-row">
                <div class="col s12">
                  <button
                    class="btn waves-effect waves-light orange darken-3 login-btn"
                    
                    type="submit"
                    id="login-btn"
                    v-on:click="loginHandler"
                  >Login</button>
                </div>
              </div>
              <div class="row">
                <p>
                Don't have an account? 
                <router-link to="/Signup">
                  Sign up
                </router-link>
                </p>
              </div>
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
import Errors from "./components/Errors";

import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {
    StoreHeader,
    Errors
  },

  data() {
    return {
      credentials: {
        email: "",
        password: ""
      },
      errors: []
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    loginHandler() {
      this.errors = [];
      //console.log(this.email);
      //Do validation
      console.log(this.credentials);

      this.loginUser(this.credentials).then(result => {
        if (result.error) return this.errors.push(result.error); //handle error

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

.login-container {
  display: flex;
  justify-content: center;
}

.col {
  margin: 0 !important;
}

.btn-row {
  padding-top: 10px;
}

.login-btn {
  width: 100%;
}

</style>