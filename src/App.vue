<template>
    <div id="app">
      <!-- Navigation Links -->
      <nav>
      </nav>
  
      <!-- Router View -->
      <router-view></router-view> <!-- Här renderas de aktuella sidorna -->
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'App'
  };
  </script>
  
  <style scoped>
  /* Grundläggande styling för navigation och layout */
  nav {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  a {
    color: #42b983;
    text-decoration: none;
    margin-right: 10px;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 50px;
  }
  </style>