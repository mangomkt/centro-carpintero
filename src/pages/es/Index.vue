<template>
  <Esp>
    <div class="bg-white">
      <div class="container-inner mx-auto flex py-24 md:items-center  md:flex-row-reverse flex-wrap">
        <div class="w-full md:w-5/12 font-bold w-full text-center  align-middle">
          <g-image src="@/assets/img/centro-hero.jpg" alt="Centro Carpintero Renovations"/>
        </div>
        <div class="w-full mt-4 md:mt-0 md:w-7/12 font-bold w-full text-center md:text-left lg:pr-10 align-middle">
          <h1 class="text-4xl md:text-5xl font-serif font-light text-primary leading-tight">Mejoras y Remodelaciones de Casas en Puerto Vallarta</h1>
          <p class="text-2xl mt-4 text-tertiary font-light leading-tight">Centro Carpintero es una empresa de carpintería artística centrada en el mobiliario funcional y el diseño elegante en madera de alta calidad.</p>
          <div class="flex flex-wrap mt-10">
              <div class="w-full md:w-1/2 text-center md:text-left my-4 px-0 border-box">
                  <g-link to="/es/contact" class="inline-block bg-accenta hover:bg-accentb text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3">Contactanos Martha</g-link>
              </div>
              <div class="w-full md:w-1/2 text-center md:text-left my-4 px-0 border-box">
                  <g-link to="/es/gallery" class="inline-block bg-primary hover:bg-tertiary md:ml-4 text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3">Nuestra galeria</g-link>
              </div>
          </div>
        </div>
        
      </div> <!-- end hero -->
    </div>
    <div class="bg-background-secondary flex flex-wrap items-center content-center overflow-hidden">
        
        <div class="w-full md:w-full py-20 lg:w-1/2 font-bold w-full text-left align-middle px-4 md:px-10 lg:px-20">
            <div class="w-full relative mx-auto award-wrapper" style="max-width:480px;" >
              <div class="bg-white relative z-10 py-8 px-4 award">
              <g-image src="@/assets/award/arqflores-horizontal-logo.png" alt="Arqflores logo" class="block mx-auto max-w-sm w-11/12 mb-6" />
              <div class="text-xl w-full max-w-sm mx-auto text-center leading-tight font-light mb-6 font-medium text-green">“Me gusta pensar que soy una especie de conductor de energía que transmite la belleza de la vida para que se manifieste en la arquitectura.”</div>
              <div class="text-md text-center leading-tight font-light mb-2">Mejor arquitecto residencial y comercial 2023</div>
              <div class="text-md text-center leading-tight font-light mb-6">Proyecto de diseño residencial más ambicioso de 2023</div>
              </div>
              <div class="mt-4"><a href="https://www.build-review.com/issues/architecture-awards-2023/31/" target="_blank">Lee el artículo</a> | <a href="https://www.arqflores.com/casa-arriba" target="_blank">visitar arqfloress</a></div>
            </div>
          </div>
          <div class="w-full md:w-full lg:w-1/2 font-bold w-full text-left align-middle p-12">
            <VueSlickCarousel v-bind="settings">
            <div><g-image src="@/assets/award/arqflores-1.jpg" alt="Arqflores Award Winning Project" /></div>
            <div><g-image src="@/assets/award/arqflores-2.jpg" alt="Arqflores Award Winning Project" /></div>
            <div><g-image src="@/assets/award/arqflores-3.jpg" alt="Arqflores Award Winning Project" /></div>
            <div><g-image src="@/assets/award/arqflores-4.jpg" alt="Arqflores Award Winning Project" /></div>
            <div><g-image src="@/assets/award/arqflores-5.jpg" alt="Arqflores Award Winning Project" /></div>
          </VueSlickCarousel>
        </div>
    </div>
    <div class="container-inner py-20 mx-auto px-2">
      <div class="font-bold w-full mb-10 text-center">
        <h2 class="text-4xl md:text-5xl font-serif font-light leading-tight">¿Por qué elegir Centro Carpintero?</h2>
      </div>
      <div class="container-inner mx-auto flex pb-24 md:items-center flex-wrap">
        <div class="w-full md:w-5/12 font-bold w-full text-left  align-middle md:pr-8">
          <g-image src="@/assets/img/centro-custom-cabinetry.jpg" alt="Centro Carpintero Renovations"/>
        </div>
        <div class="w-full md:w-7/12 w-full text-left  align-middle">
          <p class="text-lg sm:text-xl">Contamos con los conocimientos y la experiencia para encargarnos de proyectos de remodelación o renovación de viviendas. Desde la planificación inicial, encontrar ese equilibrio entre el presupuesto y la lista de deseos. Centro Carpintero está ahí para ayudarlo en cada paso.</p>
          <p class="text-lg sm:text-xl">Si está buscando pensar fuera de la caja para aprovechar mejor el espacio de su residencia o si desea completar las renovaciones de la casa de sus sueños, ¡entonces le encantarán nuestras soluciones integradoras hechas a mano en madera!</p>
          <p class="text-lg sm:text-xl">Infunda su hogar o negocio con nuestra amplia experiencia en elegantes diseños de madera que resisten el paso del tiempo y agregan valor y personalidad a su propiedad. Con pasión por la carpintería y compromiso con la calidad de nuestro trabajo, nos asociaremos contigo para proponer combinaciones de las últimas tendencias en funcionalidad, estilo y belleza para todo tipo de muebles finos y carpintería.</p>
        </div>
      </div>
    </div>
    <div class="bg-background-secondary flex flex-wrap">
        <div class="w-full md:w-full lg:w-1/2 font-bold w-full text-left align-middle side-bg">
        </div>
        <div class="w-full md:w-full py-20 lg:w-1/2 font-bold w-full text-left align-middle px-4 md:px-10 lg:px-20">
            <div class="bg-background-white p-8 rounded">
            <div class="text-3xl text-pink text-center leading-tight font-light mb-6">CONTÁCTANOS PARA UN PRESUPUESTO GRATUITO</div>
            <form name="hpestimate" method="post" v-on:submit.prevent="handleSubmit" action="/thankyou/" data-netlify="true" data-netlify-honeypot="bot-field">
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

                            <input type="text" name="name" id="name" placeholder="Jose Gonzalez" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-2" required v-model="formData.name">
                        </div>
                        <div class="w-full px-4 md:w-1/2">
                            <label class="block text-copy-primary mb-2" for="email">
                                Dirección de correo electrónico
                            </label>

                            <input type="email" name="email" id="email" placeholder="email@example.com"  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-2" required v-model="formData.email">
                        </div>
                    </div>

                    <div class="w-full mb-12">
                        <label class="block text-copy-primary mb-2" for="message">
                            Mensaje
                        </label>

                        <textarea id="message" rows="3" name="message" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-2 py-2" placeholder="Introduzca su mensaje aquí." required v-model="formData.message"></textarea>
                    </div>

                    <div class="flex justify-end w-full">
                        <input type="submit" value="Enviar" class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3">
                    </div>
                </form>
          </div>
          </div>
      
    </div>
    
    <div>
      
      <div class="container-inner pt-20 pb-20 mx-auto px-2">
        <div class="font-bold w-full text-center sm:text-center mb-10">
          <div class="text-4xl font-serif font-light leading-tight">Nuestros servicios</div>
          <h2 class="text-2xl font-light leading-tight">Reformas y remodelaciones de viviendas en Puerto Vallarta</h2>
        </div>
        <div class="flex flex-wrap justify-between items-center py-6 ">
          <div class="sw:w-full md:w-full lg:w-1/3 sm:text-center px-8 mx-auto mb-8 md:mb-0">
            <g-image src="../../../static/home1.jpg" alt="browser" class="mx-auto"/>
            <div class="text-2xl leading-tight mt-2">Cocinas personalizadas</div>
            <div class="leading-tight">Minimalista | Sofisticado | Rústico</div>
          </div>
          <div class="sw:w-full md:w-full lg:w-1/3 sm:text-center px-8 mx-auto mb-8 md:mb-0">
            <g-image src="../../../static/home2.jpg" alt="mobile" class="mx-auto" />
            <div class="text-2xl leading-tight mt-2">Dormitorios y baños</div>
            <div class="leading-tight">Armarios Remodelación | Encendiendo</div>
          </div>
          <div class="sw:w-full md:w-full lg:w-1/3 sm:text-center px-8 mx-auto mb-0 md:mb-0">
            <g-image src="../../../static/home3.jpg" alt="mobile" class="mx-auto" />
            <div class="text-2xl leading-tight mt-2">Carpintería a medida</div>
            <div class="leading-tight">Armarios Marcos | Decoración</div>
          </div>
        </div>
        <div class="text-center mt-10">
          <g-link to="/about" class="inline-block bg-green-700 hover:bg-accentb text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3">Aprende sobre nosotros</g-link>
        </div> 
      </div>
    </div>
    <div class="warehouse bg-primary">
      <div class="container-inner py-20 lg:py-40 mx-auto px-2">
        <div class="text-4xl text-white  font-serif font-light">En total, hemos realizado cuatro grandes proyectos en 2019 y 2020 con Centro Carpentry y cada vez, estoy más impresionado con las habilidades de sus artesanos, la integridad de los propietarios y su enfoque en la satisfacción del cliente.</div>
        <div class="text-2xl mt-4 font-light text-white">- Cliente feliz</div>
      </div>
    </div>
    <div class="container-inner py-20 mx-auto px-2">
      <div class="font-bold w-full text-center sm:text-center mb-10">
        <h2 class="text-4xl font-serif font-light leading-tight">Renovaciones y remodelaciones de viviendas</h2>
        <h3 class="text-2xl font-light leading-tight">Carpintería fina y ebanistería a medida en Puerto Vallarta</h3>
      </div>
      <div class="flex flex-wrap justify-between items-center py-6">
        <div class="w-full lg:w-1/3 md:w-1/2 px-8 py-8 sm:py-0 text-center">
          <g-image src="../../../static/gallery/new.jpg" alt="Mesa auxiliar de madera personalizada" />
          <div class="text-green font-bold leading-tight mt-4">Mesa auxiliar de madera personalizada</div>
        </div>
        <div class="w-full lg:w-1/3 md:w-1/2 px-8 py-8 sm:py-0 text-center">
          <g-image src="../../../static/gallery/new2.jpg" alt="Banco de madera de carpintería fina" />
          <div class="text-green font-bold leading-tight mt-4">Banco de madera de carpintería fina</div>
        </div>
        <div class="w-full lg:w-1/3 md:w-1/2 px-8 py-8 sm:py-0 text-center">
          <g-image src="../../../static/gallery/new6.jpg" alt="Cabecero de madera personalizado" />
          <div class="text-green font-bold leading-tight mt-4">Cabecero de madera personalizado</div>
        </div>
      </div>
      <div class="text-center mt-10">
        <g-link to="/es/gallery" class="inline-block bg-green-700 hover:bg-accentb text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3">Visite nuestra galería</g-link>
      </div>
    </div>
    <div class="bg-background-secondary">
      <div class="container-inner mx-auto py-20">
        <div class="font-bold w-full text-center sm:text-center mb-10">
          <div class="text-4xl font-serif font-light leading-tight">Nuestro Blog</div>
        </div>
        <div class="flex flex-wrap">
          <div v-for="post in $page.posts.edges" :key="post.id" class="md:w-full w-full lg:w-1/3 px-8 post mb-12">
            <div class="shadow-md h-full pb-20 relative">
              <g-image alt="Cover image" v-if="post.node.cover_image" class="post-card__image" :src="post.node.cover_image" />
              <h3 class="text-2xl font-regular leading-snug mb-4 mt-4 px-4"><g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link></h3>
              <div class="text-copy-secondary mb-4  px-4">
                <span>{{ post.node.date }}</span>
                <span> &middot; </span>
                <span>{{ post.node.timeToRead }} minutos para leer</span>
              </div>

              <div class="text-lg mb-4 px-4">
                {{ post.node.summary }}
              </div>

              <div class="mb-8 px-4 block absolute bottom-0 left">
                <g-link :to="post.node.path" class="bg-transparent inline-block hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">leer</g-link>
              </div>
            </div>
          </div> <!-- end post -->
        </div>
        <div class="text-center mt-10">
          <g-link to="/es/blog" class="inline-block bg-green-700 hover:bg-accentb text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3">Visita Nuestro Blog</g-link>
        </div>
      </div>
    </div>
    <div class="container-inner py-20 mx-auto px-2">
      <div class="flex flex-wrap py-6">
        <div class="sw:w-full md:w-full lg:w-1/2 w-full px-8 mx-auto pb-8">
          <div class="text-4xl leading-tight md:text-left sm:text-center">Contactar a Marta</div>
          <div class="text-1xl leading-tight mt-4">
            <strong>Centro Cerpintero PV</strong><br>
            Carretera a las Palmas #2523<br>
            Puerto Vallarta, Jalisco 48280<br>
             
            Cel. <a href="tel:322-121-6778">322-121-6778</a><br>
            <a href="mailto:centrocarpinteropv@gmail.com">centrocarpinteropv@gmail.com</a>
          </div>
        </div>
        <div class="sw:w-full md:w-full lg:w-1/2 w-full px-8 mx-auto">
          <div class="text-4xl leading-tight">Obtenga una cuota gratis</div>
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
<page-query>
query Posts ($page: Int) {
  posts: allEsPost (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        timeToRead
        path
        cover_image (width: 760, height: 399, blur: 10)
      }
    }
  }
}
</page-query>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  metaInfo: {
    title: 'Reformas y Remodelaciones de Casas | Puerto Vallarta | Centro Carpintero ',
    titleTemplate: '%s',
    meta: [
      { name: 'description', content:  '¿Busca un contratista que lo ayude con su próximo proyecto de remodelación o renovación en Puerto Vallarta? Martha y su equipo de carpinteros expertos están listos para hacer realidad sus sueños.'},
      { property: 'og:title', content: "Reformas y Remodelaciones de Casas | Puerto Vallarta | Centro Carpintero"},
      { property: 'og:site_name', content: 'Centro Carpintero'},
      {property: 'og:type', content: 'website'},    
      {name: 'robots', content: 'index,follow'} 
    ]
  },
  data() {
    return {
      formData: {},
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
  }
}
</script>

