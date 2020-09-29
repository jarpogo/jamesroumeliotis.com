<template>
  <div>
    <b-col class="padding-0 mb-2">
      <b-card
        img-top
        tag="gamma-iota"
        style="max-width: 24em"
        border-variant="dark"
        class
        mh-100
        :img-src="
          require('../assets/brothers/gammaiota/' + brother.formal_image)
        "
      >
        <b-card-title>{{ brother.name }}</b-card-title>
        <b-card-sub-title class="mb-2"
          >Year: {{ brother.year }} | Major:
          {{ brother.major }}</b-card-sub-title
        >

        <div class="text-left">
          <div v-for="(description, index) in brother.description" :key="index">
            <br />
            <div v-for="(value, name) in description" :key="value">
              {{ name }}: {{ value }}
            </div>
          </div>
        </div>
        <br />
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["brother"],
};
</script>


<style scoped>
.padding-0 {
  padding-right: 0em;
  padding-left: 0em;
}
.card {
  margin-left: 0.5em;
  margin-right: 0.5em;
  flex: 1;
}
.card-img {
  height: 8vw;
  object-fit: scale-down;
  padding: 5px;
}

.card-title {
  font-weight: bold;
}

.card-body {
  padding-left: 1em;
  padding-right: 1em;
}
.icon {
  height: 3em;
  background-color: white;
}
ul {
  list-style-type: circle;
}
</style>
