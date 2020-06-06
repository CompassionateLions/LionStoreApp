<template>
  <div>
    <h4 class="view-heading">View Orders</h4>
    <div class="row valign-wrapper">
      <div class="input-field col s5">
        <input id="productId" type="number" class="validate" />
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
        <div v-bind:key="order.orderId" v-for="order in allOrders">
            <OrderComponent v-bind:order="order"/>
        </div>
    </div>
  </div>
</template>

<script>

import OrderComponent from "./OrderComponent";

import {mapGetters} from 'vuex';

export default {
  name: "ViewOrdersComponent",
  components: {
      OrderComponent
  },
  computed:{
    ...mapGetters(['allOrders'])
  },
  methods: {
    viewOneOrder() {},
    viewAllOrders() {}
  }
}
</script>

<style scoped>
.view-heading {
  margin-bottom: 3rem;
}
</style>