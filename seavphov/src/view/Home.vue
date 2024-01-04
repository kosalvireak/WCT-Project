<template>
  <div class="w-100 h-100">
    <div style="height: 300px">
      <Carousel />
    </div>
    <div class="mt-3 row">
      <div
        class="d-flex align-item-center justify-content-center col-xl-3 col-md-5 col-sm-12"
      >
        <div
          class="d-flex align-item-center justify-content-center flex-column w-100 bg-white rounded-7 mt-md-5 p-2"
          style="height: 31rem"
        >
          <h4 class="text-center mb-2 text-gray fw-bold">Filter</h4>
          <div class="category ms-3">
            <h5 class="fw-bold text-gray">Category</h5>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="Categories"
                value="Fiction"
                id="Fiction"
              />
              <label class="form-check-label" for="Fiction">Fiction</label>
              <br />
              <input
                class="form-check-input"
                type="checkbox"
                v-model="Categories"
                value="Novel"
                id="Novel"
              />
              <label class="form-check-label" for="Novel">Novel</label><br />
              <input
                class="form-check-input"
                type="checkbox"
                v-model="Categories"
                value="Text-Book"
                id="Text-Book"
              />
              <label class="form-check-label" for="Text-Book">Text-Book</label
              ><br />
              <input
                class="form-check-input"
                type="checkbox"
                v-model="Categories"
                value="History"
                id="History"
              />
              <label class="form-check-label" for="History">History</label
              ><br />
              <input
                class="form-check-input"
                type="checkbox"
                v-model="Categories"
                value="Science"
                id="Science"
              />
              <label class="form-check-label" for="Science">Science</label
              ><br />
              <input
                class="form-check-input"
                type="checkbox"
                v-model="Categories"
                value="Fantasy"
                id="Fantasy"
              />
              <label class="form-check-label" for="Fantasy">Fantasy</label
              ><br />
            </div>
          </div>
          <div class="condition ms-3">
            <h5 class="fw-bold text-gray">Condition</h5>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="Condition"
                value="as-new"
                id="as-new"
              />
              <label class="form-check-label" for="as-new">as-new</label>
              <br />
              <input
                class="form-check-input"
                type="checkbox"
                v-model="Condition"
                value="good"
                id="good"
              />
              <label class="form-check-label" for="good">good</label><br />
              <input
                class="form-check-input"
                type="checkbox"
                v-model="Condition"
                value="well-worn"
                id="well-worn"
              />
              <label class="form-check-label" for="well-worn">well-worn</label>
            </div>
          </div>
          <div class="availability ms-3">
            <h5 class="fw-bold text-gray">Availability</h5>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="Availability"
                v-model="Availability"
                value="true"
                id="Avaliable"
              />
              <label class="form-check-label" for="Avaliable">
                Avaliable
              </label>
              <br />
              <input
                class="form-check-input"
                type="radio"
                name="Availability"
                v-model="Availability"
                value="false"
                id="NotAvaliable"
              />
              <label class="form-check-label" for="NotAvaliable">
                Not Avaliable
              </label>
              <br />
            </div>
          </div>
          <button
            class="btn btn-danger mt-2 ms-3"
            @click="clearFilter()"
            style="width: 6rem"
          >
            clear
          </button>
        </div>
      </div>
      <div class="col-xl-9 col-md-7 col-sm-12">
        <RenderBook :books="filteredBooks" />
      </div>
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
      Categories: [],
      Condition: [],
      Availability: null,
    };
  },
  computed: {
    filteredBooks() {
      let filteredBooks = this.Books;
      // check if any filter array has change
      if (
        this.Categories.length !== 0 ||
        this.Condition.length !== 0 ||
        this.Availability !== null
      ) {
        // filter category
        if (this.Categories.length !== 0) {
          filteredBooks = filteredBooks.filter((book) =>
            this.Categories.includes(book.categories)
          );
        }
        // filter condition
        if (this.Condition.length !== 0) {
          filteredBooks = filteredBooks.filter((book) =>
            this.Condition.includes(book.condition)
          );
        }
        // filter availability
        if (this.Availability == "true") {
          filteredBooks = filteredBooks.filter(
            (book) => book.availability == true
          );
        } else if (this.Availability == "false") {
          filteredBooks = filteredBooks.filter(
            (book) => book.availability == false
          );
        }
        return filteredBooks;
      } else {
        return this.Books;
      }
    },
  },
  methods: {
    // reset filtered array and reset availability
    clearFilter() {
      this.Categories = [];
      this.Condition = [];
      this.Availability = null;
    },
  },
  mounted() {
    this.Books = this.$store.getters.allBooks;
  },
};
</script>
  
  <style>
</style>