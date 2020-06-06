<template>
  <div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Order ID: {{Order.orderId}}</span>

          <p>User ID: {{Order.userId}}</p>
          <p>Order Placed: {{Order.orderPlaced}}</p>
          <table class="centered">
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Format</th>
                <th>Item Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>

            <tbody>
              <tr v-bind:key="product.productId" v-for="(product) in Order.productsInOrder">
                <td>{{product.productId}}</td>
                <td>{{product.name}}</td>
                <td>{{product.format}}</td>
                <td>$ {{product.individualCost.toFixed(2)}}</td>
                <td>x {{product.quantity}}</td>
                <td>$ {{product.totalCost.toFixed(2)}}</td>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><span class="order-total">Order Total:</span></td>
                  <td><span class="order-total">$ {{Order.total.toFixed(2)}}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderComponent",
  props: ["Order"]
};
</script>

<style scoped>
.order-total {
    font-weight: bold;
}
</style>