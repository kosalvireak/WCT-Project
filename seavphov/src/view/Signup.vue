<template>
  <div class="main-container">
    <div class="d-flex align-items-center justify-content-center logo">
      <img src="/img/book.png" alt="booklogo" class="logoimg" />
    </div>
    <div class="container">
      <h1>Sign Up</h1>
      <form v-on:submit.prevent="Signup()">
        <div class="form-floating mb-3">
        <input 
          type="email" 
          id="email" required v-model="email" 
          class="form-control btn rounded-pill text-start " 
          style="background-color: #D9D9D9;"/>
          <label for="email" style="text-align: center; display: block; margin: 0 auto;">Email address</label>
        </div>
        <div class="form-floating password mb-3"> 
          <input  
            type="password" 
            id="password" required v-model="password" 
            class="form-control btn rouded-pill text-start"
            style="background-color: #D9D9D9;"/>
            <label for="password" style="text-align: center; display: block; margin: 0 auto;">Password:</label>
        </div>
        <div class="form-floating confirmpassword mb-3"> 
          <input  
            type="password" 
            id="confirmpassword" name="confirmpassword" required v-model="confirmpassword" 
            class="form-control btn rouded-pill text-start"
            style="background-color: #D9D9D9;"/>
            <label for="confirmpassword" style="text-align: center; display: block; margin: 0 auto;">Confirm Password:</label>
        </div>
  
        <div class="row my-3">
          <div class="col d-flex justify-content-center">
            <!-- Checkbox -->
            <div class="form-check">
              <input 
                class="form-check-input" 
                type="checkbox" 
                value="" id="form1Example3" 
                checked 
                v-model="isShowPassword"
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

      <div class="no-account">
        Already have an account? <a href="/login">Login</a>
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
.main-container {
  width: 900px;
  margin: 100px auto;
  padding: 50px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
}

.logo {
  width: 700px;
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
  margin-bottom: 5px;
}
/* 
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  color: #d9d9d9;
  border-radius: 30px;
  margin-bottom: 15px;
} */

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
</style>