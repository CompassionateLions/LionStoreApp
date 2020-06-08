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
                                class="btn waves-effect waves-light orange darken-3" 
                                style="width:100%;" 
                                type ="submit" 
                                id="login-btn"
                                v-on:click="signUpHandler"
                            >Register</a>
                        </div>
                        <div class="row">                      
                                 <router-link to="/">
                            <a 
                                class="btn waves-effect waves-light orange darken-3" 
                                style="width:49%;" 
                                id="home-btn"
                                >Return to Home</a>
                            </router-link>
                                 <router-link to="/Login">
                            <a 
                            class="btn waves-effect waves-light orange darken-3" 
                            style="width:49%;" 
                            id="signup-btn"
                            >Login</a>
                          </router-link>                       
                        </div><br>
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

import { mapActions } from "vuex";

export default {
    name: 'Signup',
    components: {
    StoreHeader  
  },  
    
    data() {
        return {
            user: {
                email: '',
                password: '',
                confirmPassword:''
            },
            error: ""
        };
    },

    methods: {
        ...mapActions(["signUpUser"]),
        signUpHandler (){
        console.log(this.user);
        const body = {
            email: this.user.email, 
            password: this.user.password, 
            confirmpassword: this.user.confirmPassword}

            this.signUpUser(body).then(result => {
                if (result.error) return console.log(result);
                this.$router.push("/");
            });
        }
     }
};
</script>

<style scoped>
<<<<<<< HEAD
.btn:hover {
filter: brightness(130%);
}
.btn {
      margin-left: 2px;

=======
.signup-container {
  display: flex;
  justify-content: center;
>>>>>>> ca659f9ee201a6e5e3667f0a7b4fa1d8ec7759a4
}

.col {
  margin: 0 !important;
}
</style>