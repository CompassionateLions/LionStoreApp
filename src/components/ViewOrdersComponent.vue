<template>
  <div>
    <h4 class="view-heading">View Orders</h4>
    <div class="row valign-wrapper">
      <div class="input-field col s5">
        <input id="orderId" type="number" v-model="orderId" />
        <label for="orderId">OrderID To View</label>
      </div>
      <button
        class="btn waves-effect waves-light col s3"
        type="button"
        name="viewOneOrder"
        v-on:click="viewOneOrder"
      >
        View Order
        <i class="material-icons right">assignment</i>
      </button>
      <button
        class="btn waves-effect waves-light col s3"
        type="button"
        name="vewAllOrders"
        v-on:click="viewAllOrders"
      >
        View All Orders
        <i class="material-icons right">assignment</i>
      </button>
    </div>
    <div class="row">
        <div v-bind:key="Order.orderId" v-for="Order in allOrders">
            <OrderComponent v-bind:Order="Order"/>
        </div>
    </div>
  </div>
</template>

<script>

import OrderComponent from "./OrderComponent";

import {mapActions} from 'vuex';

export default {
  name: "ViewOrdersComponent",
  components: {
      OrderComponent
  },
  data(){
    return {
      allOrders: [],
      orderId: '',
    }
  },
  methods: {
    ...mapActions(['getAllOrders','getOneOrder']),
    viewAllOrders() {
      this.getAllOrders().then(orders => {
        this.allOrders = orders
      });
    },
    viewOneOrder(){
      this.getOneOrder(this.orderId).then(order => {
        this.allOrders = [order]
      }).catch(err => {
        console.log(err);
      });
    }

  }
}
</script>

<style scoped>
.view-heading {
  margin-bottom: 3rem;
}
</style>