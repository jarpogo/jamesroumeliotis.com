<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-navbar-brand to="/">Pogo</b-navbar-brand>
        <b-nav-item to="/career">Career</b-nav-item>
        <b-nav-item to="/projects">Projects</b-nav-item>
        <b-nav-item to="/personal">Personal</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://twitter.com/JarPogo" target="_blank" v-b-tooltip title="Twitter">
          <b-img width="50" :src="require('./assets/twitter.png')">g</b-img>
        </b-nav-item>
        <b-nav-item
          href="https://github.com/jarpogo?tab=repositories"
          target="_blank"
          v-b-tooltip
          title="GitHub"
        >
          <b-img width="50" :src="require('./assets/github.png')"></b-img>
        </b-nav-item>
        <b-nav-item href="https://vimeo.com/jarpogo" target="_blank" v-b-tooltip title="Vimeo">
          <b-img width="50" :src="require('./assets/vimeo.png')"></b-img>
        </b-nav-item>
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
