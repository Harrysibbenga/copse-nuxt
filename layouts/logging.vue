<template>
  <v-app light>
    <head-nav></head-nav>
    <v-main class="white black--text">
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <foot></foot>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('images/setImages')
    this.$store.dispatch('posts/setPosts')
    this.$store.dispatch('about/setContent')
  },
}
</script>
