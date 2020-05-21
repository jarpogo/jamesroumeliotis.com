<template>
  <div class="personal">
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
      <b-carousel-slide :img-src="require('../assets/code.png')" img-height="100">
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


// caption="First slide"
//         text="Nulla vitae elit libero, a pharetra augue mollis interdum."


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