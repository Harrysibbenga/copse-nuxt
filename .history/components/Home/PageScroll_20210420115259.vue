<template>
  <hooper
    :vertical="true"
    style="height: 800px"
    :items-to-show="1"
    :center-mode="true"
  >
    <slide v-for="(item, index) in items" :key="index">
      <v-img :src="item.carousel.image.url"></v-img>
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
