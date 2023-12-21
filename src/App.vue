<template>
  <div id="app">
    <div class="nav-links">
      <router-link class="nav-link" to="/users">User</router-link>
      <router-link class="nav-link" to="/orders">Order</router-link>
      <router-link class="nav-link" to="/products">Product</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column; /* Change to column to stack elements vertically */
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-image: url(https://wallpapercave.com/wp/wp7888082.jpg);
}

.nav-links {
  display: flex;
  gap: 10px;
}

.nav-link {
  padding: 10px;
  text-decoration: none;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
}

.nav-link:hover {
  background-color: #eee;
  color: #007BFF;
  transform: scale(1.1);
}

.content {
  margin-top: 20px; /* Add margin to the content for separation */
}
</style>
