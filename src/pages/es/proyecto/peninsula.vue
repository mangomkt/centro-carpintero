<template>
  <Esp>
    <div class="hero hero-peninsula-projecto">
      <div class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20">
        <div class="font-bold w-full text-center sm:text-center">
          <h1 class="text-5xl font-serif font-light text-white leading-tight">Peninsula</h1>
          <div class="text-2xl text-white font-light leading-tight">Centro Carpintero Proyecto</div>
        </div>
      </div> <!-- end hero -->
    </div>
    <div class="container-inner mx-auto py-20">
      <div class="flex flex-wrap justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0 text-center">
          <VueSlickCarousel v-bind="settings" ref="c1" :asNavFor="c2" :focusOnSelect="true">
            <div><g-image src="@/assets/peninsula/peninsula1.jpg" alt="Peninsula Projecto Image 1" /></div>
           <div><g-image src="@/assets/peninsula/peninsula2.jpg" alt="Peninsula Projecto Image 2" /></div>
           <div><g-image src="@/assets/peninsula/peninsula3.jpg" alt="Peninsula Projecto Image 3" /></div>
           <div><g-image src="@/assets/peninsula/peninsula9.jpg" alt="Peninsula Projecto Image 9" /></div>
           <div><g-image src="@/assets/peninsula/peninsula19.jpg" alt="Peninsula Projecto Image 19" /></div>
           <div><g-image src="@/assets/peninsula/peninsula21.jpg" alt="Peninsula Projecto Image 21" /></div>
            <div><g-image src="@/assets/peninsula/peninsula5.jpg" alt="Peninsula Projecto Image 5" /></div>
           <div><g-image src="@/assets/peninsula/peninsula18.jpg" alt="Peninsula Projecto Image 18" /></div>
           <div><g-image src="@/assets/peninsula/peninsula20.jpg" alt="Peninsula Projecto Image 20" /></div>
           <div><g-image src="@/assets/peninsula/peninsula6.jpg" alt="Peninsula Projecto Image 6" /></div>
           <div><g-image src="@/assets/peninsula/peninsula7.jpg" alt="Peninsula Projecto Image 7" /></div>
           <div><g-image src="@/assets/peninsula/peninsula8.jpg" alt="Peninsula Projecto Image 8" /></div>
            <div><g-image src="@/assets/peninsula/peninsula12.jpg" alt="Peninsula Projecto Image 12" /></div>
            <div><g-image src="@/assets/peninsula/peninsula13.jpg" alt="Peninsula Projecto Image 13" /></div>
           <div><g-image src="@/assets/peninsula/peninsula15.jpg" alt="Peninsula Projecto Image 15" /></div>
           <div><g-image src="@/assets/peninsula/peninsula16.jpg" alt="Peninsula Projecto Image 16" /></div>
           <div><g-image src="@/assets/peninsula/peninsula10.jpg" alt="Peninsula Projecto Image 10" /></div>
            <div><g-image src="@/assets/peninsula/peninsula22.jpg" alt="Peninsula Projecto Image 22" /></div>
           <div><g-image src="@/assets/peninsula/peninsula11.jpg" alt="Peninsula Projecto Image 11" /></div>
           <div><g-image src="@/assets/peninsula/peninsula14.jpg" alt="Peninsula Projecto Image 14" /></div>
           <div><g-image src="@/assets/peninsula/peninsula17.jpg" alt="Peninsula Projecto Image 17" /></div>
          </VueSlickCarousel>
          <VueSlickCarousel v-bind="thumbsettings" ref="c2" :asNavFor="c1" :focusOnSelect="true">
          <div><g-image src="@/assets/peninsula/peninsula1.jpg" alt="Peninsula Projecto Image 1" /></div>
           <div><g-image src="@/assets/peninsula/peninsula2.jpg" alt="Peninsula Projecto Image 2" /></div>
           <div><g-image src="@/assets/peninsula/peninsula3.jpg" alt="Peninsula Projecto Image 3" /></div>
           <div><g-image src="@/assets/peninsula/peninsula9.jpg" alt="Peninsula Projecto Image 9" /></div>
           <div><g-image src="@/assets/peninsula/peninsula19.jpg" alt="Peninsula Projecto Image 19" /></div>
           <div><g-image src="@/assets/peninsula/peninsula21.jpg" alt="Peninsula Projecto Image 21" /></div>
            <div><g-image src="@/assets/peninsula/peninsula5.jpg" alt="Peninsula Projecto Image 5" /></div>
           <div><g-image src="@/assets/peninsula/peninsula18.jpg" alt="Peninsula Projecto Image 18" /></div>
           <div><g-image src="@/assets/peninsula/peninsula20.jpg" alt="Peninsula Projecto Image 20" /></div>
           <div><g-image src="@/assets/peninsula/peninsula6.jpg" alt="Peninsula Projecto Image 6" /></div>
           <div><g-image src="@/assets/peninsula/peninsula7.jpg" alt="Peninsula Projecto Image 7" /></div>
           <div><g-image src="@/assets/peninsula/peninsula8.jpg" alt="Peninsula Projecto Image 8" /></div>
            <div><g-image src="@/assets/peninsula/peninsula12.jpg" alt="Peninsula Projecto Image 12" /></div>
            <div><g-image src="@/assets/peninsula/peninsula13.jpg" alt="Peninsula Projecto Image 13" /></div>
           <div><g-image src="@/assets/peninsula/peninsula15.jpg" alt="Peninsula Projecto Image 15" /></div>
           <div><g-image src="@/assets/peninsula/peninsula16.jpg" alt="Peninsula Projecto Image 16" /></div>
           <div><g-image src="@/assets/peninsula/peninsula10.jpg" alt="Peninsula Projecto Image 10" /></div>
            <div><g-image src="@/assets/peninsula/peninsula22.jpg" alt="Peninsula Projecto Image 22" /></div>
           <div><g-image src="@/assets/peninsula/peninsula11.jpg" alt="Peninsula Projecto Image 11" /></div>
           <div><g-image src="@/assets/peninsula/peninsula14.jpg" alt="Peninsula Projecto Image 14" /></div>
           <div><g-image src="@/assets/peninsula/peninsula17.jpg" alt="Peninsula Projecto Image 17" /></div>
          </VueSlickCarousel>
        </div>
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <div class="text-4xl font-light leading-tight my-4">Peninsula Proyecto</div>
          <ul class="list-disc ml-6 mb-4">
          <li>En todos los mostradores de la cocina se utilizó cuarzo Mont Blanc natural de Brasil.</li>
          <li>En todos los baños se utilizó mármol Crema Marfil y mármol Rojo Alicante.</li>
          <li>El mostrador de la barra es de granito Universal con un acabado de cuero.</li>
          <li>Se utilizó cuarzo Lupita Natural para el protector contra salpicaduras de la cocina y las paredes de la isla.</li>
        </ul>
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
  </Esp>
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
      c1: undefined,
      c2: undefined,
      settings: {
        "dots": false,
        "arrows": true,
        "infinite": true,
        "centerMode": false,
        "centerPadding": "0px",
        "slidesToShow": 1,
        "slidesToScroll": 1
      },
      thumbsettings: {
        "dots": false,
        "arrows": false,
        "infinite": true,
        "centerMode": false,
        "centerPadding": "0px",
        "slidesToShow": 5,
        "slidesToScroll": 1
      },
      formData: {}
    }
  },
  mounted() {
    this.c1 = this.$refs.c1;
    this.c2 = this.$refs.c2;
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

