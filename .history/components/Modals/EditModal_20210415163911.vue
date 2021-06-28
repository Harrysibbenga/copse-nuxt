<template>
  <v-dialog
    v-model="editModal"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <v-card v-if="post.carousel">
      <v-card-title
        ><h1>{{ post.carousel.content.title }}</h1></v-card-title
      >
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <h3>Carousel section</h3>
            <PostImageUpload :image.sync="post.carousel.image" :type="type" />
            <PostStandardForm :content.sync="post.carousel.content" />
          </v-col>
          <v-col cols="6">
            <h3>Services section</h3>
            <PostImageUpload :image.sync="post.section.image" :type="type" />
            <PostItems :services.sync="post.section.services" />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" @click.native="cancelEdit">Close</v-btn>
        <v-btn color="primary" @click.native="saveEdit">Save changes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    edit: {
      type: Object,
      default: () => ({}),
    },
    modal: {
      type: Boolean,
      default: false,
    },
    confirmation: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      updatedPost: {},
    }
  },
  computed: {
    editModal: {
      get() {
        return this.modal
      },
      set(newVal) {
        this.$emit('update:modal', newVal)
      },
    },
    post: {
      get() {
        return this.edit
      },
      set(newVal) {
        this.updatedPost = newVal
      },
    },
  },
  methods: {
    saveEdit() {
      this.$emit('update:confirmation', true)
      this.$emit('update:edit', this.updatedPost)
      this.close()
    },
    cancelEdit() {
      this.$emit('update:confirmation', false)
      this.close()
    },
    close() {
      this.editModal = false
    },
  },
}
</script>
