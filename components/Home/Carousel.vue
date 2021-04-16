<template>
  <v-carousel hide-delimiters :height="carouselHeight">
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-row no-gutters class="red">
        <v-col cols="12" lg="8" class="position-relative my-auto">
          <v-img
            :src="item.carousel.image.url"
            :alt="item.carousel.image.alt"
            class="img-fluid"
          ></v-img>
          <v-responsive class="position-md-absolute">
            <v-card tile class="transparent py-10">
              <v-card-title class="px-0">
                <h1 class="text-h6 text-md-h2 mx-auto">
                  {{ item.carousel.content.title }}
                </h1>
              </v-card-title>
              <v-card-text class="text-center white--text"
                >{{ item.carousel.content.desc }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  :href="'#' + item.carousel.content.href"
                  color="red"
                  class="mx-auto"
                  elevation="3"
                  large
                  rounded
                  >More info</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-responsive>
        </v-col>
        <v-col lg="4" class="pa-10 ma-auto d-none d-md-block">
          <div v-html="item.carousel.content.content"></div>
        </v-col>
      </v-row>
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
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    carouselHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 700
        case 'sm':
          return 900
        case 'md':
          return 1500
        case 'lg':
          return 1000
        case 'xl':
          return 1000
      }
    },
  },
}
</script>

<style>
.custom-height {
  height: 500px;
}
.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
  top: 0;
  left: 0;
}

@media (max-width: 599px) {
  .position-xs-absolute {
    position: absolute;
    top: 0;
    left: 0;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .position-sm-absolute {
    position: absolute;
    top: 0;
    left: 0;
  }
}

@media (min-width: 960px) {
  .position-md-absolute {
    position: absolute;
    top: 0;
    left: 0;
  }
}

@media (min-width: 1264px) and (max-width: 1903px) {
  .position-lg-absolute {
    position: absolute;
    top: 0;
    left: 0;
  }
}

@media (min-width: 1904px) {
  .position-xl-absolute {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
