<template>
  <div id="app">
    <header class="header">
      <h1>ROQEEBAT</h1>
      <br />
      <h2>ALT/SOE/024/1345</h2>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/error">Error Boundary</router-link>
        <router-link to="/not-found">404 Page</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  background-color: #2196f3;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav a {
  color: white;
  margin-left: 10px;
  text-decoration: none;
}
nav a:hover {
  background-color: #076aba;
}
</style>

<script>
export default {
  name: "App",
};
</script>
