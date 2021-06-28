<template>
  <div>
    <hooper style="height: 1250px" :settings="hooperSettings">
      <slide v-for="(item, index) in items" :key="index">
        <v-row :id="item.carousel.content.href" class="white mr-6 mt-2">
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
                      v-for="(service, index) in item.section.services"
                      :key="index"
                      cols="12"
                    >
                      <v-card dark delay="0" left="100">
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
  </div>
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
    }
  },
}
</script>
