<template>
  <div>
    <StoreHeader />
    <div class="container">
      <h1>Profile page</h1>
      <div class="row">
        <div class="card">
            <img :src="img" class="responsive-img">
            <div class="card-content">
                <h6><span class="bold">Email:</span> {{user.email}}</h6>
            </div>
        </div>


        <div class="card">
          <div class="card-title"> <h4>Change Password</h4></div>
          <div class="card-content">
            <form action @submit.prevent="changePasswordHandler">
              <div class="input-field">
                <input
                  id="oldPassword"
                  type="password"
                  required
                  class="validate"
                  name="oldPassword"
                  v-model="oldPassword"
                />
                <label for="oldPassword">Old Password</label>
              </div>
              <div class="input-field">
                <input
                  id="newPassword"
                  type="password"
                  required
                  class="validate"
                  name="newPassword"
                  v-model="newPassword"
                />
                <label for="newPassword">New Password</label>
              </div>
              <div class="input-field">
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  class="validate"
                  name="confirmPassword"
                  v-model="confirmPassword"
                />
                <label for="confirmPassword">Confirm Password</label>
              </div>

              <Errors
              v-if="errors.length"
              :errors="errors"
              />
              <button class="btn waves-effect waves-light" type="submit" name="action">
                Submit
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>

        <div class="card">
          <div class="card-title"><h4>Orders</h4></div>
          <div class="card-content">
            <button
              v-if="orders.length === 0"
              @click="viewOrdersHandler"
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              View All Orders
              <i class="material-icons right">send</i>
            </button>

            <div :key="order.orderId" v-for="order in orders">
                <OrderComponent v-bind:order="order" />
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoreHeader from "./components/StoreHeader";
import OrderComponent from "./components/OrderComponent"
import Errors from "./components/Errors"

import { validationMixins } from "./mixins/validationMixins";

import { mapActions, mapGetters } from "vuex";


export default {
  name: "ProfilePage",
  mixins:[validationMixins],
  components: {
      StoreHeader,
      OrderComponent,
      Errors
  },
  computed:{
      ...mapGetters(['user']),
      img(){
          return `https://api.adorable.io/avatars/300/${this.user.email}.png`;
      }
  },
  data() {
    return {
      errors: [],
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      orders: []
    };
  },
  methods: {
    ...mapActions(["changePassword", "getUserOrders"]),
    changePasswordHandler(e) {
      this.errors = [];

      if (
        !this.oldPassword.length ||
        !this.newPassword.length ||
        !this.confirmPassword.length
      )
        return this.errors.push("Please fill in all information");

      this.validatePassword(this.newPassword, this.errors);

      if (this.newPassword !== this.confirmPassword)
        this.errors.push("Passwords don't match");

      if (this.errors.length) return;

      const data = new URLSearchParams(new FormData(e.target));

      console.log([...data.entries()]);

      this.changePassword(data).then(response => {
        console.log(response);
        if (response.error) return this.errors.push(response.error);

        this.clear();
      });
    },
    clear() {
      this.oldPassword = "";
      this.newPassword = "";
      this.confirmPassword = "";
    },
    viewOrdersHandler() {
      this.getUserOrders().then(response => {
        if (response.error) return;

        console.log(response);
        this.orders = response;
      });
    }
  }
};
</script>

<style scoped>
.card {
  padding-top: 20px;
}

.error-msg {
  padding: 10px;
}

.bold {
    font-weight: bold;
}
</style>