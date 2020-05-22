<template>
  <div>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="'collapse' + job.logo" variant="secondary">
          <span
            algin-v="center"
            style="float:left"
            class="title font-weight-light"
          >{{job.title}} - {{job.company}}</span>
          <span style="float:right;margin-right:10px">{{job.startDate}} - {{job.endDate}}</span>
        </b-button>
      </b-card-header>
      <b-collapse accordion="my-accordion" v-bind:id="'collapse' +job.logo" class="mt-2 text-left">
        <b-card-body>
          <b-card-img align-self="start" :src="require('../assets/company_logos/' + job.logo)"></b-card-img>
          <h6>{{job.description}}</h6>
          <ul>
            <li v-for="(hl, index) in job.highlights" :key="index">{{hl}}</li>
          </ul>
          <br />
          <!-- <p class="card-text">{{job.highlights}}</p> -->
        </b-card-body>
      </b-collapse>
    </b-card>
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
  height: 6vw;
  text-align: left;
  object-fit: scale-down;
  padding: 10px;
}

.card-title {
  font-weight: bold;
}

.card-body {
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0;
}

ul {
  list-style-type: circle;
}
</style>
