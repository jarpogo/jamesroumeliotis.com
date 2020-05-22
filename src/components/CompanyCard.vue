<template>
  <div>
    <b-card
      img-alt="Verizon Logo"
      img-top
      tag="job"
      style="max-width: 30rem;"
      border-variant="dark"
    >
      <b-card-img class="mb-2" :src="require('../assets/company_logos/cimpress.png')"></b-card-img>
      <b-card-title>{{job.company}}</b-card-title>
      <b-card-sub-title class="mb-2">{{job.title}}</b-card-sub-title>
      <b-card-sub-title class="mb-3">{{job.startDate}} - {{job.endDate}}</b-card-sub-title>
      <b-card-text>{{job.description}}</b-card-text>
      <b-button href="#" variant="primary">More</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["job"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
