<template>
  <div class="login-container">
    <h1 class="title">Login</h1>
    <form @submit.prevent="">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input is-info" type="text"  placeholder="Enter your username" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input is-info" type="password"  placeholder="Enter your password" required>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-info">Login</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>

.input{
  width: 300px; /* ajuste conforme necessário */
  margin: 10px;
}
.login-container {
  max-width: 400px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

</style>
