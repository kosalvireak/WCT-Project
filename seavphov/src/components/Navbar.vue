<template>
  <!-- Navbar-->
  <nav class="navbar navbar-expand-lg navbar-light bg-seavphov p-0">
    <div class="container-fluid justify-content-between">
      <!-- Left elements -->
      <SearchInput />
      <!-- Left elements -->

      <!-- Center elements -->
      <ul class="navbar-nav flex-row d-none d-md-flex">
        <li class="nav-item me-3 me-lg-1 active">
          <a class="nav-link" href="/home">
            <img
              src="/img/book.png"
              alt="book logo"
              srcset=""
              class="img-fluid"
              style="height: 45px"
            />
          </a>
        </li>
      </ul>
      <!-- Center elements -->

      <!-- Right elements -->
      <ul class="navbar-nav flex-row justify-content-center align-items-center">
        <li class="nav-item me-2 me-lg-1">
          <a class="nav-link d-sm-flex align-items-sm-center" href="/profile">
            <img
              :src="this.$store.getters.loggedInUser.profile"
              class="rounded-circle navbar_img border border-3"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
            <strong class="d-none d-sm-block ms-1 username">{{
              this.$store.getters.loggedInUser.username
            }}</strong>
          </a>
        </li>
        <li class="nav-item me-2 d-sm-flex align-items-sm-center">
          <a class="nav-link" href="/newbook">
            <span><i class="fas fa-plus-circle fa-xl"></i></span>
          </a>
        </li>
        <!-- Chat dropdown -->
        <li class="nav-item dropdown me-2 d-sm-flex align-items-sm-center">
          <a
            class="nav-link dropdown-toggle hidden-arrow"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-comments fa-xl"></i>

            <span class="badge rounded-pill badge-notification bg-danger"
              >2</span
            >
          </a>
          <div class="dropdown-menu" style="left: -350px">
            <ChatDropdown />
          </div>
        </li>
        <!-- Chat dropdown -->

        <!-- Notification dropdown -->
        <li class="nav-item dropdown me-3 d-sm-flex align-items-sm-center">
          <a
            class="nav-link dropdown-toggle hidden-arrow"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-bell fa-xl"></i>
            <span class="badge rounded-pill badge-notification bg-danger"
              >12</span
            >
          </a>
          <ul class="dropdown-menu" style="left: -350px">
            <NotificationDropdown />
          </ul>
        </li>
        <!-- Notification dropdown -->
        <li class="nav-item me-2 d-sm-flex align-items-sm-center">
          <a class="nav-link" href="/login" @click="Logout()">
            <span><i class="fa-solid fa-right-from-bracket fa-xl"></i></span>
          </a>
        </li>
      </ul>
      <!-- Right elements -->
    </div>
  </nav>
</template>

<script>
import ChatDropdown from "./ChatDropdown.vue";
import NotificationDropdown from "./NotificationDropdown.vue";
import SearchInput from "./SearchInput.vue";
export default {
  name: "Navbar",
  components: { ChatDropdown, NotificationDropdown, SearchInput },
  methods: {
    Logout() {
      this.$store.dispatch("addLoggedInUser", {
        email: "Anonymous@gmail.com",
        profile:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      });
      this.$store.dispatch("logUserOut");
    },
  },
};
</script>

<style scoped>
.navbar_img {
  height: 48px;
  width: 48px;
  object-fit: cover;
}

.cd__main {
  display: block !important;
}

.notification-ui a:after {
  display: none;
}

.notification-ui_icon {
  position: relative;
}

.notification-ui_icon .unread-notification {
  display: inline-block;
  height: 7px;
  width: 7px;
  border-radius: 7px;
  background-color: #66bb6a;
  position: absolute;
  top: 7px;
  left: 12px;
}

@media (min-width: 900px) {
  .notification-ui_icon .unread-notification {
    left: 20px;
  }
}

.notification-ui_dd {
  padding: 0;
  border-radius: 10px;
  -webkit-box-shadow: 0 5px 20px -3px rgba(0, 0, 0, 0.16);
  box-shadow: 0 5px 20px -3px rgba(0, 0, 0, 0.16);
  border: 0;
  max-width: 400px;
}

@media (min-width: 900px) {
  .notification-ui_dd {
    min-width: 400px;
    position: absolute;
    left: -192px;
    top: 70px;
  }
}

.notification-ui_dd .notification-ui_dd-header {
  border-bottom: 1px solid #ddd;
  padding: 15px;
}

.notification-ui_dd .notification-ui_dd-header h3 {
  margin-bottom: 0;
}

.notification-ui_dd .notification-ui_dd-content {
  max-height: 500px;
  overflow: auto;
}

.notification-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 20px 0;
  margin: 0 25px;
  border-bottom: 1px solid #ddd;
}

.notification-list--unread {
  position: relative;
}

.notification-list--unread:before {
  content: "";
  position: absolute;
  top: 0;
  left: -25px;
  height: calc(100% + 1px);
  border-left: 2px solid #29b6f6;
}

.notification-list .notification-list_img img {
  height: 48px;
  width: 48px;
  border-radius: 50px;
  margin-right: 20px;
}

.notification-list .notification-list_detail p {
  margin-bottom: 5px;
  line-height: 1.2;
}

.notification-list .notification-list_feature-img img {
  height: 48px;
  width: 48px;
  border-radius: 5px;
  margin-left: 20px;
}

.white-mode {
  text-decoration: none;
  padding: 17px 40px;
  background-color: yellow;
  border-radius: 3px;
  color: black;
  transition: 0.35s ease-in-out;
  position: fixed;
  left: 15px;
  bottom: 15px;
}
</style>