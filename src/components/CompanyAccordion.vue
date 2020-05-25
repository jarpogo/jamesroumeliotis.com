<template>
  <div>
    <div role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle="'collapse' + job.logo" variant="secondary">
            <div style="float:left" class="title font-weight-light">{{job.title}} - {{job.company}}</div>

            <div class="when-open" style="float:right;margin-right:10px">
              <b-icon icon="chevron-up"></b-icon>
            </div>
            <div class="when-closed" style="float:right;margin-right:10px">
              <b-icon icon="chevron-down"></b-icon>
            </div>

            <div style="float:right;margin-right:10px">
              <b-icon icon="blank"></b-icon>
            </div>

            <div style="float:right;margin-right:10px">{{job.startDate}} - {{job.endDate}}</div>
          </b-button>
        </b-card-header>
        <b-collapse
          accordion="my-accordion"
          visible
          v-bind:id="'collapse' +job.logo"
          class="mt-2 text-left"
          role="tabpanel"
        >
          <b-card-body>
            <b-img
              center
              class="logo"
              align-self="start"
              :src="require('../assets/company-logos/' + job.logo)"
            ></b-img>

            <b-row align-h="left">
              <h5>Summary</h5>
            </b-row>
            <h6>{{job.description}}</h6>
            <br />
            <b-row align-h="left">
              <h5>Highlights</h5>
            </b-row>
            <ul>
              <li v-for="(highlight, index) in job.highlights" :key="index">{{highlight}}</li>
            </ul>
            <br />

            <b-row aligh-h="left">
              <h5>Technologies</h5>
            </b-row>
            <b-row class="mb-2" align-h="center">
              <div v-for="(tech, index) in job.technology" :key="index">
                <b-col class="mb-2" div v-b-tooltip.hover :title="tech">
                  <b-img class="icon" :src="require('../assets/icons/' + tech + '.png')"></b-img>
                </b-col>
              </div>
            </b-row>
            <br />
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ["job"]
};
</script>

<style scoped>
.padding-0 {
  padding-right: 0em;
  padding-left: 0em;
}
.icon {
  height: 3em;
  background-color: white;
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
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 0;
}

.logo {
  width: 16em;
  margin-top: 1em;
  margin-bottom: 1em;
}

ul {
  list-style-type: circle;
}

.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>
