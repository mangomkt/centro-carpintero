<template>
  <Layout>
    <div class="hero hero-beach-house-projecto">
      <div class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20">
        <div class="font-bold w-full text-center sm:text-center">
          <h1 class="text-5xl font-serif font-light text-white leading-tight">Punta de Mita Beach House Project</h1>
          <div class="text-2xl text-white font-light leading-tight">Centro Carpintero Projects</div>
        </div>
      </div> <!-- end hero -->
    </div>
    <div class="container-inner mx-auto py-20">
      <div class="flex flex-wrap justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0 text-center">
          <VueSlickCarousel v-bind="settings">
            <div><g-image src="@/assets/house-project/beach-house-outside.jpg" alt="Beach House Project Image 1" /></div>
            <div><g-image src="@/assets/house-project/beach-house-back.jpg" alt="Beach House Project Image 2" /></div>
            <div><g-image src="@/assets/house-project/beach-house-roof.jpg" alt="Beach House Project Image 3" /></div>
            <div><g-image src="@/assets/house-project/beach-house-outside-entertainment.jpg" alt="Beach House Project Image 4" /></div>
            <div><g-image src="@/assets/house-project/doors.jpg" alt="Beach House Project Image 5" /></div>
             <div><g-image src="@/assets/house-project/beach-house-closet.jpg" alt="Beach House Project Image 6" /></div>
             <div><g-image src="@/assets/house-project/beach-house-bathroom.jpg" alt="Beach House Project Image 7" /></div>
             <div><g-image src="@/assets/house-project/beach-house-skylight.jpg" alt="Beach House Project Image 8" /></div>
          </VueSlickCarousel>
        </div>
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <div class="text-4xl font-serif font-light leading-tight my-4">Beach House Project</div>
          <p>Custom Woodworking project made from Parota wood</p>
          <ul class="list-disc ml-6 mb-4">
          <li>Parota wood (tropical wood from this region), hardwood</li>
          <li>BBQ area made out of Kumaru wood</li>
          <li>Garage doors made from Parota wood with an exterior finish</li>
          <li>All doors made customly out of Parota wood</li>
          </ul>

          <p><g-link to="/blog/types-of-wood-we-use-pros-and-cons/" class="inline-block bg-green-700 hover:bg-accentb text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3">Read about types of wood we use</g-link></p>
        </div>
      </div>
    </div>
    <div class="warehouse bg-primary">
      <div class="container-inner py-20 lg:py-40 mx-auto px-2">
        <div class="text-4xl text-white font-serif font-light">Outstanding custom design and carpentry company that did a great job restoring existing woodwork and creating new cabinets that match.</div>
        <div class="text-2xl mt-4 font-light text-white">- Happy Customer</div>
      </div>
    </div>
    <div class="container-inner py-20 mx-auto px-2">
      <div class="flex flex-wrap py-6">
        <div class="sw:w-full md:w-full lg:w-1/2 w-full px-8 mx-auto pb-8">
          <div class="text-4xl font-serif font-light leading-tight md:text-left sm:text-center">Free Quote</div>
          <div class="text-1xl leading-tight mt-4">
            <strong>Centro Cerpintero PV</strong><br>
            Carretera a las Palmas #2523<br>
            Puerto Vallarta, Jalisco 48280<br>
             
            Cel. <a href="tel:322-121-6778">322-121-6778</a><br>
            <a href="mailto:centrocarpinteropv@gmail.com">centrocarpinteropv@gmail.com</a>
          </div>
        </div>
        <div class="sw:w-full md:w-full lg:w-1/2 w-full px-8 mx-auto">
          <div class="text-4xl font-serif font-light leading-tight">Get a Quote</div>
          <div class="contact-me pt-4">
            <form name="hpcontact" method="post" v-on:submit.prevent="handleSubmit" action="/thankyou/" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>
                        Don’t fill this out: <input name="bot-field" />
                      </label>
                    </p>
                    <div class="flex flex-wrap mb-6 -mx-4">
                        <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                            <label class="block mb-2 text-copy-primary" for="name">
                                Name
                            </label>

                            <input type="text" name="name" id="name" placeholder="Jon Snow" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required v-model="formData.name">
                        </div>

                        <div class="w-full px-4 md:w-1/2">
                            <label class="block text-copy-primary mb-2" for="email">
                                Email Address
                            </label>

                            <input type="email" name="email" id="email" placeholder="email@example.com"  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required v-model="formData.email">
                        </div>
                    </div>

                    <div class="w-full mb-12">
                        <label class="block text-copy-primary mb-2" for="message">
                            Message
                        </label>

                        <textarea id="message" rows="5" name="message" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4" placeholder="Enter your message here." required v-model="formData.message"></textarea>
                    </div>

                    <div class="flex justify-end w-full">
                        <input type="submit" value="Submit" class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3">
                    </div>
                </form>
           </div> <!-- end contact-me -->
         </div>
      </div>
    </div>
  </Layout>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        "dots": true,
        "arrows": true,
        "infinite": true,
        "centerMode": false,
        "centerPadding": "0px",
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "variableWidth": true
      },
      formData: {}
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/thankyou'))
      .catch(error => alert(error))
    }
  },
  metaInfo: {
    title: 'Fine Woodworking | Carpentry | Centro Carpintero Puert Vallarta',
    titleTemplate: '%s',
    meta: [
      { name: 'description', 
        key: 'description',
        content:  "Learn and get to know a bit better of who is working behind the scenes in making your dreams come true."
      },
      { property: 'og:title', content: "Fine Woodworking | Carpentry | Centro Carpintero Puert Vallarta"},
      { property: 'og:site_name', content: 'Centro Carpintero'},
      {property: 'og:type', content: 'website'},    
      {name: 'robots', content: 'index,follow'} 
    ]
  },
}
</script>

