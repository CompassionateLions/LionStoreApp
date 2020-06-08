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
                <input type="text" placeholder="Email" id="username" />
              </div>
              <br />

              <div class="form-field">
                <label for="password">Password</label>
                <input type="text" placeholder="Password" id="password" />
              </div>
              <br />

              <div class="row">
                <a
                  class="btn-large waves-effect waves-light orange darken-3"
                  style="width:50%;"
                  type="submit"
                  id="login-btn"
                >Register</a>
                <a
                  class="btn-large waves-effect waves-light orange darken-3"
                  style="width:50%;"
                  id="clear-btn"
                >Clear</a>
                <br />
              </div>
              <div class="row">
                <router-link to="/Login">
                  <a
                    class="btn-large waves-effect waves-light orange darken-3"
                    style="width:100%;"
                    id="signup-btn"
                  >Login</a>
                </router-link>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoreHeader from "./components/StoreHeader.vue";

export default {
  name: "Signup",
  components: {
    StoreHeader
  }
};
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
}

.col {
  margin: 0 !important;
}
</style>