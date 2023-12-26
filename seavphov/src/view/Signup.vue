<template>
  <div class="main-container">
    <div class="logo">
      <img src="/img/book.png" alt="booklogo" class="logo" />
    </div>
    <div class="container">
      <h1>Sign Up</h1>
      <form action="#">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <label for="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          required
        />
      </form>
      <button type="submit"><a href="/books">Sign Up</a></button>
      <p class="no-account">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Signup",
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