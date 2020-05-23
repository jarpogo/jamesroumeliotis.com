<template>
  <div>
    <b-col class="padding-0 mb-2">
      <b-card img-top tag="project" style="max-width: 35em;" border-variant="dark" class mh-100>
        <b-card-img class="mb-2" :src="require('../assets/project_images/' + project.image)"></b-card-img>
        <b-card-title>{{project.title}}</b-card-title>
        <b-card-text class="text-left">{{project.description}}</b-card-text>
        <b-button :href="project.githubLink" target="_blank">Repository</b-button>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["project"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

ul {
  list-style-type: circle;
}
</style>
