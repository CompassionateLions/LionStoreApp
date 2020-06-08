<template>
    <div id="app">
    <StoreHeader/>
        <div class="row">
            <div class ="col s12 m4 offset-m4">
                <div class="card">
                    <div class ="card-action">
                        <h3>Sign Up</h3>
                    </div>
                    <div class ="card-content">
                        <div class="form-field">
                            <label for="email">Email</label>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                id="username"
                                v-model="user.email">
                        </div><br>

                        <div class="form-field">
                            <label for="password">Password</label>
                            <input 
                                type="password"  
                                placeholder="Password" 
                                id="password"
                                v-model="user.password">
                        </div><br>

                        <div class="form-field">
                            <label for="confirmPassword">Confirm Password</label>
                            <input 
                                type="password"  
                                placeholder="Confirm password" 
                                id="confirm-password"
                                v-model="user.confirmPassword">
                        </div><br>

                         <div class="row">
                            <a 
                                class="btn-large waves-effect waves-light orange darken-3" 
                                style="width:100%;" 
                                type ="submit" 
                                id="login-btn"
                                v-on:click="signUpHandler"
                            >Register</a>
                        </div>
                        <div class="row">
                            <router-link to="/">
                            <a 
                                class="btn-large waves-effect waves-light orange darken-3" 
                                style="width:50%;" 
                                id="home-btn"
                                >Return to Home</a>
                            </router-link>
                            <router-link to="/Login">
                            <a 
                            class="btn-large waves-effect waves-light orange darken-3" 
                            style="width:50%;" 
                            id="signup-btn"
                            >Login</a>
                            </router-link>
                        </div><br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StoreHeader from './components/StoreHeader.vue'

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

</style>