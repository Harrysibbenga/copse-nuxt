<template>
  <section id="news">
    <v-container>
      <h2 class="font-weight-bold text-center pb-2">Carousel &amp; Services</h2>
      <v-switch
        v-model="switch1"
        :label="`Is this a service: ${service}`"
      ></v-switch>
      <v-row>
        <v-col>
          <h3>Carousel</h3>
          <PostImageUpload :image.sync="post.carousel.image" :type="type" />
          <PostStandardForm :content.sync="post.carousel.content" />
        </v-col>
        <v-col cols="6">
          <h3>Services</h3>
          <PostImageUpload :image.sync="post.section.image" :type="type" />
          <PostItems :services.sync="post.section.services" />
        </v-col>
      </v-row>
      <v-row class="pt-2">
        <UIMessage :msg="msg" />
        <v-btn class="mt-5" color="primary" @click="submitForm">Add Post</v-btn>
      </v-row>
    </v-container>
    <v-container fluid>
      <PostEditPosts
        :posts="posts"
        :edit.sync="editModal"
        :delete.sync="deleteModal"
        :post.sync="emitedPost"
      />
      <ModalsDeleteModal
        :modal.sync="deleteModal"
        :item.sync="emitedPost"
        :confirmation.sync="confirmDelete"
      />
      <ModalsEditModal
        :modal.sync="editModal"
        :edit.sync="clickedPost"
        :confirmation.sync="confirmEdit"
        :type="type"
      />
    </v-container>
  </section>
</template>

<script>
import { postsCol } from '@/services/firebase'

export default {
  data() {
    return {
      switch1: true,
      post: {
        carousel: {
          image: {
            id: '',
            url: '',
            alt: '',
          },
          content: {
            title: '',
            desc: '',
            href: '',
          },
        },
        section: {
          image: {
            id: '',
            url: '',
            alt: '',
          },
          services: [
            {
              image: {
                id: '',
                url: '',
                alt: '',
              },
              name: '',
              content: '',
            },
          ],
        },
      },
      type: 'image',
      msg: {
        type: '',
        message: '',
      },
      defaultImg: {
        url:
          'https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7',
        alt: 'Placeholder Image',
      },
      editModal: false,
      deleteModal: false,
      confirmDelete: false,
      confirmEdit: false,
      emitedPost: {},
      newPost: {},
    }
  },
  computed: {
    posts() {
      return this.$store.getters['posts/getPosts']
    },
    clickedPost: {
      get() {
        return this.emitedPost
      },
      set(newValue) {
        this.newPost = newValue
      },
    },
    service() {
      switch (this.switch1) {
        case true:
          return 'Yes'
        default:
          return 'No'
      }
    },
  },
  watch: {
    confirmDelete(newVal, oldVal) {
      if (newVal === true) {
        this.deleteConfirm(newVal)
      }
    },
    confirmEdit(newVal, oldVal) {
      if (newVal === true) {
        this.editConfirm(newVal)
      }
    },
  },
  methods: {
    reset() {
      this.post = {
        carousel: {
          image: {
            id: '',
            url: '',
            alt: '',
          },
          content: {
            title: '',
            desc: '',
            content: '',
            href: '',
          },
        },
        section: {
          image: {
            id: '',
            url: '',
            alt: '',
          },
          services: [
            {
              image: {
                id: '',
                url: '',
                alt: '',
              },
              name: '',
              content: '',
            },
          ],
        },
      }
      this.confirmEdit = false
      this.confirmDelete = false
    },
    addPost() {
      if (this.post.section.image.url === '') {
        this.post.section.image.url = this.defaultImg.url
        this.post.section.image.alt = this.defaultImg.alt
      }

      if (this.post.carousel.image.url === '') {
        this.post.carousel.image.url = this.defaultImg.url
        this.post.carousel.image.alt = this.defaultImg.alt
      }

      postsCol
        .add({
          carousel: {
            image: {
              url: this.post.carousel.image.url,
              alt: this.post.carousel.image.alt,
              id: this.post.carousel.image.id,
            },
            content: {
              title: this.post.carousel.content.title,
              desc: this.post.carousel.content.desc,
              content: this.post.carousel.content.content,
              href: this.post.carousel.content.href,
            },
          },
          section: {
            image: {
              url: this.post.section.image.url,
              alt: this.post.section.image.alt,
              id: this.post.section.image.id,
            },
            services: this.post.section.services,
          },
          display_services: this.switch1,
          createdOn: new Date(),
        })
        .then(() => {
          this.reset()
          this.msg = {
            type: 'success',
            message: 'Post added',
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
    submitForm() {
      this.addPost()
    },
    deleteConfirm(confirm) {
      if (confirm) {
        postsCol
          .doc(this.emitedPost.id)
          .delete()
          .then(() => {
            this.deleteModal = false
            this.msg = {
              type: 'danger',
              message: 'Post deleted',
            }
            setTimeout(() => {
              this.msg = {
                type: '',
                message: '',
              }
            }, 2000)
          })
          .catch((error) => {
            this.msg = {
              type: 'warning',
              message: error.message,
            }
            setTimeout(() => {
              this.msg = {
                type: '',
                message: '',
              }
            }, 2000)
          })
      }
    },
    editConfirm(confirm) {
      if (confirm) {
        if (this.emitedPost.carousel.image.url === '') {
          this.emitedPost.carousel.image.url = this.defaultImg.url
          this.emitedPost.carousel.image.alt = this.defaultImg.alt
        }

        postsCol
          .doc(this.emitedPost.id)
          .update({
            carousel: {
              image: {
                url: this.emitedPost.carousel.image.url,
                alt: this.emitedPost.carousel.image.alt,
                id: this.emitedPost.carousel.image.id,
              },
              content: {
                title: this.emitedPost.carousel.content.title,
                desc: this.emitedPost.carousel.content.desc,
                content: this.emitedPost.carousel.content.content,
                href: this.emitedPost.carousel.content.href,
              },
            },
            section: {
              image: {
                url: this.emitedPost.section.image.url,
                alt: this.emitedPost.section.image.alt,
                id: this.emitedPost.section.image.id,
              },
              services: this.emitedPost.section.services,
            },
            display_services: this.emitedPost.display_services,
            lastUpdateOn: new Date(),
          })
          .then(() => {
            this.reset()
            this.msg = {
              type: 'success',
              message: 'Post updated',
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
      }
    },
  },
}
</script>
