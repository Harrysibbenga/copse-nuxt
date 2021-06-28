<template>
  <v-carousel
    hide-delimiters
    :height="dim.carouselHeight"
    show-arrows-on-hover
    cycle
    @change="changed($event)"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i" class="error">
      <transition name="bounce">
        <v-row v-if="currentSlide == i" no-gutters>
          <v-col cols="12" class="position-relative my-auto">
            <v-img
              :src="item.carousel.image.url"
              :alt="item.carousel.image.alt"
              :min-width="dim.minWidth"
              :min-height="dim.minHeight"
            ></v-img>
          </v-col>
          <v-responsive class="position-md-absolute mobile">
            <v-card tile class="transparent py-10 px-6">
              <v-card-title>
                <h1
                  class="text-h4 text-md-h1 mx-auto black--text font-weight-medium"
                >
                  {{ item.carousel.content.title }}
                </h1>
              </v-card-title>
              <v-card-text class="black--text text-md-center text-center">
                {{ item.carousel.content.desc }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  :href="'#' + item.carousel.content.href"
                  color="error"
                  class="mx-auto"
                  elevation="3"
                  large
                  rounded
                  >More info</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-responsive>
        </v-row>
      </transition>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentSlide: -1,
      currentIndex: 0,
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    carouselHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 800
        case 'sm':
          return 800
        case 'md':
          return 'auto'
        case 'lg':
          return 'auto'
        case 'xl':
          return 'auto'
      }
    },
    dim() {
      const dim = {
        minHeight: 0,
        minWidth: 0,
        carouselHeight: 0,
      }

      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          dim.minHeight = 500
          dim.minWidth = 500
          dim.carouselHeight = 800
          return dim
        case 'sm':
          dim.minHeight = 550
          dim.minWidth = 550
          dim.carouselHeight = 850
          return dim
        case 'md':
          dim.minHeight = 600
          dim.minWidth = 600
          dim.carouselHeight = 900
          return dim
        case 'lg':
          dim.minHeight = 700
          dim.minWidth = 700
          dim.carouselHeight = 1000
          return dim
        case 'xl':
          dim.minHeight = 800
          dim.minWidth = 800
          dim.carouselHeight = 1100
          return dim
      }
      return dim
    },
  },
  methods: {
    changed(event) {
      this.currentSlide = -1
      setTimeout(() => {
        this.currentSlide = event
      }, 50)
    },
  },
}
</script>

<style>
.custom-height {
  height: 500px;
}
.mobile {
  background: black;
  color: white !important;
}
</style>
