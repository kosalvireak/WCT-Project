<template>
  <div
    class="Book card m-2 mb-3 mx-3 p-0 border-start-1 shadow-5-strong"
    style="height: 20rem; width: 13rem"
  >
    <router-link
      :to="`/home/${book.id}`"
      class="d-flex justify-content-center h-50 bg-success-subtle bg-image hover-zoom"
      style="height: 12rem"
    >
      <img
        :src="book.images"
        class="card-img-top img-fluid rounded"
        alt="<%=book.title %>"
        style="object-fit: contain"
      />
    </router-link>
    <div class="card-body p-0 m-0" style="height: 8rem">
      <h6 class="card-title p-3 pb-0 m-0 h-50 fw-bold">{{ book.title }}</h6>
      <p class="p-0 px-3 m-0 h-20">Condition: {{ book.condition }}</p>
      <div class="d-flex flex-row justify-content-between h-20 px-3">
        <button
          type="button"
          class="btn btn-success d-flex align-items-center justify-content-center w-auto"
          v-if="book.availability"
          data-mdb-ripple-init
          style="font-size: x-small"
        >
          Avaliable
        </button>
        <button
          type="button"
          class="btn btn-danger align-items-center justify-content-center w-auto text-wrap"
          style="font-size: x-small"
          data-mdb-ripple-init
          v-else
        >
          Not Avaliable
        </button>
        <input type="text" name="id" value="<%=book.id%>" class="d-none" />
        <button class="border-0 bg-white">
          <i
            class="fa-solid fa-bookmark fa-2xl"
            style="color: yellow"
            v-if="book.issaved"
            @click="toggleIsSaved()"
          ></i>
          <i
            class="fa-regular fa-bookmark fa-2xl"
            style="color: darkgrey"
            v-else
            @click="toggleIsSaved()"
          ></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
  props: { book: Object },
  methods: {
    toggleIsSaved() {
      this.$store.dispatch("changeIsSaved", this.book.id);
    },
  },
};
</script>

<style>
</style>