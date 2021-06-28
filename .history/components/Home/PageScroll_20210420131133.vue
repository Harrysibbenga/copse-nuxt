<template>
  <hooper
    :vertical="true"
    style="height: 10000px; padding: 0; margin: 0"
    :items-to-show="1"
    :wheel-control="false"
    :infinite-scroll="true"
  >
    <slide v-for="(item, index) in items" :key="index">
      <v-container fluid>
        <v-row :id="item.carousel.content.href" cols="12" no-gutters>
          <v-col cols="6">
            <v-img :src="item.section.image.url" class="img-fluid"></v-img>
          </v-col>
          <v-col cols="6">
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

                      <v-avatar class="ma-3" size="100" tile>
                        <v-img
                          :src="service.image.url"
                          :alt="service.image.alt"
                        ></v-img>
                      </v-avatar>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
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
