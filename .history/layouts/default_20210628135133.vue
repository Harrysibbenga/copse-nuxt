<template>
  <v-app dark class="black">
    <head-nav></head-nav>
    <v-main>
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
