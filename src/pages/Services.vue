<template>
  <Layout>
    <div class="hero">
      <div class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20">
        <div class="font-bold w-full text-center sm:text-center">
          <div class="text-6xl text-white leading-tight">Our Services</div>
          <h1 class="text-2xl text-white font-light leading-tight">Custom Carpentry for Home Renovations and Remodeling</h1>
        </div>
      </div> <!-- end hero -->
    </div>
    <div class="container-inner mx-auto py-20">
      <div class="flex flex-wrap justify-between items-center ">
        <div class="w-full px-8 sm:py-0">
          <p>If you are looking into someone who can renovate your home, or looking for someone who does custom wood furniture that looks unique in your home, Centro carpintero is just the place for you, with skilled carpenters that have the talent to create high quality wood into art.</p>
<p>What makes us different from the other home renovators is that we use the best high quality wood we can find, and deliver what the client wants.</p>
        </div>
      </div>
      <div class="flex flex-wrap justify-between items-center pt-10 align-top">
        <div class="w-full lg:w-1/4 px-8 sm:py-0 text-center align-top">
          <g-image src="@/assets/img/sketch.svg" class="sm-icon"></g-image>
          <div>Design & Remodeling</div>
        </div>
        <div class="w-full lg:w-1/4 px-8 sm:py-0 text-center align-top">
          <g-image src="@/assets/img/kitchen.svg" class="sm-icon"></g-image>
          <div>Kitchen & Bathroom Renovations</div>
        </div>
        <div class="w-full lg:w-1/4 px-8 sm:py-0 text-center align-top">
          <g-image src="@/assets/img/cabinet.svg" class="sm-icon"></g-image>
          <div>Custom Wood Furniture</div>
        </div>
        <div class="w-full lg:w-1/4 px-8 sm:py-0 text-center align-top">
          <g-image src="@/assets/img/handsaw.svg" class="sm-icon"></g-image>
          <div>Fine Carpentry & Millwork</div>
        </div>
      </div>
    </div>
    <div class="bg-background-primary">
      <div class="container-inner mx-auto py-10">
        <div class="flex flex-wrap justify-between items-center ">
          <div class="w-full px-8 sm:py-0">
            <h2 class="text-center text-white text-6xl"><strong>What We Do</strong></h2>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-background-secondary">
      <div class="container-inner mx-auto py-20">
        <div class="flex flex-wrap justify-between items-center ">
          <div class="w-full px-8 sm:py-0">
            <h3 class="text-center text-4xl">Design And Remodeling</h3>
            <p>So your frustrated or tired of the way your home may look, maybe it needs to be a bit more modernised or you want the feeling of luxury in home, in Centro carpintero we have the professionals you need to add that spark in your home. </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container-inner mx-auto py-20">
        <div class="flex flex-wrap justify-between items-center ">
          <div class="w-full px-8 sm:py-0">
            <h3 class="text-center text-4xl">Kitchen To Bathroom Renovations</h3>
            <p>Your kitchen and bathroom is one of the most frequent places used in your home so why not give it some love and give it that upgrade it needs, in Centro carpintero we can upgrade any room you need from old to new.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-background-secondary">
      <div class="container-inner mx-auto py-20">
        <div class="flex flex-wrap justify-between items-center ">
          <div class="w-full px-8 sm:py-0">
            <h3 class="text-center text-4xl">Custom Wood Furniture</h3>
            <p>If you want to have something that is unique like a piece of furniture in your home that is high quality and custom made, we are able to deliver any type of furniture you need, like desks, bed frames, tables, chairs and there so much more things we can make at Centro carpintero.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-background-secondary">
      <div class="container-inner mx-auto py-20">
        <div class="flex flex-wrap justify-between items-center ">
          <div class="w-full px-8 sm:py-0">
            <h3 class="text-center text-4xl">Fine Carpentry & Millwork</h3>
            <p>If you want to have something that is unique like a piece of furniture in your home that is high quality and custom made, we are able to deliver any type of furniture you need, like desks, bed frames, tables, chairs and there so much more things we can make at Centro carpintero.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Carpentry Services | Remodeling and Renovations | Puerto Vallarta ',
    titleTemplate: '%s',
    meta: [
      { name: 'description', 
        key: 'description',
        content:  'Take a look at what we do, and what we specialize at.'
      },
      { property: 'og:title', content: "Carpentry Services | Remodeling and Renovations | Puerto Vallarta"},
      { property: 'og:site_name', content: 'Centro Carpintero'},
      {property: 'og:type', content: 'website'},    
      {name: 'robots', content: 'index,follow'} 
    ]
  },
}
</script>