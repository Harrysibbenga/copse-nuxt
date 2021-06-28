<template>
  <hooper style="height: 1300px" :settings="hooperSettings" @slide="updateCarousel">
    <slide v-for="(item, index) in items" :key="index">
      <v-row :id="item.carousel.content.href" class="white mr-6 mt-4">
        <v-col cols="12">
          <v-img :src="item.section.image.url" class="img-fluid">
            <h1
              class="text-h6 text-md-h1 mx-auto white--text font-weight-medium text-right pa-10"
            >
              {{ item.carousel.content.title }}
            </h1>
            <v-col cols="6">
              <v-container>
                <v-row>
                  <v-col
                    v-for="(service, i) in item.section.services"
                    :key="i"
                    cols="12"
                  >
                    <v-expand-transition>
                      <v-card v-show="expand" dark>
                        <div class="d-flex flex-no-wrap justify-space-between">
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
                    </v-expand-transition>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-img>
        </v-col>
      </v-row>
    </slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
    <hooper-progress slot="hooper-addons"></hooper-progress>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
} from 'hooper'

import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
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
      expand: false,
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
  },
}
</script>
