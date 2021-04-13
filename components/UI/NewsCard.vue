<template>
  <v-card>
    <v-img :src="item.url" :alt="item.alt"></v-img>
    <v-card-title>
      {{ item.title }}
    </v-card-title>
    <v-card-actions>
      <v-btn
        color="primary lighten-2"
        text
        :nuxt="true"
        :to="{ name: 'post-slug', params: { slug: item.slug } }"
      >
        Read
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{ item.excerpt }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>
