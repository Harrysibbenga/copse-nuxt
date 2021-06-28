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
      class="px-6 pb-10 d-sm-flex align-center black"
    >
      <v-col
        v-for="(service, index) in item.section.services"
        :key="index"
        v-scroll-reveal.reset
        cols="12"
        :sm="small(index)"
        md="4"
      >
        <v-card color="transparent" class="px-1 text-center">
          <img :src="service.image.url" :alt="service.image.alt" class="img" />

          <v-card-title
            ><h2 class="mx-auto pb-5 text-h6">
              {{ service.name }}
            </h2></v-card-title
          >

          <v-sheet
            :height="bgHeight"
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
          return '425'
        case 'lg':
          return '300'
        case 'xl':
          return '220'
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
