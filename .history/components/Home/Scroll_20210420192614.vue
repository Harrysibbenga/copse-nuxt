<template>
  <div>
    <v-btn icon @click.native="slidePrev"><v-icon>mdi-star</v-icon></v-btn>
    <input v-model="updateCarousel" type="number" />
    <v-btn @click.native="slideNext"><v-icon>mdi-star</v-icon></v-btn>
    <hooper
      ref="carousel"
      style="height: 1300px"
      :settings="hooperSettings"
      @slide="updateCarousel"
    >
      <slide v-for="(item, index) in items" :key="index">
        <v-row :id="item.carousel.content.href" class="white mr-6 mt-4">
          <v-col cols="12">
            <v-img :src="item.section.image.url" class="img-fluid">
              <h1
                class="text-h6 text-md-h1 mx-auto white--text font-weight-medium text-right pa-10"
              >
                {{ item.carousel.content.title }}
                {{ show }}
              </h1>
              <v-col cols="6">
                <v-container>
                  <v-row>
                    <transition name="bounce">
                      <div v-if="show">
                        <v-col
                          v-for="(service, i) in item.section.services"
                          :key="i"
                          cols="12"
                        >
                          <v-card dark>
                            <div
                              class="d-flex flex-no-wrap justify-space-between"
                            >
                              <div>
                                <v-card-title
                                  class="text-h5"
                                  v-text="service.name"
                                ></v-card-title>
                                <v-card-text>
                                  <div v-html="service.content"></div>
                                </v-card-text>
                              </div>

                              <v-avatar class="pa-0 ma-5" size="100" tile>
                                <v-img
                                  :src="service.image.url"
                                  :alt="service.image.alt"
                                ></v-img>
                              </v-avatar>
                            </div>
                          </v-card>
                        </v-col>
                      </div>
                    </transition>
                  </v-row>
                </v-container>
              </v-col>
            </v-img>
          </v-col>
        </v-row>
      </slide>
      <hooper-progress slot="hooper-addons"></hooper-progress>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Progress as HooperProgress } from 'hooper'

import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide,
    HooperProgress,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      hooperSettings: {
        itemsToshow: 1,
        wheelControl: false,
        infiniteScroll: true,
        vertical: true,
      },
      show: false,
      currentSlide: 0,
    }
  },
  methods: {
    getIndex(index) {
      console.log(index)
    },
    updateCarousel(payload) {
      this.currentSlide = payload.currentSlide
    },
    expanded(val) {
      this.show = val
    },
    slidePrev() {
      this.$refs.carousel.slidePrev()
      this.expanded(false)
      this.$refs.carousel.update()
      setTimeout(() => {
        this.expanded(true)
      }, 300)
    },
    slideNext() {
      this.$refs.carousel.slideNext()
      this.$refs.carousel.restart()
      this.expanded(false)
      this.$refs.carousel.update()
      setTimeout(() => {
        this.$refs.carousel.update()
        this.expanded(true)
      }, 300)
    },
  },
}
</script>
