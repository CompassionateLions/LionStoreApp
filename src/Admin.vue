<template>
  <div>
    <StoreHeader />
    <h1>Admin page</h1>
    <div class="row container">
      <div class="col s12 tab-container">
        <ul class="tabs">
          <li class="tab col s3">
            <a class="active" href="#addProduct">Add New Product</a>
          </li>
          <li class="tab col s3">
            <a href="#updateProduct">Update Existing Product</a>
          </li>
          <li class="tab col s3">
            <a href="#viewOrders">View Orders</a>
          </li>
          <li class="tab col s3">
            <a href="#viewUsers">View Users</a>
          </li>
        </ul>
      </div>
      <div id="addProduct" class="col s12">
          <AddProductComponent/>
      </div>
      <div id="updateProduct" class="col s12">
          <UpdateProductComponent/>
      </div>

      <div id="viewOrders" class="col s12">
          <ViewOrdersComponent/>
      </div>
      <div id="viewUsers" class="col s12">
          <ViewUsersComponent/>
      </div>
    </div>
  </div>
</template>

<script>
import StoreHeader from "./components/StoreHeader";
import AddProductComponent from "./components/AddProductComponent";
import UpdateProductComponent from "./components/UpdateProductComponent";
import ViewOrdersComponent from "./components/ViewOrdersComponent";
import ViewUsersComponent from "./components/ViewUsersComponent";

import M from "materialize-css";

export default {
  name: "Admin",
  components: {
    StoreHeader,
    AddProductComponent,
    UpdateProductComponent,
    ViewOrdersComponent,
    ViewUsersComponent
  },
  mounted() {
    M.AutoInit();
  }
};
</script>

<style scoped>

.tab-container {
    margin-bottom: 70px;
}
</style>