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
              <div class="row btn-row">
                <div class="col s12">
                  <a
                    class="btn waves-effect waves-light orange darken-3 login-btn"
                    type="submit"
                    id="login-btn"
                    v-on:click="signUpHandler"
                  >Signup</a>
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
import { mapActions } from "vuex";
export default {
  name: "Signup",
  components: {
    StoreHeader
  },

  data() {
    return {
      user: {
        email: "",
        password: "",
        confirmPassword: ""
      },
      error: ""
    };
  },
  methods: {
    ...mapActions(["signUpUser"]),
    signUpHandler() {
      console.log(this.user);
      const body = {
        email: this.user.email,
        password: this.user.password,
        confirmpassword: this.user.confirmPassword
      };
      this.signUpUser(body).then(result => {
        if (result.error) return console.log(result);
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