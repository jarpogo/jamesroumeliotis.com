<template>
  <div class="Projects">
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
  name: "Projects",
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
