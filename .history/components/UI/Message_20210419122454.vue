<template>
  <div>
    <v-alert v-if="msg.message != ''" dense text :type="msg.type">
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
