<template>
  <div class="Career">
    <!-- <div>
      <b-progress :value="value" :max="max" show-progress animated></b-progress>
      <b-progress class="mt-2" :max="max" show-value>
        <b-progress-bar :value="value * (6 / 10)" variant="success"></b-progress-bar>
        <b-progress-bar :value="value * (2.5 / 10)" variant="warning"></b-progress-bar>
        <b-progress-bar :value="value * (1.5 / 10)" variant="danger"></b-progress-bar>
      </b-progress>

      <b-button class="mt-3" @click="randomValue">Click me</b-button>
    </div>-->
    <b-container fluid>
      <b-card-group deck>
        <b-row align-h="center" mh-100>
          <div v-for="job in resume.work" v-bind:key="job.startDate">
            <CompanyCard v-bind:job="job"></CompanyCard>
          </div>
        </b-row>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CompanyCard from "@/components/CompanyCard.vue";
import resume from "js-yaml-loader!../data/resume.yaml";

export default {
  name: "Career",
  components: {
    CompanyCard
  },
  data() {
    return {
      value: 45,
      max: 100,
      resume
    };
  },
  methods: {
    randomValue() {
      this.value = Math.random() * this.max;
    }
  }
};
</script>

<style scoped>
.card-deck {
  margin-top: 1em;
}
</style>
