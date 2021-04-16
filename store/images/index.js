/* eslint-disable prefer-promise-reject-errors */
import { imgCol, serviceImgs, storage } from '@/services/firebase'

export const state = () => ({
  image: {},
  images: [],
  serviceImages: [],
  uploadMsg: {},
})

export const mutations = {
  SET_IMAGE: (state, image) => {
    state.image = image
  },
  SET_IMAGES: (state, images) => {
    state.images = images
  },
  SET_SERVICE_IMAGES: (state, images) => {
    state.serviceImages = images
  },
  SET_MSG: (state, msg) => {
    state.uploadMsg = msg
  },
}

export const getters = {
  message: (state) => state.uploadMsg,
  imageImages: (state) => state.images,
  servicesImages: (state) => state.serviceImages,
}

export const actions = {
  setImages({ commit }) {
    imgCol.orderBy('createdOn', 'desc').onSnapshot((querySnapshot) => {
      const imagesArray = []

      querySnapshot.forEach((doc) => {
        const image = doc.data()
        image.id = doc.id
        imagesArray.push(image)
      })
      commit('SET_IMAGES', imagesArray)
    })

    serviceImgs.orderBy('createdOn', 'desc').onSnapshot((querySnapshot) => {
      const imagesArray = []

      querySnapshot.forEach((doc) => {
        const image = doc.data()
        image.id = doc.id
        imagesArray.push(image)
      })
      commit('SET_SERVICE_IMAGES', imagesArray)
    })
  },
  uploadImage({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let type, collection

      if (payload.type === 'image') {
        type = payload.type
        collection = imgCol
      }

      if (payload.type === 'services') {
        type = payload.type
        collection = serviceImgs
      }

      const storageRef = storage.ref(type + '/' + payload.file.name)
      const uploadTask = storageRef.put(payload.file)

      uploadTask.on(
        'state_changed',
        () => {
          // snapshot
        },
        () => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            collection
              .add({
                name: payload.file.name,
                createdOn: new Date(),
                url: downloadURL,
                alt: payload.alt,
                type: payload.type,
              })
              .then((doc) => {
                const id = doc.id
                collection
                  .doc(id)
                  .get()
                  .then((doc) => {
                    const img = doc.data()
                    img.id = id
                    const uploadMsg = {
                      type: 'success',
                      message: 'Image sucssesfully uploaded to storage',
                    }
                    commit('SET_MSG', uploadMsg)
                    resolve(img)
                  })
              })
              .catch((err) => {
                const uploadMsg = {
                  type: 'warning',
                  message: err.message,
                }
                commit('SET_MSG', uploadMsg)
                reject()
              })
          })
        }
      )
    })
  },
}
