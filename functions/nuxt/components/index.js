import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as HeadNav } from '../../components/Head/Nav.vue'
export { default as HomeCarousel } from '../../components/Home/Carousel.vue'
export { default as HomeContactForm } from '../../components/Home/ContactForm.vue'
export { default as HomeContactInfo } from '../../components/Home/ContactInfo.vue'
export { default as HomeMap } from '../../components/Home/Map.vue'
export { default as HomeRecruitment } from '../../components/Home/Recruitment.vue'
export { default as HomeScroll } from '../../components/Home/Scroll.vue'
export { default as HomeSection } from '../../components/Home/Section.vue'
export { default as HomeSocial } from '../../components/Home/Social.vue'
export { default as HomeSubscribe } from '../../components/Home/Subscribe.vue'
export { default as Foot } from '../../components/Foot/index.vue'
export { default as ModalsDeleteModal } from '../../components/Modals/DeleteModal.vue'
export { default as ModalsEditModal } from '../../components/Modals/EditModal.vue'
export { default as ModalsExistsModal } from '../../components/Modals/ExistsModal.vue'
export { default as ModalsMultiUpload } from '../../components/Modals/MultiUpload.vue'
export { default as ModalsSelectImageModal } from '../../components/Modals/SelectImageModal.vue'
export { default as ModalsSelectImagesModal } from '../../components/Modals/SelectImagesModal.vue'
export { default as ModalsSelectModal } from '../../components/Modals/SelectModal.vue'
export { default as ModalsUploadModal } from '../../components/Modals/UploadModal.vue'
export { default as UICalendarCard } from '../../components/UI/CalendarCard.vue'
export { default as UIEditor } from '../../components/UI/Editor.vue'
export { default as UIMessage } from '../../components/UI/Message.vue'
export { default as UINewsCard } from '../../components/UI/NewsCard.vue'
export { default as PostEditPosts } from '../../components/Post/EditPosts.vue'
export { default as PostImageUpload } from '../../components/Post/ImageUpload.vue'
export { default as PostItems } from '../../components/Post/Items.vue'
export { default as PostStandardForm } from '../../components/Post/StandardForm.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyHeadNav = import('../../components/Head/Nav.vue' /* webpackChunkName: "components/head-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeCarousel = import('../../components/Home/Carousel.vue' /* webpackChunkName: "components/home-carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeContactForm = import('../../components/Home/ContactForm.vue' /* webpackChunkName: "components/home-contact-form" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeContactInfo = import('../../components/Home/ContactInfo.vue' /* webpackChunkName: "components/home-contact-info" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeMap = import('../../components/Home/Map.vue' /* webpackChunkName: "components/home-map" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeRecruitment = import('../../components/Home/Recruitment.vue' /* webpackChunkName: "components/home-recruitment" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeScroll = import('../../components/Home/Scroll.vue' /* webpackChunkName: "components/home-scroll" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeSection = import('../../components/Home/Section.vue' /* webpackChunkName: "components/home-section" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeSocial = import('../../components/Home/Social.vue' /* webpackChunkName: "components/home-social" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeSubscribe = import('../../components/Home/Subscribe.vue' /* webpackChunkName: "components/home-subscribe" */).then(c => wrapFunctional(c.default || c))
export const LazyFoot = import('../../components/Foot/index.vue' /* webpackChunkName: "components/foot" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsDeleteModal = import('../../components/Modals/DeleteModal.vue' /* webpackChunkName: "components/modals-delete-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsEditModal = import('../../components/Modals/EditModal.vue' /* webpackChunkName: "components/modals-edit-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsExistsModal = import('../../components/Modals/ExistsModal.vue' /* webpackChunkName: "components/modals-exists-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsMultiUpload = import('../../components/Modals/MultiUpload.vue' /* webpackChunkName: "components/modals-multi-upload" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsSelectImageModal = import('../../components/Modals/SelectImageModal.vue' /* webpackChunkName: "components/modals-select-image-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsSelectImagesModal = import('../../components/Modals/SelectImagesModal.vue' /* webpackChunkName: "components/modals-select-images-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsSelectModal = import('../../components/Modals/SelectModal.vue' /* webpackChunkName: "components/modals-select-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalsUploadModal = import('../../components/Modals/UploadModal.vue' /* webpackChunkName: "components/modals-upload-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyUICalendarCard = import('../../components/UI/CalendarCard.vue' /* webpackChunkName: "components/u-i-calendar-card" */).then(c => wrapFunctional(c.default || c))
export const LazyUIEditor = import('../../components/UI/Editor.vue' /* webpackChunkName: "components/u-i-editor" */).then(c => wrapFunctional(c.default || c))
export const LazyUIMessage = import('../../components/UI/Message.vue' /* webpackChunkName: "components/u-i-message" */).then(c => wrapFunctional(c.default || c))
export const LazyUINewsCard = import('../../components/UI/NewsCard.vue' /* webpackChunkName: "components/u-i-news-card" */).then(c => wrapFunctional(c.default || c))
export const LazyPostEditPosts = import('../../components/Post/EditPosts.vue' /* webpackChunkName: "components/post-edit-posts" */).then(c => wrapFunctional(c.default || c))
export const LazyPostImageUpload = import('../../components/Post/ImageUpload.vue' /* webpackChunkName: "components/post-image-upload" */).then(c => wrapFunctional(c.default || c))
export const LazyPostItems = import('../../components/Post/Items.vue' /* webpackChunkName: "components/post-items" */).then(c => wrapFunctional(c.default || c))
export const LazyPostStandardForm = import('../../components/Post/StandardForm.vue' /* webpackChunkName: "components/post-standard-form" */).then(c => wrapFunctional(c.default || c))
