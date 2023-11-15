<template>
  <Esp>
    <div class="hero">
      <div class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20">
        <div class="font-bold w-full text-center sm:text-center">
          <div class="text-4xl md:text-5xl font-serif font-light text-white leading-tight">Centro Carpintero Gallery</div>
          <div class="text-2xl text-white font-light leading-tight">Bellos Resultados de la Carpintería Fina Centro Carpintero</div>
        </div>
      </div> <!-- end hero -->
    </div>
    <div class="text-4xl pt-20 pb-4 text-black font-serif font-light leading-tight" style="text-align:center">Cocinas</div>
    <div class="container-inner mx-auto">
      <div class="flex flex-wrap justify-between items-center pb-6 pt-4">
        <div v-for="post in $page.posts.edges" v-if="post.node.category == 'kitchen'" :key="post.id" class="w-full lg:w-1/4 md:w-1/2 px-8 py-8 sm:py-0 text-center">
          <g-image :alt="post.node.eng" v-if="post.node.cover_image" class="post-card__image" :src="post.node.cover_image" @click="openModal(post.node.cover_image.src)"/>
          <div class="text-green font-light leading-tight mt-4 mb-8">{{ post.node.esp }}</div>
        </div>
      </div>
      <h2 class="text-4xl text-black font-serif font-light leading-tight" style="text-align:center">Dormitorios y Baños</h2>
      <div class="flex flex-wrap justify-between items-center pb-6 pt-4">
        <div v-for="post in $page.posts.edges" v-if="post.node.category == 'bed-bath'" :key="post.id" class="w-full lg:w-1/4 md:w-1/2 px-8 py-8 sm:py-0 text-center">
          <g-image :alt="post.node.eng" v-if="post.node.cover_image" class="post-card__image" :src="post.node.cover_image" @click="openModal(post.node.cover_image.src)"/>
          <div class="text-green font-light leading-tight mt-4 mb-8">{{ post.node.esp }}</div>
        </div>
      </div>
      <h2 class="text-4xl text-black font-serif font-light leading-tight" style="text-align:center">Madera personalizada</h2>
      <div class="flex flex-wrap justify-between items-center pb-6 pt-4">
        <div v-for="post in $page.posts.edges" v-if="post.node.category == 'custom'" :key="post.id" class="w-full lg:w-1/4 md:w-1/2 px-8 py-8 sm:py-0 text-center">
          <g-image :alt="post.node.eng" v-if="post.node.cover_image" class="post-card__image" :src="post.node.cover_image" @click="openModal(post.node.cover_image.src)"/>
          <div class="text-green font-light leading-tight mt-4 mb-8">{{ post.node.esp }}</div>
        </div>
      </div>
    </div>
    <!-- Image Modal -->
    <div id="imageModal" class="modal">
      <span class="close" @click="closeModal">&times;</span>
        <img :src="modalImage" alt="Modal Image" class="modal-content">
    </div>
  </Esp>
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
  data() {
    return {
      modalImage: '',
    }
  },
  methods: {
    openModal(imageUrl) {
      this.modalImage = imageUrl;
      document.getElementById('imageModal').style.display = 'flex';
      console.log(imageUrl)
    },
    closeModal() {
      document.getElementById('imageModal').style.display = 'none';
    },
    handleModalClick(event) {
      // Close the modal if clicked outside the image
      if (event.target.id === 'imageModal') {
        this.closeModal();
      }
    },
  },
  mounted() {
    // Attach the click event listener to the modal overlay
    document.getElementById('imageModal').addEventListener('click', this.handleModalClick);
  },
  beforeDestroy() {
    // Remove the click event listener when the component is destroyed
    document.getElementById('imageModal').removeEventListener('click', this.handleModalClick);
  },
  metaInfo: {
    title: 'Carpintería | Carpintería a medida | Puerto Vallarta ',
    titleTemplate: '%s',
    meta: [
        { name: 'description', 
          key: 'description',
          content:  "Ven a echar un vistazo a la galería de renovaciones recientes en el hogar y algunos proyectos de trabajo de madera."
        },
        { property: 'og:title', content: "Carpintería | Carpintería a medida | Puerto Vallarta "},
        { property: 'og:site_name', content: 'Centro Carpintero'},
        {property: 'og:type', content: 'website'},    
        {name: 'robots', content: 'index,follow'}
      ]
  }
}
</script>

