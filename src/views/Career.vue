<template>
  <div class="home">
    <div>
      <b-progress :value="value" :max="max" show-progress animated></b-progress>
      <b-progress class="mt-2" :max="max" show-value>
        <b-progress-bar :value="value * (6 / 10)" variant="success"></b-progress-bar>
        <b-progress-bar :value="value * (2.5 / 10)" variant="warning"></b-progress-bar>
        <b-progress-bar :value="value * (1.5 / 10)" variant="danger"></b-progress-bar>
      </b-progress>

      <b-button class="mt-3" @click="randomValue">Click me</b-button>
    </div>
    <b-container fluid="xl">
      <b-card-group>
        <b-row>
          <b-col v-for="item in myJson" v-bind:key="item.text">
            <CompanyCard v-bind:job="item"></CompanyCard>
          </b-col>
        </b-row>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CompanyCard from "@/components/CompanyCard.vue";
import json from "../data/resume.json";

export default {
  name: "Career",
  components: {
    CompanyCard
  },
  data() {
    return {
      value: 45,
      max: 100,
      myJson: json
    };
  },
  methods: {
    randomValue() {
      this.value = Math.random() * this.max;
    }
  }
};
</script>
