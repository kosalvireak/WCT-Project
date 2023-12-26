<template>
  <div class="main-container bg-seavphov">
    <div class="logo">
      <img src="/img/book.png" alt="booklogo" class="logo" />
    </div>
    <div class="container">
      <h1>Log In</h1>
      <form action="#">
        <form>
          <!-- Email input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">Email address</label>
          </div>

          <!-- Password input -->
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">Password</label>
          </div>

          <!-- 2 column grid layout for inline styling -->
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <!-- Checkbox -->
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example34"
                  checked
                />
                <label class="form-check-label" for="form2Example34">
                  Remember me
                </label>
              </div>
            </div>

            <div class="col">
              <!-- Simple link -->
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <!-- Submit button -->
          <button
            data-mdb-ripple-init
            type="button"
            class="btn btn-primary btn-block mb-4"
          >
            <a href="/home">Log In</a>
          </button>

          <!-- Register buttons -->
          <div class="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
            <p>or sign up with:</p>
            <button
              data-mdb-ripple-init
              type="button"
              class="btn btn-secondary btn-floating mx-1"
            >
              <i class="fab fa-facebook-f"></i>
            </button>

            <button
              data-mdb-ripple-init
              type="button"
              class="btn btn-secondary btn-floating mx-1"
            >
              <i class="fab fa-google"></i>
            </button>

            <button
              data-mdb-ripple-init
              type="button"
              class="btn btn-secondary btn-floating mx-1"
            >
              <i class="fab fa-twitter"></i>
            </button>

            <button
              data-mdb-ripple-init
              type="button"
              class="btn btn-secondary btn-floating mx-1"
            >
              <i class="fab fa-github"></i>
            </button>
          </div>
        </form>
      </form>
      <button type="submit"></button>
      <p class="no-account">
        Doesn't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Login",
};
</script>
  
  <style scoped>
.main-container {
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
  display: flex;
}

.logo,
.container {
  flex: 1;
}

.logo {
  width: 250px;
  margin-bottom: 10px;
  text-align: center;
}

h1 {
  font-size: 50px;
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

input[type="text"],
input[type="password"] {
  width: 50%;
  padding: 10px;
  color: #d9d9d9;
  border-radius: 30px;
  margin-bottom: 15px;
}

button {
  text-align: center;
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
  text-align: center;
}

a {
  color: #a3b18a;
  text-decoration: none;
}
</style>