<template>
  <div id="app">
    <b-navbar sticky toggleable="lg" type="dark" variant="dark">
      <!-- <b-navbar-nav> -->
      <b-navbar-brand class="my-3" to="/">Pogo</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/career">Career</b-nav-item>
          <b-nav-item to="/projects">Projects</b-nav-item>
          <!-- <b-nav-item to="/personal">Personal</b-nav-item> -->
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item
            href="https://linkedin.com/in/jarpogo"
            target="_blank"
            v-b-tooltip
            title="LinkedIn"
          >
            <b-img height="50" :src="require('./assets/icons/linkedin.png')"></b-img>
          </b-nav-item>
          <b-nav-item href="https://github.com/jarpogo" target="_blank" v-b-tooltip title="GitHub">
            <b-img height="50" :src="require('./assets/icons/github.png')"></b-img>
          </b-nav-item>
          <b-nav-item
            href="https://twitter.com/JarPogo"
            target="_blank"
            v-b-tooltip
            title="Twitter"
          >
            <b-img height="50" :src="require('./assets/icons/twitter.png')">g</b-img>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
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