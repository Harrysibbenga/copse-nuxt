<template>
  <v-col :id="item.carousel.content.href" cols="12" class="pa-0">
    <v-parallax :src="item.section.image.url" :height="1000">
      <v-row align="start" justify="start">
        <v-col class="text-left" cols="12">
          <h1 class="display-1 mb-4">{{ item.carousel.content.title }}</h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="between">
        <v-col
          v-for="(service, index) in item.section.services"
          :key="index"
          class="text-center"
        >
          <v-flex>
            <v-img
              :src="service.image.url"
              :alt="service.image.alt"
              max-width="100px"
              height="100px"
              class="mx-auto"
            ></v-img>

            <h3 color="red">{{ service.name }}</h3>
          </v-flex>
        </v-col>
      </v-row>
    </v-parallax>
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
}
</script>
