<template>
  <Esp>
    <div class="hero">
      <div class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20">
        <div class="font-bold w-full text-center sm:text-center">
          <div class="text-4xl md:text-5xl font-serif font-light text-white leading-tight">Sobre Centro Carpintero</div>
          <div class="text-2xl text-white font-light leading-tight">Conoce a Martha</div>
        </div>
      </div> <!-- end hero -->
    </div>
    <div class="container-inner mx-auto py-20">
      <div class="flex flex-wrap justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0 text-center">
          <g-image src="../../../static/martha.jpg" alt="MARTHA BEATRIZ NAVARRO BARAJAS" />
        </div>
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <div class="text-4xl font-light leading-tight my-4">MARTHA BEATRIZ NAVARRO BARAJAS</div>
          <p>Nacida en Guadalajara el 16 de marzo de 1977 llegó a Puerto Vallarta. Fue a la Universidad de Guadalajara CUC hasta que tuvo la oportunidad de ir a Idaho para terminar su título en Negocios Generales en la universidad Southern Idaho. También terminó los cursos de ESL (inglés como segundo idioma) junto con su título.</p>
        </div>
      </div>
    </div>
  </Esp>
</template>

<script>
export default {
  metaInfo: {
    title: 'Sobre nosotros | Centro Carpintero',
    titleTemplate: '%s', 
    meta: [
      { name: 'description', 
        key: 'description',
        content: "Aprenda y conozca un poco mejor quién está trabajando detrás de escena para hacer realidad sus sueños.."
      },
      { property: 'og:title', content: "Sobre nosotros | Centro Carpintero"},
      { property: 'og:site_name', content: 'Centro Carpintero'},
      {property: 'og:type', content: 'website'},    
      {name: 'robots', content: 'index,follow'} 
    ]
  }
}
</script>

