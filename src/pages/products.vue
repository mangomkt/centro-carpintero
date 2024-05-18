<template>
  <Layout>
    <div class="hero">
      <div
        class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20"
      >
        <div class="font-bold w-full text-center sm:text-center">
          <h1
            class="text-4xl md:text-5xl font-serif font-light text-white leading-tight"
          >
            Discover Our Exceptional Furniture and Decor
          </h1>
        </div>
      </div>
      <!-- end hero -->
    </div>
    <div class=" bg-background-secondary">
        <div class="container mx-auto pt-20 pb-20">
            <p class="mb-4">Are you searching for unique, high-quality furniture and decor to enhance your home? Look no further! Our collection features a diverse range of pieces that blend functionality with artistic design, including handcrafted items and carefully selected manufactured products.</p>
            <p class="mb-4">If you're interested in exploring our beautiful collection or have any questions, please don't hesitate to contact Martha. She is dedicated to providing exceptional customer service and can assist you with any inquiries, offer detailed product information, and help you find the perfect pieces for your home.</p>
            <p class="mb-4"><strong>Contact Martha Today!</strong><br/>
            Phone: 322-121-6778<br/>
            Or use our convenient <a href="/contact">Contact Form</a> on the website.</p>
        </div>
    </div>
    <div style="background-color:var(--bg-background-primary)">
        <div class="container mx-auto pt-20 pb-20">
            <h3 class="text-center text-3xl font-bold mb-4 text-white">Transform your home with our exceptional furniture and decor.</h3>
            <p class="text-center text-white"> We look forward to helping you create a space you’ll love!</p>
        </div>
    </div>
    <div
      class="text-4xl pt-20 text-black font-serif font-light leading-tight"
      style="text-align:center"
    >
      Furniture
    </div>
    <div class="container-inner mx-auto">
      <div class="flex flex-wrap items-start pb-6 pt-4">
        <div
          v-for="post in $page.posts.edges"
          v-if="post.node.category == 'Furniture'"
          :key="post.id"
          class="w-1/2 lg:w-1/4 md:w-1/2 px-2 md:px-8 md:py-8 sm:py-0 text-center"
        >
          <g-image
            :alt="post.node.eng"
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
            {{ post.node.eng }}
          </div>
          <div class="text-center">
            <a href="/gallery" class="inline-block bg-primary hover:bg-tertiary md:ml-4 text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3">Request Product</a>
          </div>
        </div>
      </div>
      <h2
        class="text-4xl text-black font-serif font-light leading-tight"
        style="text-align:center"
      >
        Decor
      </h2>
      <div class="flex flex-wrap items-start pb-6 pt-4">
        <div
          v-for="post in $page.posts.edges"
          v-if="post.node.category == 'decor'"
          :key="post.id"
          class="w-1/2 lg:w-1/4 md:w-1/2 px-2 md:px-8 md:py-8 sm:py-0 text-center"
        >
          <g-image
            :alt="post.node.eng"
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
          <div class="text-green font-regular leading-tight mt-2 mb-8">
            <strong class="text-xl">${{ post.node.price }}</strong> <br/>
            {{ post.node.eng }}            
          </div>
        </div>
      </div>
      
    </div>
    <!-- Image Modal -->
    <div id="imageModal" class="modal product-modal" v-if="modalVisible">
      <span class="close" @click="closeModal">&times;</span>
      <img :src="modalImage" alt="Modal Image" class="modal-content" />
      <button class="modal-nav prev" @click="prevImage" v-if="currentIndex > 0">
        Prev
      </button>
      <button
        class="modal-nav next"
        @click="nextImage"
        v-if="currentIndex < $page.posts.edges.length - 1"
      >
        Next
      </button>
    </div>
  </Layout>
</template>
<page-query>
query Products  {
  posts: allProducts (sortBy: "path", order: DESC )  {
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
        price
        cover_image (width: 800, blur: 10)
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
    title: "Products | Home Renovations Custom Carpentry | Puerto Vallarta",
    titleTemplate: "%s",
    meta: [
      {
        name: "description",
        key: "description",
        content:
          "Come take a look at are gallery of recent home renovations and some costume wood working projects.",
      },
      {
        property: "og:title",
        content:
          "Products | Home Renovations Custom Carpentry | Puerto Vallarta",
      },
      { property: "og:site_name", content: "Centro Carpintero" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index,follow" },
    ],
  },
};
</script>
<style>
.modal.product-modal img {
    max-width: 800px;
}
</style>