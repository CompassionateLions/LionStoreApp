<template>
  <div>
    <StoreHeader />
    <h1>Admin page</h1>
    <div class="row container">
      <div class="col s12 tab-container">
        <ul class="tabs tabs-fixed-width">
          <li class="tab">
            <a class="active" href="#addProduct">Add New Product</a>
          </li>
          <li class="tab">
            <a href="#updateProduct">Update Existing Product</a>
          </li>
          <li class="tab">
            <a href="#viewOrders">View Orders</a>
          </li>
          <li class="tab">
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

import {mapGetters} from 'vuex';

export default {
  name: "Admin",
  components: {
    StoreHeader,
    AddProductComponent,
    UpdateProductComponent,
    ViewOrdersComponent,
    ViewUsersComponent
  },
  computed: {
    ...mapGetters(['allOrders', 'allUsers'])
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