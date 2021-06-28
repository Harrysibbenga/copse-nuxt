<template>
  <v-img
    src="/copse-automotive-logo.png"
    alt="Copse Automotive Logo"
    height="auto"
    max-width="100"
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
