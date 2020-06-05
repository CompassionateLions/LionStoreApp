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
        <div v-bind:key="order.orderId" v-for="order in orders">
            <OrderComponent v-bind:order="order"/>
        </div>
    </div>
  </div>
</template>

<script>

import OrderComponent from "./OrderComponent";

export default {
  name: "ViewOrdersComponent",
  components: {
      OrderComponent
  },
  data() {
    return {
      orders: [
        {
          userId: 23,
          orderId: 12,
          total: 234,
          orderPlaced: "2020-06-03T20:54:41.000Z",
          productsInOrder: [
            {
              productId: 573,
              name: "Die Hard",
              format: "16mm",
              individualCost: 43.1,
              quantity: 5,
              totalCost: 215.5
            },
            {
              productId: 609,
              name: "Kill Bill: Vol. 2",
              format: "DVD",
              individualCost: 9.25,
              quantity: 2,
              totalCost: 18.5
            }
          ]
        },
        {
          userId: 24,
          orderId: 13,
          total: 58.75,
          orderPlaced: "2020-06-03T20:54:41.000Z",
          productsInOrder: [
            {
              productId: 516,
              name: "Se7en",
              format: "DVD",
              individualCost: 11.75,
              quantity: 5,
              totalCost: 58.75
            }
          ]
        },
        {
          userId: 23,
          orderId: 14,
          total: 203.15,
          orderPlaced: "2020-06-03T20:54:41.000Z",
          productsInOrder: [
            {
              productId: 526,
              name: "The Departed",
              format: "DVD",
              individualCost: 37.4,
              quantity: 3,
              totalCost: 112.19999999999999
            },
            {
              productId: 618,
              name: "12 Angry Men",
              format: "DVD",
              individualCost: 12.6,
              quantity: 1,
              totalCost: 12.6
            },
            {
              productId: 635,
              name: "Transformers",
              format: "HD-DVD",
              individualCost: 21.95,
              quantity: 3,
              totalCost: 65.85
            },
            {
              productId: 734,
              name: "Children of Men",
              format: "DVD",
              individualCost: 6.25,
              quantity: 2,
              totalCost: 12.5
            }
          ]
        },
        {
          userId: 24,
          orderId: 15,
          total: 206.8,
          orderPlaced: "2020-06-03T20:54:41.000Z",
          productsInOrder: [
            {
              productId: 662,
              name: "Prisoners",
              format: "4K Blu-Ray",
              individualCost: 51.7,
              quantity: 4,
              totalCost: 206.8
            }
          ]
        }
      ]
    };
  },
  methods: {
    viewOneOrder() {},
    viewAllOrders() {}
  }
};
</script>

<style scoped>
.view-heading {
  margin-bottom: 3rem;
}
</style>