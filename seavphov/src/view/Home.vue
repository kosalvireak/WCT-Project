<template>
  <div class="w-100 h-100">
    <div style="height: 300px">
      <Carousel />
    </div>
    <div class="mt-3">
      <div class="container d-flex align-item-center justify-content-center">
        <button class="btn btn-info" @click="filterBooks('All')">All</button>
        <button class="btn btn-primary" @click="filterBooks('Fiction')">
          Fiction
        </button>
        <button class="btn btn-primary" @click="filterBooks('Novel')">
          Novel
        </button>
        <button class="btn btn-primary" @click="filterBooks('Text-Book')">
          Text-Book
        </button>
        <button class="btn btn-primary" @click="filterBooks('History')">
          History
        </button>
        <button class="btn btn-primary" @click="filterBooks('Science')">
          Science
        </button>
      </div>

      <RenderBook :books="filteredBooks" />
    </div>
  </div>
</template>
  
  <script>
import Carousel from "../components/Carousel.vue";
import RenderBook from "../components/RenderBook.vue";
export default {
  name: "Home",
  components: { Carousel, RenderBook },
  data() {
    return {
      Books: [],
      filter: null,
    };
  },
  computed: {
    filteredBooks() {
      if (this.filter) {
        return this.Books.filter((book) => book.categories == this.filter);
      } else {
        return this.Books;
      }
    },
  },
  methods: {
    filterBooks(category) {
      if (category === "All") {
        this.filter = null;
      } else {
        this.filter = category;
      }
    },
  },
  mounted() {
    this.Books = this.$store.getters.allBooks;
  },
};
</script>
  
  <style>
</style>