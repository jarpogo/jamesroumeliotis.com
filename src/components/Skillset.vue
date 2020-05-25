<template>
  <div class="row mb-1">
    <div class="col-sm-1" text-align="left">{{ skill.name }}:</div>
    <div class="col-sm-11 pt-1">
      <b-progress :variant="primary" :value="skill.value * 10"></b-progress>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skill"]
};
</script>