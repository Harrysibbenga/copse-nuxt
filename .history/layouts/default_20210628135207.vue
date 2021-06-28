<template>
  <v-app dark>
    <head-nav></head-nav>
    <v-main class="black">
      <v-container fluid class="pa-0">
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
