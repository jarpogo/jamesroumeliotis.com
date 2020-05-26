<template>
  <div class="Career">
    <b-container>
      <div v-for="job in resume.work" v-bind:key="job.startDate">
        <CompanyAccordion v-bind:job="job"></CompanyAccordion>
      </div>
    </b-container>

    <b-container>
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="47b91311-5b00-45e0-949d-131475da6617"
        data-share-badge-host="https://www.youracclaim.com"
      ></div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CompanyAccordion from "@/components/CompanyAccordion.vue";
// import Skillset from "@/components/Skillset.vue";
import resume from "js-yaml-loader!../data/resume.yaml";

export default {
  name: "Career",
  components: {
    CompanyAccordion
    // Skillset
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
