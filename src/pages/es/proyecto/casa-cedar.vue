<template>
  <Esp>
    <div class="hero hero-casa-cedar">
      <div class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20">
        <div class="w-full text-center sm:text-center">
          <h1 class="text-5xl font-serif font-light text-white leading-tight">Proyecto Casa Cedar</h1>
          <div class="text-2xl text-white font-light leading-tight">Proyecto Casa Cedar</div>
        </div>
      </div> <!-- end hero -->
    </div>
    <div class="container-inner mx-auto py-20">
      <div class="flex flex-wrap justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0 text-center">
          <VueSlickCarousel v-bind="settings" ref="c1" :asNavFor="c2" :focusOnSelect="true">
            <div><g-image src="@/assets/casa-cedar/cedar5.jpg" alt="Casa Cedar Projecto Image 5" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar7.jpg" alt="Casa Cedar Projecto Image 7" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar9.jpg" alt="Casa Cedar Projecto Image 9" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar23.jpg" alt="Casa Cedar Projecto Image 23" /></div>
             <div><g-image src="@/assets/casa-cedar/cedar28.jpg" alt="Casa Cedar Projecto Image 28" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar26.jpg" alt="Casa Cedar Projecto Image 26" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar34.jpg" alt="Casa Cedar Projecto Image 34" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar37.jpg" alt="Casa Cedar Projecto Image 37" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar38.jpg" alt="Casa Cedar Projecto Image 38" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar39.jpg" alt="Casa Cedar Projecto Image 39" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar40.jpg" alt="Casa Cedar Projecto Image 40" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar42.jpg" alt="Casa Cedar Projecto Image 42" /></div>
          </VueSlickCarousel>
          <VueSlickCarousel v-bind="thumbsettings" ref="c2" :asNavFor="c1" :focusOnSelect="true">
            <div><g-image src="@/assets/casa-cedar/cedar5.jpg" alt="Casa Cedar Projecto Image 5" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar7.jpg" alt="Casa Cedar Projecto Image 7" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar9.jpg" alt="Casa Cedar Projecto Image 9" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar23.jpg" alt="Casa Cedar Projecto Image 23" /></div>
             <div><g-image src="@/assets/casa-cedar/cedar28.jpg" alt="Casa Cedar Projecto Image 28" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar26.jpg" alt="Casa Cedar Projecto Image 26" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar34.jpg" alt="Casa Cedar Projecto Image 34" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar37.jpg" alt="Casa Cedar Projecto Image 37" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar38.jpg" alt="Casa Cedar Projecto Image 38" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar39.jpg" alt="Casa Cedar Projecto Image 39" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar40.jpg" alt="Casa Cedar Projecto Image 40" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar42.jpg" alt="Casa Cedar Projecto Image 42" /></div>
          </VueSlickCarousel>
        </div>
         <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <div class="text-4xl font-light leading-tight my-4">Puertas y Ventanas Personalizadas</div>
          <p>En toda la casa se utilizó madera de cedro para todas las puertas y ventanas.</p>
          <p>Las ventanas de cedro son excelentes para climas húmedos porque pueden resistir las condiciones de humedad.</p>
          <p>En el pasillo, agregamos vidrieras personalizadas a las ventanas, para que la casa fuera brillante y colorida.</p>
          <p>It was important to the owner that every door in the house be customized, hand carved, according to what he desired.</p>
        </div>
      </div>
    </div>
    <div class="bg-gray-100">
      <div class="container-inner mx-auto py-20 bg-gray-100">
        <div class="flex flex-wrap justify-between items-center py-6">
          <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0 text-center">
            <VueSlickCarousel v-bind="settings" ref="c1" :asNavFor="c2" :focusOnSelect="true">
              <div><g-image src="@/assets/casa-cedar/cedar1.jpg" alt="Casa Cedar Projecto Image 1" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar6.jpg" alt="Casa Cedar Projecto Image 6" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar8.jpg" alt="Casa Cedar Projecto Image 8" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar10.jpg" alt="Casa Cedar Projecto Image 10" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar11.jpg" alt="Casa Cedar Projecto Image 11" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar15.jpg" alt="Casa Cedar Projecto Image 15" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar18.jpg" alt="Casa Cedar Projecto Image 18" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar19.jpg" alt="Casa Cedar Projecto Image 19" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar29.jpg" alt="Casa Cedar Projecto Image 29" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar41.jpg" alt="Casa Cedar Projecto Image 41" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar43.jpg" alt="Casa Cedar Projecto Image 43" /></div>
            </VueSlickCarousel>
            <VueSlickCarousel v-bind="thumbsettings" ref="c2" :asNavFor="c1" :focusOnSelect="true">
            <div><g-image src="@/assets/casa-cedar/cedar1.jpg" alt="Casa Cedar Projecto Image 1" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar6.jpg" alt="Casa Cedar Projecto Image 6" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar8.jpg" alt="Casa Cedar Projecto Image 8" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar10.jpg" alt="Casa Cedar Projecto Image 10" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar11.jpg" alt="Casa Cedar Projecto Image 11" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar15.jpg" alt="Casa Cedar Projecto Image 15" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar18.jpg" alt="Casa Cedar Projecto Image 18" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar19.jpg" alt="Casa Cedar Projecto Image 19" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar29.jpg" alt="Casa Cedar Projecto Image 29" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar41.jpg" alt="Casa Cedar Projecto Image 41" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar43.jpg" alt="Casa Cedar Projecto Image 43" /></div>
            </VueSlickCarousel>
          </div>
          <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
            <div class="text-4xl font-light leading-tight my-4">Carpintería Interior</div>
            <p>Casi todas las partes de la casa estaban hechas de madera de cedro, desde los gabinetes hasta el piso.</p>
            <p>Las piezas de arte hechas a mano se exhiben en toda la casa.</p>
            <p>Nuestro equipo y maestros artesanos ayudaron a crear una casa estilo mexicano para el propietario.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-inner mx-auto py-20">
      <div class="flex flex-wrap justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0 text-center">
          <VueSlickCarousel v-bind="settings" ref="c1" :asNavFor="c2" :focusOnSelect="true">
             <div><g-image src="@/assets/casa-cedar/cedar2.jpg" alt="Casa Cedar Projecto Image 2" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar3.jpg" alt="Casa Cedar Projecto Image 3" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar4.jpg" alt="Casa Cedar Projecto Image 4" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar12.jpg" alt="Casa Cedar Projecto Image 12" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar13.jpg" alt="Casa Cedar Projecto Image 13" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar14.jpg" alt="Casa Cedar Projecto Image 14" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar16.jpg" alt="Casa Cedar Projecto Image 16" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar27.jpg" alt="Casa Cedar Projecto Image 27" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar17.jpg" alt="Casa Cedar Projecto Image 17" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar20.jpg" alt="Casa Cedar Projecto Image 20" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar24.jpg" alt="Casa Cedar Projecto Image 24" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar25.jpg" alt="Casa Cedar Projecto Image 25" /></div>
             <div><g-image src="@/assets/casa-cedar/cedar30.jpg" alt="Casa Cedar Projecto Image 30" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar32.jpg" alt="Casa Cedar Projecto Image 32" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar33.jpg" alt="Casa Cedar Projecto Image 33" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar35.jpg" alt="Casa Cedar Projecto Image 35" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar36.jpg" alt="Casa Cedar Projecto Image 36" /></div>
          </VueSlickCarousel>
          <VueSlickCarousel v-bind="thumbsettings" ref="c2" :asNavFor="c1" :focusOnSelect="true">
            <div><g-image src="@/assets/casa-cedar/cedar2.jpg" alt="Casa Cedar Projecto Image 2" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar3.jpg" alt="Casa Cedar Projecto Image 3" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar4.jpg" alt="Casa Cedar Projecto Image 4" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar12.jpg" alt="Casa Cedar Projecto Image 12" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar13.jpg" alt="Casa Cedar Projecto Image 13" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar14.jpg" alt="Casa Cedar Projecto Image 14" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar16.jpg" alt="Casa Cedar Projecto Image 16" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar27.jpg" alt="Casa Cedar Projecto Image 27" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar17.jpg" alt="Casa Cedar Projecto Image 17" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar20.jpg" alt="Casa Cedar Projecto Image 20" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar24.jpg" alt="Casa Cedar Projecto Image 24" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar25.jpg" alt="Casa Cedar Projecto Image 25" /></div>
             <div><g-image src="@/assets/casa-cedar/cedar30.jpg" alt="Casa Cedar Projecto Image 30" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar32.jpg" alt="Casa Cedar Projecto Image 32" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar33.jpg" alt="Casa Cedar Projecto Image 33" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar35.jpg" alt="Casa Cedar Projecto Image 35" /></div>
            <div><g-image src="@/assets/casa-cedar/cedar36.jpg" alt="Casa Cedar Projecto Image 36" /></div>S
          </VueSlickCarousel>
        </div>
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <div class="text-4xl font-light leading-tight my-4">Muebles personalizados</div>
          <p>Se agregaron coloridas cuentas de estilo mexicano a las mesitas de noche, los marcos de las camas y los armarios.</p>
          <p>Los marcos de cama tallados a mano en las habitaciones se personalizaron a gusto de los propietarios.</p>
          <p>La durabilidad de las mesas de madera de cedro las hace ideales para el uso diario, especialmente para familias con niños.</p>
        </div>
      </div>
    </div>
    <div class="warehouse bg-primary">
      <div class="container-inner py-20 lg:py-40 mx-auto px-2">
        <div class="text-4xl text-white font-serif font-light">Excelente empresa de carpintería y diseño personalizado que hizo un gran trabajo restaurando carpintería existente y creando nuevos gabinetes que combinan. Les doy mi más alta recomendación !!!</div>
        <div class="text-2xl mt-4 font-light text-white">- Cliente feliz</div>
      </div>
    </div>
    <div class="container-inner py-20 mx-auto px-2">
      <div class="flex flex-wrap py-6">
        <div class="sw:w-full md:w-full lg:w-1/2 w-full px-8 mx-auto pb-8">
          <div class="text-4xl font-serif font-light leading-tight md:text-left sm:text-center">Contacta con nosotras</div>
          <div class="text-1xl leading-tight mt-4">
            <strong>Centro Cerpintero PV</strong><br>
            Carretera a las Palmas #2523<br>
            Puerto Vallarta, Jalisco 48280<br>
             
            Cel. <a href="tel:322-121-6778">322-121-6778</a><br>
            <a href="mailto:centrocarpinteropv@gmail.com">centrocarpinteropv@gmail.com</a>
          </div>
        </div>
        <div class="sw:w-full md:w-full lg:w-1/2 w-full px-8 mx-auto">
          <div class="text-4xl font-serif font-light leading-tight">Cotización Gratis</div>
          <div class="contact-me pt-4">
            <form name="hpcontact" method="post" v-on:submit.prevent="handleSubmit" action="/es/gracias/" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>
                        Don’t fill this out: <input name="bot-field" />
                      </label>
                    </p>
                    <div class="flex flex-wrap mb-6 -mx-4">
                        <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                            <label class="block mb-2 text-copy-primary" for="name">
                                Nombre
                            </label>

                            <input type="text" name="name" id="name" placeholder="Jose Gonzalez" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required v-model="formData.name">
                        </div>

                        <div class="w-full px-4 md:w-1/2">
                            <label class="block text-copy-primary mb-2" for="email">
                                Dirección de correo electrónico
                            </label>

                            <input type="email" name="email" id="email" placeholder="email@example.com"  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required v-model="formData.email">
                        </div>
                    </div>

                    <div class="w-full mb-12">
                        <label class="block text-copy-primary mb-2" for="message">
                            Mensaje
                        </label>

                        <textarea id="message" rows="5" name="message" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4" placeholder="Introduzca su mensaje aquí." required v-model="formData.message"></textarea>
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

