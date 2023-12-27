<template>
  <div class="w-100 h-100">
    <div style="height: 300px">
      <Carousel />
    </div>
    <div>
      <RenderBook :books="getAllBooks" />
    </div>
  </div>
</template>
  
  <script>
import Carousel from "../components/Carousel.vue";
import Book from "../components/Book.vue";
import RenderBook from "../components/RenderBook.vue";
export default {
  name: "Home",
  components: { Carousel, Book, RenderBook },
  computed: {
    getAllBooks() {
      return this.$store.getters.allBooks;
    },
  },
};
</script>
  
  <style>
</style>