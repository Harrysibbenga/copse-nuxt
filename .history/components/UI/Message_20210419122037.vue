<template>
  <v-alert
    :type="msg.type"
  > <p>{{ msg.message }}</p> </v-alert>
  <div
    v-if="msg.message != ''"
    :class="`bg-${}`"
    class="pl-5 mt-2 text-white text-center"
  >
    
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
