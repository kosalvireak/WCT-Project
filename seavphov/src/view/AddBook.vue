<template>
  <div class="mb-3">
    <a
      @click="
        () => {
          this.$router.push('/home');
        }
      "
      class="text-gray"
    >
      <i class="fa fa-arrow-circle-left" aria-hidden="true"></i> Back to home
    </a>
    <div
      v-if="isLoggedIn"
      class="d-flex align-items-center justify-content-center flex-column"
    >
      <h4 class="my-4 text-gray fw-bold">Your are adding a new book.</h4>

      <form style="width: 100%" v-on:submit.prevent="AddBook()" class="row">
        <div class="col-12 col-md-6">
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="book.title"
            />
          </div>
          <div class="mb-3">
            <label for="author" class="form-label">Author</label>
            <input
              type="text"
              class="form-control"
              id="author"
              v-model="book.author"
            />
          </div>
          <div class="mb-3">
            <label for="descriptions" class="form-label">Descriptions</label>
            <input
              type="text"
              class="form-control"
              id="descriptions"
              v-model="book.descriptions"
            />
          </div>
          <div class="input-group mb-3" style="margin-top: 2rem">
            <label
              class="input-group-text"
              for="condition"
              style="height: 40px; width: 100px"
              >Condition</label
            >
            <select class="form-select" id="condition" v-model="book.condition">
              <option value="AS_NEW" selected>as-new</option>
              <option value="GOOD">good</option>
              <option value="WELL_WORN">well-worn</option>
            </select>
          </div>

          <div class="input-group mb-3" style="margin-top: 2rem">
            <label
              class="input-group-text"
              for="categories"
              style="height: 40px; width: 100px"
              >Categories</label
            >
            <select
              class="form-select"
              id="categories"
              v-model="book.categories"
            >
              <option value="FICTION" selected>Fiction</option>
              <option value="NOVEL">Novel</option>
              <option value="TEXT_BOOK">Text-Book</option>
              <option value="HISTORY">History</option>
              <option value="SCIENCE">Science</option>
              <option value="FANTASY">Fantasy</option>
            </select>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="mb-3">
            <label for="images" class="form-label">Book Image URL</label>
            <input
              type="text"
              class="form-control"
              id="images"
              v-model="book.images[0]"
            />
          </div>
          <div
            class="my-3 mt-3 d-flex align-items-center justify-content-center border border-bdbdbd rounded-7"
            style="width: 100%; height: 242px"
          >
            <img
              v-if="book.images.length !== 0"
              :src="book.images"
              alt="preview_image"
              class="img-fluid h-100"
              style="object-fit: cover"
            />
            <div v-else>
              <p class="text-center">
                Paste a valid image url. <br />
                Your image will preview here
              </p>
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-1">Add Book</button>
          <div></div>
        </div>
      </form>
    </div>
    <div
      class="container-sm box d-flex align-items-center justify-content-center"
      v-else
    >
      <NoLoggin />
    </div>
  </div>
</template>

<script>
import NoLoggin from "../components/NoLoggin.vue";
export default {
  name: "AddBook",
  components: { NoLoggin },
  data() {
    return {
      book: {
        title: "",
        author: "",
        images: [],
        descriptions: "",
        condition: "GOOD",
        categories: "NOVEL",
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.loggedInUser.username !== "Anonymous";
    },
  },
  methods: {
    AddBook() {
      this.$store.dispatch("addNewBook", this.book);
      const allBooks = this.$store.getters.allBooks;
      const id = allBooks.length;
      console.log(id);
      this.$router.push({ path: `/home/${id}` });
    },
  },
};
</script>

<style>
.border-bdbdbd {
  border: 1px !important;
  border-style: solid !important;
  border-color: #bdbdbd !important;
}
</style>