<template>
  <div>
    <v-row>
      <v-col id="home" cols="12" class="pa-0">
        <home-carousel :items="items"></home-carousel>
      </v-col>
    </v-row>

    <v-row>
      <v-col id="about" cols="12" class="error pa-6 mb-16">
        <div v-html="about.content"></div>
      </v-col>
    </v-row>

    <v-row v-for="(item, index) in services" :key="index">
      <home-section :item="item"></home-section>
    </v-row>

    <h2 id="social" class="text-h1 font-weight-bold my-16">Instagram</h2>
    <v-row class="pb-16 mb-16">
      <home-social></home-social>
    </v-row>

    <h2
      id="recruitment"
      class="text-h3 text-md-h2 text-lg-h1 font-weight-bold my-16"
    >
      Recruitment
    </h2>
    <v-row class="pb-16 mb-16">
      <home-recruitment></home-recruitment>
    </v-row>

    <h2 class="text-h1 font-weight-bold my-16">Find us</h2>
    <v-row style="height: 600px" class="pb-16 mb-16">
      <home-map></home-map>
    </v-row>

    <v-container id="contact" class="pb-16 mb-16">
      <v-row class="px-md-16" align="center">
        <v-col cols="12" md="8">
          <home-contact-form></home-contact-form>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <home-contact-info></home-contact-info>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters['posts/getPosts']
    },
    services() {
      return this.items.filter((item) => item.display_services === true)
    },
    about() {
      return this.$store.getters['about/getAbout']
    },
  },
}
</script>
