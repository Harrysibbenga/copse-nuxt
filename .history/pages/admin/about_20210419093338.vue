<template>
  <v-container>
    <h2 class="font-weight-bold text-center pb-2">Section Content</h2>
    <UIEditor :content.sync="about.content"></UIEditor>
    <UiMessage :msg="msg" />
    <v-btn class="mt-5" color="primary" @click.native="update"
      >Update content</v-btn
    >
  </v-container>
</template>

<script>
import { aboutCol } from '@/services/firebase'

export default {
  data() {
    return {
      msg: {
        type: '',
        message: '',
      },
      defaultImg: {
        url:
          'https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7',
        alt: 'Placeholder Image',
      }
    }
  },
  computed: {
    post() {
      const post = {
        id: this.$store.getters['about/getSection'].id,
        content: this.$store.getters['about/getSection'].content,
      }
      return post
    },
  },
  methods: {
    update() {

      aboutCol
        .doc(this.post.id)
        .update({
          content: this.post.content,
          lastUpdateOn: new Date(),
        })
        .then(() => {
          this.msg = {
            type: 'success',
            message: 'Section updated',
          }
          setTimeout(() => {
            this.msg = {
              type: '',
              message: '',
            }
          }, 2000)
        })
        .catch((err) => {
          this.msg = {
            type: 'warning',
            message: err.message,
          }
          setTimeout(() => {
            this.msg = {
              type: '',
              message: '',
            }
          }, 2000)
        })
    },
  },
}
</script>
