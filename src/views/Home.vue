<template>
  <div class="home">
    <b-container fluid="xl">
      <Header></Header>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header
  }
};
</script>
