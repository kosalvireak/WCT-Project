<template>
  <div class="main-container bg-seavphov">
    <div class="d-flex align-items-center justify-content-center logo">
      <img src="/img/book.png" alt="booklogo" class="logoimg" />
    </div>
    <div class="container">
      <h1>Log In</h1>
      <form v-on:submit.prevent="Login()">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control btn rounded-pill text-start"
            id="email"
            placeholder="name@example.com"
            v-model="email"
          />
          <label for="email">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control btn rounded-pill text-start"
            id="password"
            placeholder="Password"
            v-model="password"
          />
          <label for="password">Password</label>
        </div>

        <!-- 2 column grid layout for inline styling -->
        <div class="row my-3">
          <div class="col d-flex justify-content-center">
            <!-- Checkbox -->
            <div class="form-check">
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

          <div class="col">
            <!-- Simple link -->
            <a @click="forgotPassword()" href="">Forgot password?</a>
          </div>
        </div>
        <p v-if="Error" class="text-danger">{{ errorMessage }}</p>
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block">Log in</button>
      </form>

      <!-- Register buttons -->
      <div class="text-center mt-3">
        Doesn't have an account? <a href="/signup">Sign up</a>
      </div>
      <p class="no-account"></p>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      Error: false,
      errorMessage: "",
      isShowPassword: false,
    };
  },
  methods: {
    Login() {
      // if both input are empty
      if (this.email.length == 0 || this.password.length == 0) {
        this.Error = true;
        this.errorMessage = "Email or password cannot be empty!";
      }
      // if both input are not empty
      else if (this.email.length > 0 || this.password.length > 0) {
        const users = this.$store.getters.allUsers;
        // if found in users array, the index i will return
        const i = users.findIndex((u) => u.email === this.email);
        if (i > -1) {
          // if password is match
          if (users[i].password == this.password) {
            console.log(this.email, users[i].profile);
            this.$store.dispatch("addLoggedInUser", {
              email: `${this.email}`,
              profile: `${users[i].profile}`,
            });
            this.$store.dispatch("logUserIn");
            this.$router.push("/home");
          }
          // if password is not match
          else {
            this.Error = true;
            this.errorMessage = "Password is incorrect!";
          }
        }
        // else user not found in users array
        else {
          this.Error = true;
          this.errorMessage = "User not found!";
        }
      } else {
        this.Error = true;
        this.errorMessage = "Incorrect email or password!";
      }
    },
    showPassword() {
      if (this.isShowPassword) {
        password.type = "password";
      } else {
        password.type = "text";
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
  width: 900px;
  margin: 100px auto;
  padding: 50px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
}

.container {
  /* flex: 1; */
  padding: 10px;
  margin: auto;
}

.logo {
  width: 400px;
  margin-bottom: 10px;
  text-align: center;
}

.logoimg {
  width: 300px;
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
  display: block;
  margin-bottom: 5px;
}

button {
  text-align: center;
  background-color: #5c836e;
  color: #fff;
  padding: 15px 100px;
  border-radius: 30px;
  font-weight: bold;
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
</style>