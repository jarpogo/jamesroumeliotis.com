<template>
  <div>
    <b-col class="padding-0 mb-2">
      <b-card
        img-top
        tag="project"
        style="max-width: 35em;"
        border-variant="dark"
        class
        mh-100
        :img-src="require('../assets/project-images/' + project.image)"
      >
        <!-- <b-card-img class="mb-2" :src="require('../assets/project-images/' + project.image)"></b-card-img> -->
        <b-card-title>{{project.title}}</b-card-title>
        <b-card-sub-title class="mb-2">Created {{project.year}}</b-card-sub-title>
        <b-card-text class="text-left">{{project.description}}</b-card-text>
        <b-row class="mb-2" align-h="center">
          <div v-for="(tech, index) in project.technology" :key="index">
            <b-col class="mb-2" div v-b-tooltip.hover :title="tech">
              <b-img class="icon" :src="require('../assets/icons/' + tech + '.png')"></b-img>
            </b-col>
          </div>
        </b-row>
        <b-button class="mt-2" :href="project.githubLink" target="_blank">Check it out on GitHub</b-button>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["project"]
};
</script>


<style scoped>
.padding-0 {
  padding-right: 0em;
  padding-left: 0em;
}
.card {
  margin-left: 0.5em;
  margin-right: 0.5em;
  flex: 1;
}
.card-img {
  height: 8vw;
  object-fit: scale-down;
  padding: 5px;
}

.card-title {
  font-weight: bold;
}

.card-body {
  padding-left: 1em;
  padding-right: 1em;
}
.icon {
  height: 3em;
  background-color: white;
}
ul {
  list-style-type: circle;
}
</style>
