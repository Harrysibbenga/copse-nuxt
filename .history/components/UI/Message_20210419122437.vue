<template>
  <div>
    <v-alert dense text v-if="msg.message != ''" :type="msg.type">
      {{ msg.message }}
    </v-alert>
  </div>
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
