<template>
  <div class="Projects">
    <b-container>
      <b-card-group deck>
        <b-row align-h="center" mh-100>
          <div v-for="(project, index) in resume.projects" v-bind:key="index">
            <ProjectCard v-bind:project="project"></ProjectCard>
          </div>
        </b-row>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import resume from "js-yaml-loader!../data/resume.yaml";

export default {
  name: "Projects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      value: 45,
      max: 100,
      resume,
    };
  },
};
</script>

<style scoped>
.card-deck {
  margin-top: 1em;
}
</style>
