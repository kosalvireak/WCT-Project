<template>
  <div class="main-container">
    <div class="logo">
      <img src="/img/book.png" alt="booklogo" class="logo" />
    </div>
    <div class="container">
      <h1>Sign Up</h1>
      <form v-on:submit.prevent="Signup()">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required v-model="email" />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required v-model="password" />
        <label for="confirmpassword">Confirm Password:</label>
        <input type="password" id="confirmpassword" name="confirmpassword" required v-model="confirmpassword" />
        <div class="row my-3">
          <div class="col d-flex justify-content-center">
            <!-- Checkbox -->
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked v-model="isShowPassword"
                @click="showPassword" />
              <label class="form-check-label" for="form1Example3">
                Show password
              </label>
            </div>
          </div>
        </div>
        <p v-if="Error" class="text-danger">{{ errorMessage }}</p>
        <button type="submit" class="btn btn-primary btn-block">Sign up</button>
      </form>

      <p class="no-account">
        Already have an account? <a href="/login">Login</a>
      </p>
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
    };
  },
  methods: {
    Signup() {
      console.log("here", this.email, this.password, this.confirmpassword)
      // if both input are empty
      if (this.email.length == 0 || this.password.length == 0 || this.confirmpassword.length == 0) {

        this.Error = true;
        this.errorMessage = "Email or password cannot be empty!";
      }
      // if both input are not empty
      else {
        console.log("here", this.email, this.password, this.confirmpassword)
        const users = this.$store.getters.allUsers;
        // if found in users array, the index i will return
        const i = users.findIndex((u) => u.email === this.email);
        if (i > -1) {
          // if email is available
          this.Error = true;
          this.errorMessage = "User already exists"

        }
        // else user not found in users array
        else {
          // if password is more than 8 characters
          if (this.password.length >= 8) {

            // if password is the same as confirm password
            if (this.password == this.confirmpassword) {
              this.$store.dispatch("addLoggedInUser", {
                email: `${this.email}`,
                profile: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
              });
              this.$store.dispatch("logUserIn");
              this.$router.push("/home");
            }
            else {
              this.Error = true;
              this.errorMessage = "Password & confirm password does not match!"
            }
          }
          else {
            this.Error = true;
            this.errorMessage = "Password must be 8 characters or more"
          }
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
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background-size: cover;
}

.main-container {
  width: 900px;
  margin: 100px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 30px;
  text-align: right;
}

.logo {
  width: 250px;
  margin-bottom: 10px;
  text-align: left;
}

h1 {
  font-size: 50px;
  margin-bottom: 20px;
  color: #5c836e;
}

form {
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 30%;
  padding: 10px;
  color: #d9d9d9;
  border-radius: 30px;
  margin-bottom: 15px;
}

button {
  background-color: #5c836e;
  color: #fff;
  padding: 15px 100px;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #444;
}

.no-account {
  margin-top: 15px;
  font-size: 12px;
  color: #666;
}

a {
  color: #a3b18a;
  text-decoration: none;
}
</style>