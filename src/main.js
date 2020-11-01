// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'

import VueGtag from "vue-gtag";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  Vue.use(VueGtag, {
    config: { 
      id: "G-0S825P54SM"
    }
  });

  head.meta.push({
    name: 'author',
    content: 'Curtis Grant | Mango MKT'
  })
}