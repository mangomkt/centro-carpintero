<template>
  <Layout>
    <div class="hero">
      <div class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20">
        <div class="font-bold w-full text-center sm:text-center">
          <div class="text-4xl md:text-5xl font-serif font-light text-white leading-tight">About Centro Carpintero</div>
          <div class="text-2xl text-white font-light leading-tight">Meet Martha</div>
        </div>
      </div> <!-- end hero -->
    </div>
    <div class="container-inner mx-auto py-20">
      <div class="flex flex-wrap justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0 text-center">
          <g-image src="../../static/martha.jpg" alt="MARTHA BEATRIZ NAVARRO BARAJAS" />
        </div>
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <div class="text-4xl font-light leading-tight my-4">MARTHA BEATRIZ NAVARRO BARAJAS</div>
          <p>Born in Guadalajara in March 16th, in 1977 she arrived to Puerto Vallarta. She went to the University of Guadalajara CUC until she had the opportunity to go to Idaho to finish her General Business degree at Southern Idaho college. She also finished ESL courses (English as a Second Language) along with her degree.</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
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

