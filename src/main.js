// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  head.meta.push({
    name: 'keywords',
    content: 'home renovations, puerto vallarta, fine carpentry, custom woodworking'
  })

  head.meta.push({
    name: 'description',
    content: 'Centro Carpintero PV - High quality home renovation.'
  })

  head.meta.push({
    name: 'author',
    content: 'Curtis Grant'
  })
}


