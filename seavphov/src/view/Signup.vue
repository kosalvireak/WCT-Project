<template>
  <div class="main-container">
    <div class="row">
      <div
        class="d-flex align-items-center justify-content-center logo col-md-6 col-sm-12"
      >
        <img src="/img/book.png" alt="booklogo" class="logoimg img-fluid" />
      </div>
      <div class="container col-md-6 col-sm-12">
        <h1>Sign Up</h1>
        <form v-on:submit.prevent="Signup()">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control btn rounded-pill text-start"
              id="email"
              placeholder="name@example.com"
              v-model="email"
              style="background-color: #d9d9d9"
              @focus="toggleLabel('email', true)"
              @blur="toggleLabel('email', false)"
            />
            <label for="email" :class="{ 'special-style': toggleEmail }"
              >Email address</label
            >
          </div>
          <div class="form-floating password mb-3">
            <input
              type="password"
              class="form-control btn rounded-pill text-start"
              id="password"
              placeholder="password"
              v-model="password"
              style="background-color: #d9d9d9"
              @focus="toggleLabel('password', true)"
              @blur="toggleLabel('password', false)"
            />
            <label for="password" :class="{ 'special-style': togglePassword }"
              >Password</label
            >
          </div>
          <div class="form-floating mb-3">
            <input
              type="confirmpassword"
              class="form-control btn rounded-pill text-start"
              id="confirmpassword"
              placeholder="password"
              v-model="confirmpassword"
              style="background-color: #d9d9d9"
              @focus="toggleLabel('confirmpassword', true)"
              @blur="toggleLabel('confirmpassword', false)"
            />
            <label
              for="confirmpassword"
              :class="{ 'special-style': toggleConfirmPassword }"
              >Confirm Password</label
            >
          </div>
          <div class="d-flex align-items-start justify-content-between my-3">
            <div class="d-flex justify-content-center ps-4 align-items-start">
              <!-- Checkbox -->
              <div
                class="form-check h-100 d-flex align-items-start justify-content-center"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form1Example3"
                  checked
                  v-model="isShowPassword"
                  @click="showPassword"
                />
                <label class="form-check-label" for="form1Example3">
                  Show password
                </label>
              </div>
            </div>
          </div>
          <p v-if="Error" class="text-danger">{{ errorMessage }}</p>
          <button type="submit" class="btn btn-primary btn-block">
            Sign up
          </button>
        </form>

        <div class="text-center mt-3">
          Already have an account?
          <a
            @click="
              () => {
                this.$router.push('/login');
              }
            "
            class="text-seavphov"
            >Login.</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      confirmpassword: "",
      Error: false,
      errorMessage: "",
      isShowPassword: false,
      toggleEmail: false,
      togglePassword: false,
      toggleConfirmPassword: false,
    };
  },
  methods: {
    Signup() {
      console.log("here", this.email, this.password, this.confirmpassword);
      // if both input are empty
      if (
        this.email.length == 0 ||
        this.password.length == 0 ||
        this.confirmpassword.length == 0
      ) {
        this.Error = true;
        this.errorMessage = "Email or password cannot be empty!";
      }
      // if both input are not empty
      else {
        console.log("here", this.email, this.password, this.confirmpassword);
        const users = this.$store.getters.allUsers;
        // if found in users array, the index i will return
        const i = users.findIndex((u) => u.email === this.email);
        if (i > -1) {
          // if email is available
          this.Error = true;
          this.errorMessage = "User already exists";
        }
        // else user not found in users array
        else {
          // if password is more than 8 characters
          if (this.password.length >= 8) {
            // if password is the same as confirm password
            if (this.password == this.confirmpassword) {
              this.$store.dispatch("addLoggedInUser", {
                email: `${this.email}`,
                profile:
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
              });
              this.$store.dispatch("logUserIn");
              this.$router.push("/home");
            } else {
              this.Error = true;
              this.errorMessage = "Password & confirm password does not match!";
            }
          } else {
            this.Error = true;
            this.errorMessage = "Password must be 8 characters or more";
          }
        }
      }
    },
    toggleLabel(input, bool) {
      if (input == "email") {
        this.toggleEmail = bool;
        if (this.email.length !== 0) {
          this.toggleEmail = true;
        }
      } else if (input == "password") {
        this.togglePassword = bool;
        if (this.password.length !== 0) {
          this.togglePassword = true;
        }
      } else if (input == "confirmpassword") {
        this.toggleConfirmPassword = bool;
        if (this.password.length !== 0) {
          this.toggleConfirmPassword = true;
        }
      }
    },
    showPassword() {
      if (this.isShowPassword) {
        password.type = "password";
        confirmpassword.type = "password";
      } else {
        password.type = "text";
        confirmpassword.type = "text";
      }
    },
    forgotPassword() {
      alert("Comming soon");
    },
  },
};
</script>
  
<style scoped>
.main-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.row {
  background-color: #fff;
  border-radius: 30px;
  width: 900px;
  padding: 50px;
}

.logo {
  text-align: center;
}

.logoimg {
  max-width: 300px;
}

h1 {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #5c836e;
  text-align: center;
}

form {
  width: 100%;
  text-align: center;
}

label {
  margin-bottom: 5px;
  text-align: center;
  display: block;
  margin: 0 auto;
}
label::after {
  background-color: #d9d9d9 !important;
  width: 100% !important;
}

.special-style {
  width: 430px !important;
}
button {
  text-align: center;
  background-color: #5c836e;
  color: #fff;
  padding: 7px 70px;
  width: 300px;
  margin: auto;
  border-radius: 15px;
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
}

button:hover {
  background-color: #444;
}

.btn {
  text-transform: unset !important;
}

.no-account {
  margin-top: 15px;
  font-size: 12px;
  color: #666;
  text-align: center;
}

a {
  color: #a3b18a;
  text-decoration: none;
}

@media (max-width: 768px) {
  .logoimg {
    max-width: 150px;
  }
  .button {
    width: 200px;
  }
  .row {
    width: 100%;
    padding: 20px;
  }
  .special-style {
    width: 370px !important;
  }
}
</style>