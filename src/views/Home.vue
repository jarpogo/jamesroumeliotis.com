<template>
  <div class="home">
    <b-container fluid="xl">
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
    </b-container>
  </div>
</template>

