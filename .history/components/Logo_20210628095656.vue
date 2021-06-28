<template>
  <v-img
    src="/copse-automotive-logo.png"
    alt="Copse Automotive Logo"
    :max-height="height"
    :max-width="width"
  ></v-img>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 100,
    },
    width: {
      type: Number,
      default: 200,
    },
  },
}
</script>
