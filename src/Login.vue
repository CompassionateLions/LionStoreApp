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
                            <input type="text" placeholder="Email" id="username">
                        </div><br>

                        <div class="form-field">
                            <label for="password">Password</label>
                            <input type="text"  placeholder="Password" id="password">
                        </div><br>

                        <div class="form-field">
                            <button class="btn-medium" style="width:50%;" id="login-btn">Login</button>
                            <button class="btn-medium" style="width:50%;" id="clear-btn">Clear</button><br>
                            <button class="btn-medium" style="width:100%;" id="signup-btn">Sign Up</button>
                        </div><br>
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
    }
</script>

<style scoped>

</style>