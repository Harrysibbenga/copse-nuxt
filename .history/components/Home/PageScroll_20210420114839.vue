<template>
  <hooper
    :vertical="true"
    style="height: 800px"
    :items-to-show="1"
    :center-mode="true"
  >
    <slide v-for="(item,index) in  items" :key="index"> slide 1 </slide>
  </hooper>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
