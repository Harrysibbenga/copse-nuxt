<template>
  <v-carousel
    hide-delimiters
    :height="dim.carouselHeight"
    show-arrows-on-hover
    @change="changed($event)"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i" class="error">
      <transition name="bounce">
        <v-row v-if="currentSlide == i" no-gutters>
          <v-col cols="12" class="position-relative">
                <v-img
                  :src="item.carousel.image.url"
                  :alt="item.carousel.image.alt"
                  :min-width="dim.image.minWidth"
                  :min-height="dim.image.minHeight"
                  class=""
                ></v-img>
          </v-col>
          <v-responsive
            class="position-md-absolute"
            :class="{ black: mobile }"
            :min-width="dim.content.minWidth"
            :min-height="dim.content.minHeight"
          >
            <v-card tile class="transparent py-10 px-6">
              <v-card-title>
                <h1
                  class="text-h4 text-md-h2 text-lg-h1 mx-auto black--text font-weight-medium text-justify"
                  :class="{ 'white--text': mobile }"
                >
                  {{ item.carousel.content.title }}
                </h1>
              </v-card-title>
              <v-card-text
                class="black--text text-md-center text-center"
                :class="{ 'white--text': mobile }"
              >
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
    mobile() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return true
        case 'sm':
          return true
        default:
          return false
      }
    },
    dim() {
      const dim = {
        image: {
          minHeight: 0,
          minWidth: 0,
        },
        content: {
          minHeight: 0,
          minWidth: 0,
        },
        carouselHeight: 0,
      }

      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          dim.image.minHeight = '65vh'
          dim.image.minWidth = '100%'
          dim.carouselHeight = '100vh'
          dim.content.minWidth = '100%'
          dim.content.minHeight = '35vh'
          return dim
        case 'sm':
          dim.image.minHeight = '65vh'
          dim.image.minWidth = '100%'
          dim.carouselHeight = '100vh'
          dim.content.minWidth = '100%'
          dim.content.minHeight = '35vh'
          return dim
        case 'md':
          dim.image.minHeight = '100%'
          dim.image.minWidth = '100%'
          dim.carouselHeight = '80vh'
          return dim
        case 'lg':
          dim.image.minHeight = '100%'
          dim.image.minWidth = '100%'
          dim.carouselHeight = '80vh'
          return dim
        case 'xl':
          dim.image.minHeight = '100%'
          dim.image.minWidth = '100%'
          dim.carouselHeight = '80vh'
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

.img-position {
  object-position: 50% 20%;
  object-fit: cover;
}
</style>
