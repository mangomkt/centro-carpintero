// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import EspLayout from '~/layouts/Esp.vue'

import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'

import VueGtag from "vue-gtag";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.component('Esp', EspLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,900;1,300&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap'
  })


  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  Vue.use(VueGtag, {
    config: { 
      id: "G-4HD9NLSE2D"
    }
  });

  head.meta.push({
    name: 'author',
    content: 'Curtis Grant | Mango MKT'
  })
}