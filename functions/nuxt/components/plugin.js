import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Foot: () => import('../../components/Foot/index.vue' /* webpackChunkName: "components/foot" */).then(c => wrapFunctional(c.default || c)),
  HeadNav: () => import('../../components/Head/Nav.vue' /* webpackChunkName: "components/head-nav" */).then(c => wrapFunctional(c.default || c)),
  HomeCarousel: () => import('../../components/Home/Carousel.vue' /* webpackChunkName: "components/home-carousel" */).then(c => wrapFunctional(c.default || c)),
  HomeContactForm: () => import('../../components/Home/ContactForm.vue' /* webpackChunkName: "components/home-contact-form" */).then(c => wrapFunctional(c.default || c)),
  HomeContactInfo: () => import('../../components/Home/ContactInfo.vue' /* webpackChunkName: "components/home-contact-info" */).then(c => wrapFunctional(c.default || c)),
  HomeMap: () => import('../../components/Home/Map.vue' /* webpackChunkName: "components/home-map" */).then(c => wrapFunctional(c.default || c)),
  HomeRecruitment: () => import('../../components/Home/Recruitment.vue' /* webpackChunkName: "components/home-recruitment" */).then(c => wrapFunctional(c.default || c)),
  HomeScroll: () => import('../../components/Home/Scroll.vue' /* webpackChunkName: "components/home-scroll" */).then(c => wrapFunctional(c.default || c)),
  HomeSection: () => import('../../components/Home/Section.vue' /* webpackChunkName: "components/home-section" */).then(c => wrapFunctional(c.default || c)),
  HomeSocial: () => import('../../components/Home/Social.vue' /* webpackChunkName: "components/home-social" */).then(c => wrapFunctional(c.default || c)),
  HomeSubscribe: () => import('../../components/Home/Subscribe.vue' /* webpackChunkName: "components/home-subscribe" */).then(c => wrapFunctional(c.default || c)),
  ModalsDeleteModal: () => import('../../components/Modals/DeleteModal.vue' /* webpackChunkName: "components/modals-delete-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalsEditModal: () => import('../../components/Modals/EditModal.vue' /* webpackChunkName: "components/modals-edit-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalsExistsModal: () => import('../../components/Modals/ExistsModal.vue' /* webpackChunkName: "components/modals-exists-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalsMultiUpload: () => import('../../components/Modals/MultiUpload.vue' /* webpackChunkName: "components/modals-multi-upload" */).then(c => wrapFunctional(c.default || c)),
  ModalsSelectImageModal: () => import('../../components/Modals/SelectImageModal.vue' /* webpackChunkName: "components/modals-select-image-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalsSelectImagesModal: () => import('../../components/Modals/SelectImagesModal.vue' /* webpackChunkName: "components/modals-select-images-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalsSelectModal: () => import('../../components/Modals/SelectModal.vue' /* webpackChunkName: "components/modals-select-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalsUploadModal: () => import('../../components/Modals/UploadModal.vue' /* webpackChunkName: "components/modals-upload-modal" */).then(c => wrapFunctional(c.default || c)),
  PostEditPosts: () => import('../../components/Post/EditPosts.vue' /* webpackChunkName: "components/post-edit-posts" */).then(c => wrapFunctional(c.default || c)),
  PostImageUpload: () => import('../../components/Post/ImageUpload.vue' /* webpackChunkName: "components/post-image-upload" */).then(c => wrapFunctional(c.default || c)),
  PostItems: () => import('../../components/Post/Items.vue' /* webpackChunkName: "components/post-items" */).then(c => wrapFunctional(c.default || c)),
  PostStandardForm: () => import('../../components/Post/StandardForm.vue' /* webpackChunkName: "components/post-standard-form" */).then(c => wrapFunctional(c.default || c)),
  UICalendarCard: () => import('../../components/UI/CalendarCard.vue' /* webpackChunkName: "components/u-i-calendar-card" */).then(c => wrapFunctional(c.default || c)),
  UIEditor: () => import('../../components/UI/Editor.vue' /* webpackChunkName: "components/u-i-editor" */).then(c => wrapFunctional(c.default || c)),
  UIMessage: () => import('../../components/UI/Message.vue' /* webpackChunkName: "components/u-i-message" */).then(c => wrapFunctional(c.default || c)),
  UINewsCard: () => import('../../components/UI/NewsCard.vue' /* webpackChunkName: "components/u-i-news-card" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
