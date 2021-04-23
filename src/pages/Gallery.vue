<template>
  <Layout>
    <div class="hero">
      <div class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20">
        <div class="font-bold w-full text-center sm:text-center">
          <div class="text-6xl text-white leading-tight">Centro Carpintero Gallery</div>
          <div class="text-2xl text-white font-light leading-tight">Beautiful Results of Centro Carpintero Fine Carpentry</div>
        </div>
      </div> <!-- end hero -->
    </div>
    <div class="text-4xl pt-20 text-black font-light leading-tight" style="text-align:center">Kitchens</div>
    <div class="container-inner mx-auto">
      <div class="flex flex-wrap justify-between items-center pb-6 pt-4">
        <div v-for="post in $page.posts.edges" v-if="post.node.category == 'kitchen'" :key="post.id" class="w-full lg:w-1/4 md:w-1/2 px-8 py-8 sm:py-0 text-center">
          <g-image :alt="post.node.eng" v-if="post.node.cover_image" class="post-card__image" :src="post.node.cover_image" />
          <div class="text-green font-bold leading-tight mt-4 mb-8">{{ post.node.eng }}</div>
        </div>
      </div>
      <h2 class="text-4xl text-Black font-light leading-tight" style="text-align:center">Bedrooms and Bathrooms</h2>
      <div class="flex flex-wrap justify-between items-center pb-6 pt-4">
        <div v-for="post in $page.posts.edges" v-if="post.node.category == 'bed-bath'" :key="post.id" class="w-full lg:w-1/4 md:w-1/2 px-8 py-8 sm:py-0 text-center">
          <g-image :alt="post.node.eng" v-if="post.node.cover_image" class="post-card__image" :src="post.node.cover_image" />
          <div class="text-green font-bold leading-tight mt-4 mb-8">{{ post.node.eng }}</div>
        </div>
      </div>
      <h2 class="text-4xl text-Black font-light leading-tight" style="text-align:center">Custom Wood</h2>
      <div class="flex flex-wrap justify-between items-center pb-6 pt-4">
        <div v-for="post in $page.posts.edges" v-if="post.node.category == 'custom'" :key="post.id" class="w-full lg:w-1/4 md:w-1/2 px-8 py-8 sm:py-0 text-center">
          <g-image :alt="post.node.eng" v-if="post.node.cover_image" class="post-card__image" :src="post.node.cover_image" />
          <div class="text-green font-bold leading-tight mt-4 mb-8">{{ post.node.eng }}</div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query Gallery  {
  posts: allGallery (sortBy: "path", order: ASC )  {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        eng
        esp
        category
        cover_image (width: 600, height: 600, blur: 10)
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Gallery | Home Renovations Custom Carpentry | Puerto Vallarta',
    titleTemplate: '%s',
    meta: [
        { name: 'description', 
          key: 'description',
          content:  "Come take a look at are gallery of recent home renovations and some costume wood working projects."
        },
        { property: 'og:title', content: "Gallery | Home Renovations Custom Carpentry | Puerto Vallarta"},
        { property: 'og:site_name', content: 'Centro Carpintero'},
        {property: 'og:type', content: 'website'},    
        {name: 'robots', content: 'index,follow'}
      ]
  }
}
</script>

