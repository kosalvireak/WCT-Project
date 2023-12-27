<template>
  <div class="w-100 h-100">
    <div style="height: 300px">
      <Carousel />
    </div>
    <div
      class="d-flex align-items-center justify-content-center flex-row flex-wrap"
    >
      <div v-for="book in getAllBooks" :key="book.id">
        <Book :book="book" :key="book.id" />
      </div>
    </div>
  </div>
</template>
  
  <script>
import Carousel from "../components/Carousel.vue";
import Book from "../components/Book.vue";
export default {
  name: "Home",
  components: { Carousel, Book },
  computed: {
    getAllBooks() {
      return this.$store.getters.allBooks;
    },
  },
};
</script>
  
  <style>
</style>