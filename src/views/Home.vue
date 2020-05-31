<template>
  <div class="Home">
    <b-container>
      <br />
      <b-jumbotron
        class="text-md-left text-sm-center"
        bg-variant="dark"
        text-variant="white"
        border-variant="dark"
      >
        <template v-slot:header>
          <b-img rounded="circle" :src="require('../assets/me.png')"></b-img>
          {{resume.name}}
        </template>
        <br />
        <h5 style="font-style: italic">{{resume.headline}}</h5>
      </b-jumbotron>

      <hr class="my-4 linebreak" />
    </b-container>

    <b-container class="text-left">
      <b-card bg-variant="dark" text-variant="white" border-variant="dark">
        <h1>Mission</h1>
        <div v-for="(item, index) in resume.mission" :key="index">
          <h5>{{item}}</h5>
          <br />
        </div>
      </b-card>

      <hr class="my-4 linebreak" />
      <b-card bg-variant="dark" text-variant="white" border-variant="dark">
        <h1>Values</h1>
        <ul v-for="(item, index) in resume.values" :key="index">
          <li>
            <h5>{{item}}</h5>
          </li>
        </ul>
      </b-card>
    </b-container>

    <b-container>
      <hr class="my-4 linebreak" />
      <b-card bg-variant="dark" text-variant="white" border-variant="dark">
        <h1 class="text-left">Certificates</h1>
        <b-row align-h="center">
          <div v-for="(cert, index) in resume.certificates" v-bind:key="index">
            <b-link :href="cert.link" target="_blank">
              <b-img
                height="150"
                class="icon"
                :src="require('../assets/certificates/' + cert.name + '.png')"
              ></b-img>
            </b-link>
          </div>
        </b-row>
      </b-card>
      <br />
    </b-container>
  </div>
</template>

<script>
import resume from "js-yaml-loader!../data/resume.yaml";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      resume: resume.about
    };
  }
};
</script>

<style scoped>
.linebreak {
  background-color: #ccc;
}

.icon {
  margin: 1em;
}

@media screen and (max-width: 640px) {
  .test {
    text-align: center;
  }
}
ul {
  list-style-type: circle;
}
</style>

