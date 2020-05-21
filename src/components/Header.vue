<template>
  <div>
    <hr />
    <b-jumbotron class="text-left" bg-variant="dark" text-variant="white" border-variant="dark">
      <template v-slot:header>
        <b-img fluid alt="Responsive image" rounded="circle" :src="require('../assets/me.png')"></b-img>
        <span class="tab"></span>
        Pogo
      </template>

      <hr class="my-4" />

      <p>Mission Statement</p>
    </b-jumbotron>

    <hr />
    <b-carousel
      id="carousel"
      fade
      v-model="slide"
      :interval="5000"
      controls
      indicators
      background="#ababab"
      max-height="100"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        :img-src="require('../assets/code.png')"
        img-height="100"
      >
        <h1>Career</h1>
      </b-carousel-slide>

      <b-carousel-slide :img-src="require('../assets/pogo.png')" img-height="100">
        <h1>Pogo World Records</h1>
      </b-carousel-slide>

      <b-carousel-slide :img-src="require('../assets/pichu.png')" img-height="100">
        <h1>Smash Competitor</h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>



<style scoped>
</style>