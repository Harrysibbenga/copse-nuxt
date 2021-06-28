<template>
  <div>
    <v-alert v-if="msg.message != ''" :type="msg.type">
      <p>{{ msg.message }}</p>
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
