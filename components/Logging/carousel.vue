<template>
  <div>
    <v-container class="success">
      <v-carousel show-arrows-on-hover height="auto">
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-img
            :src="require('../../assets/images/' + item.imgSrc)"
            :alt="item.imgAlt"
            max-width="100%"
            max-height="100%"
          ></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          imgSrc: 'logging/Road-Keeper Roll Bar Mount side view.jpg',
          imgAlt: 'Road-Keeper Roll Bar Mount side view',
        },
        {
          imgSrc: 'logging/Road-Keeper Roll Bar Mount.jpg',
          imgAlt: 'Road-Keeper Roll Bar Mount',
        },
        {
          imgSrc: 'logging/Road-Keeper with accessories.jpg',
          imgAlt: 'Road-Keeper with accessories',
        },
      ],
    }
  },
}
</script>
