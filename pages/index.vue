<template>
  <v-row>
    <home-carousel :items="items"></home-carousel>
    <v-row v-for="(item, index) in items" :key="index">
      <home-section :item="item"></home-section>
    </v-row>
  </v-row>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters['posts/getPosts']
    },
  },
}
</script>
