<template>
  <div>
    <v-img
      :src="require('../../assets/images/' + imgSrc)"
      :alt="imgAlt"
      min-width="100%"
      min-height="300px"
    ></v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: 'logging/Road-Keeper HD Standard.jpg',
      imgAlt: 'Road-Keeper HD Standard',
    }
  },
}
</script>
