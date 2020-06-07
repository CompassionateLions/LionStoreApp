<template>
  <li>
    <a class="dropdown-trigger avatar-label no-autoinit" data-target="dropdown1">
      <img class="responsive-img circle user-avatar" :src="img" />
      {{user.email}}
    </a>

    <ul id="dropdown1" class="dropdown-content no-autoinit">
      <li>
        <router-link to="/Profile">Profile</router-link>
      </li>
      <li>
        <a @click="logoutHandler">Logout</a>
      </li>
    </ul>
  </li>
</template>

<script>
import M from "materialize-css";

import { mapGetters, mapActions} from "vuex";

export default {
  name: "UserDropDown",
  computed: {
    ...mapGetters(["user"]),
    img() {
      return `https://api.adorable.io/avatars/30/${this.user.email}.png`;
    }
  },
  data() {
    return {};
  },
  methods: {
      ...mapActions(['logoutUser']),
      logoutHandler(){
          this.logoutUser()
          console.log(this.$route);
          if(this.$route.path !== "/"){
              this.$router.push("/");
          }
      }
  },
  mounted: function() {
      console.log("Mounted");

    // const dd = M.Dropdown.getInstance(document.querySelector(".dropdown-trigger"));
    // console.log(dd);

    M.Dropdown.init(document.querySelector(".dropdown-trigger"), {
      hover: true,
      alignment: "right",
      coverTrigger: false
    });
  }
};
</script>

<style scoped>
.avatar-label {
  padding-right: 60px;
  position: relative;
}
.user-avatar {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
}
</style>