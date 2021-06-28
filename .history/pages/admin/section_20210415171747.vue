<template>
  <section id="news">
    <v-container>
      <h2 class="font-weight-bold text-center pb-2">Section info</h2>
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
          services: [],
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
      if (
        this.post.carousel.content.title === '' ||
        this.post.carousel.content.content === ''
      ) {
        this.msg = {
          type: 'Warning',
          message:
            'Missing information please make sure the post information is filled',
        }
        setTimeout(() => {
          this.msg = {
            type: '',
            message: '',
          }
        }, 2000)
      } else {
        this.addPost()
      }
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
