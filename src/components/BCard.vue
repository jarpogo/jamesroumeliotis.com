<template>
  <div>
    <b-container fluid="xl">
      <b-alert show class="text-left" variant="dark">Work History</b-alert>
      <b-row>
        <b-card-group deck>
          <b-card
            title="Cimpress Technology"
            sub-title="Manager, Cloud Engineering"
            :img-src="require('../assets/cimpress.png')"
            img-alt="Verizon Logo"
            img-top
            tag="article"
            style="max-width: 30rem;"
            class="mb-3"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
          <b-card
            title="Veracode"
            sub-title="Manager, Site Reliability Engineering"
            :img-src="require('../assets/veracode.png')"
            img-alt="Verizon Logo"
            img-top
            tag="article"
            style="max-width: 30rem;"
            class="mb-3"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
          <b-card
            title="Eliza Corporation"
            sub-title="Manager, DevOps"
            :img-src="require('../assets/eliza.png')"
            img-alt="Verizon Logo"
            img-top
            tag="article"
            style="max-width: 30rem;"
            class="mb-3"
          >
            <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
