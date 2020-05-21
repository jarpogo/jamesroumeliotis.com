<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-navbar-brand to="/">Pogo</b-navbar-brand>
        <b-nav-item to="/career">Career</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item right>
          <b-img width="50" :src="require('./assets/twitter.png')" to="https://twitter.com/JarPogo"></b-img>
        </b-nav-item>

        <b-navrbar-nav>
          <b-button size="sm" class="mb-2">
            <b-icon icon="gear-fill" aria-hidden="true"></b-icon>Settings
          </b-button>
        </b-navrbar-nav>
      </b-navbar-nav>
    </b-navbar>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
