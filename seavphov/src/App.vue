

<template>
  <div class="d-flex flex-column vh-100">
    <NavBar />
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
};
</script>

<style>
</style>