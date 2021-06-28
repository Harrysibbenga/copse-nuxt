<template>
  <v-col :id="item.carousel.content.href" cols="12" class="pa-0">
    <v-parallax :src="item.section.image.url" height="900">
      <v-row align="start" justify="start">
        <v-col class="text-left" cols="12">
          <h1
            class="text-h2 text-lg-h1 mb-4 white--text font-weight-medium py-5"
          >
            {{ item.carousel.content.title }}
          </h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row
      align="end"
      justify="space-between"
      class="px-6 pb-10 d-sm-flex align-center font-weight-black"
    >
      <v-col
        v-for="(service, index) in item.section.services"
        :key="index"
        v-scroll-reveal.reset
        cols="12"
        md="6"
        lg="4"
        class="pt-16 mx-auto"
      >
        <v-card color="transparent" class="px-1 text-center">
          <img :src="service.image.url" :alt="service.image.alt" class="img" />

          <v-card-title
            ><h2 class="mx-auto pb-5 text-h6">
              {{ service.name }}
            </h2></v-card-title
          >

          <v-sheet
            :min-height="bgHeight"
            min-width="200"
            class="pa-5 error rounded-xl"
          >
            <v-card-text class="my-auto">
              <div class="text-left" v-html="service.content"></div>
            </v-card-text>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    bgHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'md':
          return '300'
        case 'lg':
          return '320'
        case 'xl':
          return '200'
        default:
          return 'auto'
      }
    },
  },
  methods: {
    small(index) {
      return index <= 1 ? '6' : '12'
    },
  },
}
</script>

<style scoped>
.img {
  max-width: 150px;
  max-height: 150px;
}
</style>
