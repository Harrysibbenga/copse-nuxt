<template>
  <hooper
    :vertical="true"
    style="height: 800px"
    :items-to-show="1"
    :wheel-control="false"
    :infinite-scroll="true"
  >
    <slide v-for="(item, index) in items" :key="index">
      <v-row :id="item.carousel.content.href" cols="12" class="pa-0">
        <v-col cols="8" class="pa-0">
          <v-img :src="item.section.image.url" class="img-fluid"></v-img>
        </v-col>

        <v-col v-for="(service, index) in item.section.services" :key="index">
          <v-sheet color="transparent">
            <v-flex class="text-center">
              <v-img
                :src="service.image.url"
                :alt="service.image.alt"
                max-width="150px"
                max-height="150px"
                class="mx-auto"
              ></v-img>

              <h3 color="red">{{ service.name }}</h3>
            </v-flex>

            <v-sheet class="pa-10 red rounded">
              <div v-html="service.content"></div>
            </v-sheet>
          </v-sheet>
        </v-col>

        <!-- <v-row align="start" justify="start">
          <v-col class="text-left" cols="12">
            <h1 class="text-h1 mb-4 black--text font-weight-medium">
              {{ item.carousel.content.title }}
            </h1>
          </v-col>
        </v-row> -->
      </v-row>
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
