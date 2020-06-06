<template>
    <div id="app">
    <StoreHeader/>
        <div class="row">
            <div class ="col s12 m4 offset-m4">
                <div class="card">
                    <div class ="card-action">
                        <h3>Login Form</h3>
                    </div>
                    <div class ="card-content">
                        <div class="form-field">
                            <label for="email">Email</label>
                            <input type="text" placeholder="Enter your email" id="username" v-model="credentials.email">
                        </div><br>

                        <div class="form-field">
                            <label for="password">Password</label>
                            <input type="text" placeholder="Enter your password" id="password" v-model="credentials.password">
                        </div><br>

                        <div class="row">
                            <a class="btn-large waves-effect waves-light orange darken-3" style="width:50%;" type ="submit" id="login-btn" v-on:click="login">Login</a>
                            <a class="btn-large waves-effect waves-light orange darken-3" style="width:50%;" id="clear-btn" v-on:click="clear">Clear</a>
                        </div>
                        <div class="row">
                            <router-link to="/Signup"><a class="btn-large waves-effect waves-light orange darken-3" style="width:100%;" id="signup-btn">Sign Up</a></router-link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StoreHeader from './components/StoreHeader.vue'

export default {
    name: 'Login',
    components: {
         StoreHeader  
    },
    
    data() {
        return{
            credentials: {
                email: '',
                password: ''
            },
            error: ''
        }
    },
    methods: {
        login(){
            //console.log(this.email);
          //Do validation
          const form = {email: this.credentials.email, password: this.credentials.password }

          console.log(form)
            fetch('/api/users/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }).then((res) => {
                return res.json();
            }).then((json) => {
                console.log(json) //extract token and store in local + somewhere in vue
            })
        },
        clear(e) {
                e.preventDefault()
                this.credentials.email = "",
                this.credentials.password = ""
        }
    }

    }
</script>

<style scoped>

</style>