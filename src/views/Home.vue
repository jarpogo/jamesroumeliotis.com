<template>
  <div class="home">
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
        <b-link
          href="https://www.youracclaim.com/badges/47b91311-5b00-45e0-949d-131475da6617/public_url"
          target="_blank"
        >
          <b-img
            height="150"
            class="icon"
            :src="require('../assets/certificates/aws-sa-associate.png')"
          ></b-img>
        </b-link>

        <b-link
          href="https://www.guinnessworldrecords.com/world-records/most-consecutive-pogo-stick-jumps-(male)?fb_comment_id=688888124542282_755729441191483"
          target="_blank"
        >
          <b-img
            height="150"
            class="icon"
            :src="require('../assets/certificates/guinness-world-records.png')"
          ></b-img>
        </b-link>
      </b-card>

      <br />
    </b-container>
  </div>
</template>

<script>
import resume from "js-yaml-loader!../data/resume.yaml";

export default {
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

