<template>
  <Layout>
    <div class="hero">
      <div class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20">
        <div class="font-bold w-full text-center sm:text-center">
          <div class="text-6xl text-white leading-tight">Centro Carpintero</div>
          <h1 class="text-2xl text-white font-light leading-tight">Home Renovation Gallery</h1>
        </div>
      </div> <!-- end hero -->
    </div>
    <div class="container-inner mx-auto py-20">
      <div class="flex flex-wrap justify-between items-center py-6">
        <div class="w-full sm:w-1/4 md:1/2 px-8 py-8 sm:py-0 text-center">
          <g-image src="../../static/team1.jpg" alt="browser" />
        </div>
        <div class="w-full sm:w-1/4 md:1/2 px-8 py-8 sm:py-0 text-center">
          <g-image src="../../static/team2.jpg" alt="browser" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Our Gallery | Centro Carpintero'
  }
}
</script>

