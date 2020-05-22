<template>
  <div class="home">
    <b-container fluid>
      <br />
      <b-jumbotron class="text-left" bg-variant="dark" text-variant="white" border-variant="dark">
        <template v-slot:header>
          <b-img fluid alt="Responsive image" rounded="circle" :src="require('../assets/me.png')"></b-img>
          <span class="tab"></span>
          Pogo
        </template>

        <hr class="my-4 linebreak" />

        <h1>Mission</h1>
        <div v-for="(hl, index) in resume.about.mission" :key="index">
          <h5>{{hl}}</h5>
          <br />
        </div>
      </b-jumbotron>

      <br />
    </b-container>
  </div>
</template>

<script>
import resume from "js-yaml-loader!../data/resume.yaml";

export default {
  data() {
    return {
      resume
    };
  }
};
</script>

<style scoped>
.linebreak {
  background-color: #ccc;
}
</style>

