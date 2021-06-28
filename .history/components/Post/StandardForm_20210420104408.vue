<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model.trim="postContent.title"
          label="Title"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-textarea
          v-model.trim="postContent.desc"
          counter
          label="Descrpiton"
          :value="postContent.desc"
        >
        </v-textarea>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model.trim="postContent.href"
          label="href e.g (porshe,tuning,social) used to link to the section on the page related to this item"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    postContent: {
      get() {
        return this.content
      },
      set(newVal) {
        this.$emit('update:content', newVal)
      },
    },
  },
}
</script>
