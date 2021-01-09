<template>
  <Esp>
    <div class="hero">
      <div class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20">
        <div class="font-bold w-full text-center sm:text-center">
          <div class="text-6xl text-white leading-tight">Nuestro Blog</div>
        </div>
      </div> <!-- end hero -->
    </div>
    <div class="container-inner mx-auto py-16">
      <div class="flex flex-wrap">
          <div v-for="post in $page.posts.edges" :key="post.id" class="md:w-full w-full lg:w-1/3 px-8 post mb-12">
          <div class="shadow-md h-full pb-20 relative">
            <g-image alt="Cover image" v-if="post.node.cover_image" class="post-card__image" :src="post.node.cover_image" />
            <h3 class="text-2xl font-bold leading-none mb-4 mt-4 px-4"><g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link></h3>
            <div class="text-copy-secondary mb-4  px-4">
              <span>{{ post.node.date }}</span>
              <span> &middot; </span>
              <span>{{ post.node.timeToRead }} min read</span>
            </div>

            <div class="text-lg mb-4 px-4">
              {{ post.node.summary }}
            </div>

            <div class="mb-8 px-4 block absolute bottom-0 left">
              <g-link :to="post.node.path" class="bg-transparent inline-block hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">leer mas</g-link>
            </div>
          </div>
          </div> <!-- end post -->
        </div> <!-- end post -->

      <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="es/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
    </div>
  </Esp>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allEsPost (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
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
import PaginationPosts from '../../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Nuestro Blog',
    titleTemplate: '%s',
    meta: [
        { name: 'description', 
          key: 'description',
          content:  "Al iniciar la renovación de una casa, siempre es bueno saber cómo,el qué y el por qué para que la renovación sea un éxito.."
        },
        { property: 'og:title', content: "Blog"},
        { property: 'og:site_name', content: 'Centro Carpintero'},
        {property: 'og:type', content: 'website'},    
        {name: 'robots', content: 'index,follow'} 
    ]
    
  },
  components: {
    PaginationPosts
  }
}
</script>

