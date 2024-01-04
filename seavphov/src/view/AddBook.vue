<template>
  <h1>New Book</h1>
  <div class="row mb-3">
    <div class="d-flex align-items-center justify-content-center col">
      <form style="width: 400px" v-on:submit.prevent="AddBook()">
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
          <select class="form-select" id="categories" v-model="book.categories">
            <option value="FICTION" selected>Fiction</option>
            <option value="NOVEL">Novel</option>
            <option value="TEXT_BOOK">Text-Book</option>
            <option value="HISTORY">History</option>
            <option value="SCIENCE">Science</option>
            <option value="FANTASY">Fantasy</option>
          </select>
        </div>

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
          style="width: 100%; height: 200px"
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

        <button type="submit" class="btn btn-primary mt-1">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBook",
  data() {
    return {
      book: {
        title: "abc",
        author: "as",
        images: [],
        descriptions: "rg",
        condition: "GOOD",
        categories: "NOVEL",
      },
    };
  },
  methods: {
    AddBook() {
      console.log("book", this.book);
      this.$store.dispatch("addNewBook", this.book);
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