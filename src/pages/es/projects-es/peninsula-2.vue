<template>
  <Esp>
    <div class="hero hero-peninsula-projecto">
      <div class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20">
        <div class="font-bold w-full text-center sm:text-center">
          <h1 class="text-5xl font-serif font-light text-white leading-tight">Peninsula 2</h1>
          <div class="text-2xl text-white font-light leading-tight">Proyectos Centro Carpintero</div>
        </div>
      </div> <!-- end hero -->
    </div>
    <div class="container-inner mx-auto py-20">
      <div class="flex flex-wrap justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0 text-center">
          <VueSlickCarousel v-bind="settings" ref="c1" :asNavFor="c2" :focusOnSelect="true">
          <div><g-image src="@/assets/peninsula-2/pennisula-2-01.jpg" alt="Proyecto Peninsula 2 Imagen 1" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-02.jpg" alt="Proyecto Peninsula 2 Imagen 2" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-03.jpg" alt="Proyecto Peninsula 2 Imagen 3" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-04.jpg" alt="Proyecto Peninsula 2 Imagen 4" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-05.jpg" alt="Proyecto Peninsula 2 Imagen 5" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-06.jpg" alt="Proyecto Peninsula 2 Imagen 6" /></div>
            <div><g-image src="@/assets/peninsula-2/pennisula-2-07.jpg" alt="Proyecto Peninsula 2 Imagen 7" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-08.jpg" alt="Proyecto Peninsula 2 Imagen 8" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-09.jpg" alt="Proyecto Peninsula 2 Imagen 9" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-10.jpg" alt="Proyecto Peninsula 2 Imagen 10" /></div>
          </VueSlickCarousel>
          <VueSlickCarousel v-bind="thumbsettings" ref="c2" :asNavFor="c1" :focusOnSelect="true">
            <div><g-image src="@/assets/peninsula-2/pennisula-2-01.jpg" alt="Proyecto Peninsula 2 Imagen 1" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-02.jpg" alt="Proyecto Peninsula 2 Imagen 2" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-03.jpg" alt="Proyecto Peninsula 2 Imagen 3" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-04.jpg" alt="Proyecto Peninsula 2 Imagen 4" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-05.jpg" alt="Proyecto Peninsula 2 Imagen 5" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-06.jpg" alt="Proyecto Peninsula 2 Imagen 6" /></div>
            <div><g-image src="@/assets/peninsula-2/pennisula-2-07.jpg" alt="Proyecto Peninsula 2 Imagen 7" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-08.jpg" alt="Proyecto Peninsula 2 Imagen 8" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-09.jpg" alt="Proyecto Peninsula 2 Imagen 9" /></div>
           <div><g-image src="@/assets/peninsula-2/pennisula-2-10.jpg" alt="Proyecto Peninsula 2 Imagen 10" /></div>
           </VueSlickCarousel>
        </div>
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <div class="text-4xl font-light leading-tight my-4">Proyecto Peninsula 2</div>
          <ul class="list-disc ml-6 mb-4">
          <li>Pintura profesional y coordinación de colores en todo el espacio</li>
          <li>Diseño e instalación de iluminación personalizada</li>
          <li>Estantes de parota personalizados, centro de entretenimiento y gabinetes de cocina</li>
          <li>Cubiertas de cuarzo natural</li>
        </ul>
        </div>
      </div>
    </div>
    <div class="warehouse bg-primary">
      <div class="container-inner py-20 lg:py-40 mx-auto px-2">
        <div class="text-4xl text-white font-serif font-light">Excelente empresa de diseño y carpintería personalizada que hizo un gran trabajo restaurando carpintería existente y creando nuevos gabinetes que combinan perfectamente.</div>
        <div class="text-2xl mt-4 font-light text-white">- Cliente Satisfecho</div>
      </div>
    </div>
    <div class="container-inner py-20 mx-auto px-2">
      <div class="flex flex-wrap py-6">
        <div class="sw:w-full md:w-full lg:w-1/2 w-full px-8 mx-auto pb-8">
          <div class="text-4xl font-serif font-light leading-tight md:text-left sm:text-center">Cotización Gratuita</div>
          <div class="text-1xl leading-tight mt-4">
            <strong>Centro Carpintero PV</strong><br>
            Carretera a las Palmas #2523<br>
            Puerto Vallarta, Jalisco 48280<br>
             
            Cel. <a href="tel:322-121-6778">322-121-6778</a><br>
            <a href="mailto:centrocarpinteropv@gmail.com">centrocarpinteropv@gmail.com</a>
          </div>
        </div>
        <div class="sw:w-full md:w-full lg:w-1/2 w-full px-8 mx-auto">
          <div class="text-4xl font-serif font-light leading-tight">Obtener Cotización</div>
          <div class="contact-me pt-4">
            <form name="hpcontact" method="post" v-on:submit.prevent="handleSubmit" action="/thankyou/" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>
                        No llenes esto: <input name="bot-field" />
                      </label>
                    </p>
                    <div class="flex flex-wrap mb-6 -mx-4">
                        <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                            <label class="block mb-2 text-copy-primary" for="name">
                                Nombre
                            </label>

                            <input type="text" name="name" id="name" placeholder="Juan Pérez" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required v-model="formData.name">
                        </div>

                        <div class="w-full px-4 md:w-1/2">
                            <label class="block text-copy-primary mb-2" for="email">
                                Correo Electrónico
                            </label>

                            <input type="email" name="email" id="email" placeholder="correo@ejemplo.com"  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required v-model="formData.email">
                        </div>
                    </div>

                    <div class="w-full mb-12">
                        <label class="block text-copy-primary mb-2" for="message">
                            Mensaje
                        </label>

                        <textarea id="message" rows="5" name="message" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4" placeholder="Ingresa tu mensaje aquí." required v-model="formData.message"></textarea>
                    </div>

                    <div class="flex justify-end w-full">
                        <input type="submit" value="Enviar" class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3">
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
    title: 'Carpintería Fina | Ebanistería | Centro Carpintero Puerto Vallarta',
    titleTemplate: '%s',
    meta: [
      { name: 'description', 
        key: 'description',
        content:  "Conoce más sobre el proyecto Peninsula 2 - carpintería personalizada, iluminación, gabinetes de parota y cubiertas de cuarzo natural en Puerto Vallarta."
      },
      { property: 'og:title', content: "Proyecto Peninsula 2 | Centro Carpintero Puerto Vallarta"},
      { property: 'og:site_name', content: 'Centro Carpintero'},
      {property: 'og:type', content: 'website'},    
      {name: 'robots', content: 'index,follow'} 
    ]
  },
}
</script>

<style scoped>
/* Main carousel images - consistent height with object-fit */
::v-deep .slick-slider:first-of-type .slick-slide img {
  width: 100%;
  height: 400px;
  object-fit: contain;
  object-position: center;
  border-radius: 4px;
}

/* Thumbnail carousel images - smaller consistent height */
::v-deep .slick-slider:last-of-type .slick-slide img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

/* Thumbnail hover effect */
::v-deep .slick-slider:last-of-type .slick-slide img:hover {
  opacity: 0.8;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  ::v-deep .slick-slider:first-of-type .slick-slide img {
    height: 250px;
  }
  
  ::v-deep .slick-slider:last-of-type .slick-slide img {
    height: 60px;
  }
}

@media (max-width: 480px) {
  ::v-deep .slick-slider:first-of-type .slick-slide img {
    height: 200px;
  }
  
  ::v-deep .slick-slider:last-of-type .slick-slide img {
    height: 50px;
  }
}
</style>
