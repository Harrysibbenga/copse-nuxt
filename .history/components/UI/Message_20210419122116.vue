<template>
  <v-alert v-if="msg.message != ''" :type="msg.type">
    <p>{{ msg.message }}</p>
  </v-alert>
</template>

<script>
export default {
  props: {
    msg: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
}
</script>
