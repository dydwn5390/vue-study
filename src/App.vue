<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">DataBinding</router-link> |
    <router-link to="/databinding2">DataBinding2</router-link> |
    <router-link to="/nested">Nested</router-link> |
    <router-link to="/calculator">Calculator</router-link> |
    <router-link to="/composition">Composition</router-link> |
    <router-link to="/composition2">Composition2</router-link> |
    <router-link to="/compositionProvide">CompositionProvide</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>export default {
  components: {}
}
</script>