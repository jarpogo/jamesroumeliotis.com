<template>
  <!-- <div>
    <div class="col">{{skill.name}}</div>
    <div class="col-sm-11 pt-1">
      <b-progress :value="80"></b-progress>
    </div>
  </div>-->

  <div class="row mb-1">
    <div class="col-sm-1" text-align="left">{{ skill.name }}:</div>
    <div class="col-sm-11 pt-1">
      <b-progress :variant="skill.variant" :value="skill.value * 10"></b-progress>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skill"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
