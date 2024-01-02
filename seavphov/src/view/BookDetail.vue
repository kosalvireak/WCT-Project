<template>
  <div class="container-sm">
    <div class="row">
      <div
        class="book_detail_container d-flex flex-column flex-wrap col-12 col-md-8 p-0 rounded-7"
        style="height: 650px"
      >
        <div class="book_cover_container">
          <img :src="book.images" class="book_cover" alt="book cover" />
          <div>
            <p class="book_title font-Roboto mx-2 mt-5">
              {{ book.title }}
            </p>
            <br />
            <p class="book_author mx-2"><u>Author</u>: {{ book.author }}</p>
            <br />
            <p class="book_category mx-2 my-2">
              <u>Category</u>: {{ book.categories }}
            </p>
            <p class="book_condition mx-2 my-2">
              <u>Book Condition</u>: {{ book.condition }}
            </p>
            <button class="border-0" style="background-color: #588157">
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
        <h2 class="d-flex mx-5" style="color: white; font-weight: bold">
          Description
        </h2>
        <div class="d-flex mx-5 my-2" style="color: lightgray; font-size: 18px">
          <p>
            {{ book.descriptions }}
          </p>
        </div>
      </div>

      <!-- Right Container -->
      <div class="col-12 p-0 col-md-4 ps-md-3 d-flex flex-column rounded-7">
        <div
          class="bg-seavphov rounded-7 d-flex align-items-center justify-content-center flex-wrap flex-row mt-sm-3 mt-md-0"
          style="height: 150px"
        >
          <div class="d-flex justify-content-evenly flex-row w-100">
            <img
              src="/img/profile.JPG?url"
              class="profile_image"
              alt="profile_img"
            />
            <div class="d-flex flex-column justify-content-evenly">
              <h4 class="font-Roboto">Khoeun Kosalvireak</h4>
              <p>Information Technology Engineering</p>
              <p class="text-active">Last Active: 10 months ago</p>
            </div>
          </div>
        </div>

        <!-- User Contact -->
        <div
          class="bg-seavphov rounded-7 d-flex flex-wrap flex-column mt-3"
          style="height: 484px"
        >
          <div class="d-flex flex-column w-100">
            <h4 class="mx-3 mt-3 font-Roboto">Contact</h4>
            <div class="d-flex flex-row my-2 mx-3">
              <img
                src="/img/cellcard.png?url"
                class="mobile_image mx-1"
                alt="mobile_img"
                style="width: 28px; height: 28px; object-fit: cover"
              />
              <h5 class="ml-5" style="font-size: 18px; margin-top: 2.5px">
                012 123 890
              </h5>
            </div>

            <!-- Chat Button -->
            <div class="chat_button d-flex justify-content-center">
              <button type="button" class="btn w-50 rounded-6">
                <span><i class="fas fa-commenting fa-2xl me-1"></i></span>
                Chat
              </button>
            </div>
            <hr class="custom-hr d-flex mx-4 justify-content-center" />

            <!-- Location & Map -->
            <div class="location d-flex flex-wrap flex-column my-1 mx-3">
              <h6>
                <span><i class="fas fa-map-pin fa-xl me-1"></i></span>Location
              </h6>

              <!-- Map -->
              <div id="map d-flex w-75 justify-content-center mt-3">
                <div
                  class="mapouter d-flex justify-content-center align-item-center mt-3 mx-2"
                >
                  <div class="gmap_canvas d-flex">
                    <iframe
                      class="rounded-7"
                      src="https://maps.google.com/maps?q=aeon%20mall%20sensok&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                      frameborder="0"
                      scrolling="no"
                      style="width: 360px; height: 200px"
                    >
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="RelatedBooks mt-3">
      <h5>Related Books</h5>
      <RenderBook :books="relatedBooks" />
    </div>
  </div>
</template>

<script>
import RenderBook from "../components/RenderBook.vue";
export default {
  name: "BookDetail",
  components: { RenderBook },
  data() {
    return {
      paramsId: this.$route.params.id,
      book: {},
      relatedBooks: [],
    };
  },
  methods: {
    getBook() {
      this.book = this.$store.getters.book(this.paramsId)[0];
      this.relatedBooks = this.$store.getters.booksByCategory(
        this.book.categories
      );
    },
    toggleIsSaved() {
      this.$store.dispatch("changeIsSaved", this.paramsId);
      console.log("hello");
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.paramsId = to.params.id;
    this.getBook();
    next();
  },
  mounted() {
    this.getBook();
  },
};
</script>

<style scoped>
.right_side {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: auto;
}

.book_detail_container {
  background-color: #588157;
}

.user_info_container {
  background-color: #9fb97f;
  height: 77vh;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: -10px;
}

.book_cover_container {
  height: 70%;
  display: flex;
}

.book_cover {
  object-fit: cover;
  width: 300px;
  height: 420px;
  border-radius: 20px;
  flex-direction: column;
  margin: 20px;
  padding: 10px;
}

.book_title {
  color: white;
  font-size: 40px;
  font-weight: bold;
}

.book_author {
  color: lightgray;
  font-size: 17px;
}

.book_category {
  color: lightgray;
  font-size: 17px;
}

.book_condition {
  color: lightgray;
  font-size: 17px;
}

.book_description_container {
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: left;
  font-size: 16;
  margin-left: 50px;
  margin-right: 50px;
}

.description {
  color: lightgray;
  font-size: 20px;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  text-decoration: none;
  width: auto;
  top: 35%;
  margin-top: 20px;
  padding: 16px;
  color: gray;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  margin-left: 298px;
  border-radius: 3px 0 0 3px;
}

.dot_container {
  position: absolute;
  display: flex;
  justify-content: left;
  margin-left: 140px;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 5px;
  margin-top: 450px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.profile_image {
  width: 100px;
  height: 100px;
  border-radius: 9999px;
  object-fit: cover;
  border: 3px solid white;
}

.text-active {
  font-size: 12px;
}

.mobile_image {
  border-radius: 9999px;
  border: 2px solid white;
}

.btn {
  color: #fff;
  background-color: #588157;
}

.btn:hover,
.btn:focus,
.btn:active,
.btn.active,
.open > .dropdown-toggle.btn {
  color: black;
  background-color: #588157;
  border-color: black;
  opacity: 0.75;
  /*set the color you want here*/
}

.custom-hr {
  height: 2px;
  background-color: black;
  width: 85%;
}

.mapouter {
  position: relative;
  height: 200px;
  width: 360px;
  background: #fff;
  border-radius: 15px;
}

.maprouter a {
  color: #fff !important;
  position: absolute !important;
  top: 0 !important;
  z-index: 0 !important;
}
.gmap_canvas {
  overflow: hidden;
  height: 400px;
  width: 460px;
}

.gmap_canvas iframe {
  position: relative;
  z-index: 2;
}
</style>