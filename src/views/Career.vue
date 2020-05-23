<template>
  <div class="Career">
    <b-container>
      <h1 class="mt-3">Professional Experience</h1>
      <div v-for="job in resume.work" v-bind:key="job.startDate">
        <CompanyAccordion v-bind:job="job"></CompanyAccordion>
      </div>

      <h1 class="mt-3">Technical Skills</h1>

      <div v-for="skill in resume.skills.technical" v-bind:key="skill.name">
        <Skillset v-bind:skill="skill"></Skillset>
      </div>

      <h1 class="mt-3">Leadership Skills</h1>
      <div v-for="skill in resume.skills.leadership" v-bind:key="skill.name">
        <Skillset v-bind:skill="skill"></Skillset>
      </div>

      <h1 class="mt-3">Organization Skills</h1>
      <div v-for="skill in resume.skills.organization" v-bind:key="skill.name">
        <Skillset v-bind:skill="skill"></Skillset>
      </div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CompanyAccordion from "@/components/CompanyAccordion.vue";
import Skillset from "@/components/Skillset.vue";
import resume from "js-yaml-loader!../data/resume.yaml";

export default {
  name: "Career",
  components: {
    CompanyAccordion,
    Skillset
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
