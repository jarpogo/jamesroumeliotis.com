<template>
  <div class="Brothers">
    <!-- <b-container> -->
    <b-card-group deck>
      <b-row align-h="center" mh-100>
        <div v-for="(brother, index) in brothers.gammaiota" v-bind:key="index">
          <BrotherCard v-bind:brother="brother"></BrotherCard>
        </div>
      </b-row>
    </b-card-group>
    <!-- </b-container> -->
  </div>
</template>

<script>
import BrotherCard from "@/components/BrotherCard.vue";
import brothers from "js-yaml-loader!../data/brothers.yaml";

export default {
  name: "Brothers",
  components: {
    BrotherCard,
  },
  data() {
    return {
      value: 45,
      max: 100,
      brothers,
    };
  },
};
</script>

<style scoped>
.card-deck {
  margin-top: 1em;
}
</style>
