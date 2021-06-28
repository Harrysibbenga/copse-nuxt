<template>
  <v-container>
    <h2 class="font-weight-bold text-center pb-2">About</h2>
    <UIEditor :content.sync="about.content"></UIEditor>
    <UIMessage :msg="msg" />
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
      },
    }
  },
  computed: {
    about() {
      const about = {
        id: this.$store.getters['about/getAbout'].id,
        content: this.$store.getters['about/getAbout'].content,
      }
      return about
    },
  },
  methods: {
    update() {
      aboutCol
        .doc(this.about.id)
        .update({
          content: this.about.content,
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
          }, 4000)
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
          }, 4000)
        })
    },
  },
}
</script>
