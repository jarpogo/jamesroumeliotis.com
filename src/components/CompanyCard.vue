<template>
  <div>
    <b-col class="padding-0 mb-2">
      <b-card
        img-alt="Verizon Logo"
        img-top
        tag="job"
        style="max-width: 35em;"
        border-variant="dark"
        class
        mh-100
      >
        <b-card-img class="mb-2" :src="require('../assets/company_logos/' + job.logo)"></b-card-img>
        <b-card-title>{{job.title}}</b-card-title>
        <b-card-sub-title class="mb-3">{{job.startDate}} - {{job.endDate}}</b-card-sub-title>
        <b-card-text class="text-left">{{job.description}}</b-card-text>

        <b-button v-b-toggle="'collapse' + job.logo" variant="secondary">Highlights</b-button>
        <b-collapse v-bind:id="'collapse' +job.logo" class="mt-2 text-left">
          <ul>
            <li v-for="(hl, index) in job.highlights" :key="index">{{hl}}</li>
          </ul>
          <br />
          <!-- <p class="card-text">{{job.highlights}}</p> -->
        </b-collapse>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["job"],
  methods: {
    closeAll() {
      this.collapses.forEach(collapse => {
        collapse.show = false;
      });
    }
  }
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
