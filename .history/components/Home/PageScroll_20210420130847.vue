<template>
  <hooper
    :vertical="true"
    style="height: 800px; padding: 0; margin: 0"
    :items-to-show="1"
    :wheel-control="false"
    :infinite-scroll="true"
  >
    <slide
      v-for="(item, index) in items"
      :id="item.carousel.content.href"
      :key="index"
    >
      <v-card class="mx-auto" tile>
        <v-img :src="item.section.image.url" class="img-fluid"></v-img>
        <v-row cols="12" no-gutters class="fill-height" align="end">
          <v-col cols="12">
            <v-avatar class="ma-3" size="100" tile>
              <v-img :src="service.image.url" :alt="service.image.alt"></v-img>
            </v-avatar>
            <v-container>
              <v-row>
                <v-col
                  v-for="(service, index) in item.section.services"
                  :key="index"
                  cols="12"
                >
                  <v-card dark>
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
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>

          <!-- <v-row align="start" justify="start">
          <v-col class="text-left" cols="12">
            <h1 class="text-h1 mb-4 black--text font-weight-medium">
              {{ item.carousel.content.title }}
            </h1>
          </v-col>
        </v-row> -->
        </v-row>
      </v-card>
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
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
  Navigation as HooperNavigation,
} from 'hooper'

import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
