

<template>
  <div class="d-flex flex-column vh-100">
    <div v-if="isLogin">
      <NavBar />
    </div>
    <main class="container mt-3">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
  computed: {
    isLogin() {
      // This funtion use to check if the user stay in login or signup page thus we hide Navbar
      if (this.$route.name == "login" || this.$route.name == "signup") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style>
</style>