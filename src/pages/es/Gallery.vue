<template>
  <Esp>
    <div class="hero">
      <div
        class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20"
      >
        <div class="font-bold w-full text-center sm:text-center">
          <div
            class="text-4xl md:text-5xl font-serif font-light text-white leading-tight"
          >
            Centro Carpintero Gallery
          </div>
          <div class="text-2xl text-white font-light leading-tight">
            Bellos Resultados de la Carpintería Fina Centro Carpintero
          </div>
        </div>
      </div>
      <!-- end hero -->
    </div>
    <div
      class="text-4xl pt-20 pb-4 text-black font-serif font-light leading-tight"
      style="text-align:center"
    >
      Cocinas
    </div>
    <div class="container-inner mx-auto">
      <div class="flex flex-wrap items-start pb-6 pt-4">
        <div
          v-for="post in $page.posts.edges"
          v-if="post.node.category == 'kitchen'"
          :key="post.id"
          class="w-1/2 lg:w-1/4 md:w-1/2 px-2 md:px-8 md:py-8 sm:py-0 text-center"
        >
          <g-image
            :alt="post.node.esp"
            v-if="post.node.cover_image"
            class="post-card__image"
            :src="post.node.cover_image"
            @click="
              openModal(
                post.node.cover_image.src,
                $page.posts.edges.indexOf(post)
              )
            "
          />
          <div class="text-green font-regular leading-tight mt-4 mb-8">
            {{ post.node.esp }}
          </div>
        </div>
      </div>
      <h2
        class="text-4xl text-black font-serif font-light leading-tight"
        style="text-align:center"
      >
        Dormitorios y Baños
      </h2>
      <div class="flex flex-wrap items-start pb-6 pt-4">
        <div
          v-for="post in $page.posts.edges"
          v-if="post.node.category == 'bed-bath'"
          :key="post.id"
          class=" w-1/2 lg:w-1/4 md:w-1/2 px-2 md:px-8 md:py-8 sm:py-0 text-center"
        >
          <g-image
            :alt="post.node.esp"
            v-if="post.node.cover_image"
            class="post-card__image"
            :src="post.node.cover_image"
            @click="
              openModal(
                post.node.cover_image.src,
                $page.posts.edges.indexOf(post)
              )
            "
          />
          <div class="text-green font-regular leading-tight mt-4 mb-8">
            {{ post.node.esp }}
          </div>
        </div>
      </div>
      <h2
        class="text-4xl text-black font-serif font-light leading-tight"
        style="text-align:center"
      >
        Madera personalizada
      </h2>
      <div class="flex flex-wrap items-start pb-6 pt-4">
        <div
          v-for="post in $page.posts.edges"
          v-if="post.node.category == 'custom'"
          :key="post.id"
          class="w-1/2 lg:w-1/4 md:w-1/2 px-2 md:px-8 md:py-8 sm:py-0 text-center"
        >
          <g-image
            :alt="post.node.esp"
            v-if="post.node.cover_image"
            class="post-card__image"
            :src="post.node.cover_image"
            @click="
              openModal(
                post.node.cover_image.src,
                $page.posts.edges.indexOf(post)
              )
            "
          />
          <div class="text-green font-regular leading-tight mt-4 mb-8">
            {{ post.node.esp }}
          </div>
        </div>
      </div>
    </div>
    <!-- Image Modal -->
    <div id="imageModal" class="modal" v-if="modalVisible">
      <span class="close" @click="closeModal">&times;</span>
      <img :src="modalImage" alt="Modal Image" class="modal-content" />
      <button
        class="modal-nav prev esp"
        @click="prevImage"
        v-if="currentIndex > 0"
      >
        Ant.
      </button>
      <button
        class="modal-nav next"
        @click="nextImage"
        v-if="currentIndex < $page.posts.edges.length - 1"
      >
        Sig.
      </button>
    </div>
  </Esp>
</template>
<page-query>
query Gallery  {
  posts: allGallery (sortBy: "path", order: DESC )  {
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
      modalVisible: false,
      modalImage: "",
      currentIndex: 0,
    };
  },
  methods: {
    openModal(src, index) {
      this.modalVisible = true;
      this.modalImage = src;
      this.currentIndex = index;
      console.log("test");
    },
    closeModal() {
      this.modalVisible = false;
    },
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.modalImage = this.$page.posts.edges[
          this.currentIndex
        ].node.cover_image.src;
      }
    },
    nextImage() {
      if (this.currentIndex < this.$page.posts.edges.length - 1) {
        this.currentIndex++;
        this.modalImage = this.$page.posts.edges[
          this.currentIndex
        ].node.cover_image.src;
      }
    },
  },
  metaInfo: {
    title: "Carpintería | Carpintería a medida | Puerto Vallarta ",
    titleTemplate: "%s",
    meta: [
      {
        name: "description",
        key: "description",
        content:
          "Ven a echar un vistazo a la galería de renovaciones recientes en el hogar y algunos proyectos de trabajo de madera.",
      },
      {
        property: "og:title",
        content: "Carpintería | Carpintería a medida | Puerto Vallarta ",
      },
      { property: "og:site_name", content: "Centro Carpintero" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index,follow" },
    ],
  },
};
</script>
