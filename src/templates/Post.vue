<template>
  <Layout>
    <div class="container-inner single mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div>
      <div class="flex mb-8 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-green-300 hover:text-white">
          {{ tag.title }}
        </g-link>
      </div>
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="mb-8">
        <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    summary
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title ,
      titleTemplate: '%s',
      meta: [
        { name: 'description', 
          key: 'description',
          content:  this.$page.post.summary
        },
        { property: 'og:title', content: this.$page.post.title },
        { property: 'og:site_name', content: 'Centro Carpintero'},
        {property: 'og:type', content: 'article'},    
        {name: 'robots', content: 'index,follow'} 
      ]
    }

  }
}
</script>

<style src="../css/github-markdown.css" />

