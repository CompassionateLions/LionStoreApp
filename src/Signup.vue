<template>
  <div id="app">
    <StoreHeader />
    <div class="container">
      <div class="row signup-container">
        <div class="col s12 m10 l8">
          <div class="card">
            <div class="card-action">
              <h3>Sign Up</h3>
            </div>
            <div class="card-content">
              <div class="form-field">
                <label for="email">Email</label>
                <input type="email" placeholder="Email" id="username" v-model="user.email" />
              </div>

              <div class="form-field">
                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" v-model="user.password" />
              </div>

              <div class="form-field">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  id="confirm-password"
                  v-model="user.confirmPassword"
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
                    v-on:click="signUpHandler"
                  >Signup</button>
                </div>
              </div>
              <div class="row">
                <p>
                  Already have an account?
                  <router-link to="/Login">Login</router-link>
                </p>
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
import Errors from "./components/Errors"

import { mapActions } from "vuex";
import { validationMixins } from "./mixins/validationMixins";


export default {
  name: "Signup",
  components: {
    StoreHeader,
    Errors
  },
  mixins: [validationMixins],
  data() {
    return {
      user: {
        email: "",
        password: "",
        confirmPassword: ""
      },
      errors: []
    };
  },
  methods: {
    ...mapActions(["signUpUser"]),
    signUpHandler() {
      this.errors = [];
      console.log(this.user);

      if (
        !this.user.email.length ||
        !this.user.password.length ||
        !this.user.confirmPassword.length
      )
        return this.errors.push("Please fill in all information");

      this.validateEmail(this.user.email, this.errors);
      this.validatePassword(this.user.password, this.errors);

      if (this.user.password !== this.user.confirmPassword)
        this.errors.push("Passwords don't match");

      if (this.errors.length) return;

      const body = {
        email: this.user.email,
        password: this.user.password,
        confirmpassword: this.user.confirmPassword
      };
      this.signUpUser(body).then(result => {
        if (result.error){
            console.log(result.error)
            return this.errors.push(result.error);
        }
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped>
.btn:hover {
  filter: brightness(130%);
}

.btn:hover {
  filter: brightness(130%);
}

.signup-container {
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