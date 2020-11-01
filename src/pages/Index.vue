<template>
  <Layout>
    <div class="hero">
      <div class="container-inner mx-auto flex flex-wrap sm:flex-row justify-between py-20">
        <div class="w-full md:w-full lg:w-1/2 font-bold w-full text-left sm:text-center lg:text-left lg:pr-4">
          <div class="text-6xl text-white leading-tight">Centro Carpintero</div>
          <h1 class="mt-2 text-3xl text-white font-light leading-tight">Home Renovations and Remodeling in Puerto Vallarta</h1>
          <p class="text-2xl mt-4 text-white font-light leading-tight">Centro Carpintero is an artistic carpentry business focused on functional furnishing and elegant design in high-quality wood.</p>
        </div>
        <div class="w-full md:w-full lg:w-1/2 font-bold w-full text-left">
          <div class="bg-background-white p-8 rounded">
            <div class="text-3xl text-pink text-center leading-tight font-light mb-6">CONTACT US FOR A FREE ESTIMATE</div>
            <form name="hpestimate" method="post" v-on:submit.prevent="handleSubmit" action="/thankyou/" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>
                        Don’t fill this out: <input name="bot-field" />
                      </label>
                    </p>
                    <div class="flex flex-wrap mb-6 -mx-4">
                        <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                            <label class="block mb-2 text-copy-primary" for="name">
                                Name
                            </label>

                            <input type="text" name="name" id="name" placeholder="Jon Snow" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-2" required v-model="formData.name">
                        </div>

                        <div class="w-full px-4 md:w-1/2">
                            <label class="block text-copy-primary mb-2" for="email">
                                Email Address
                            </label>

                            <input type="email" name="email" id="email" placeholder="email@example.com"  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-2" required v-model="formData.email">
                        </div>
                    </div>

                    <div class="w-full mb-12">
                        <label class="block text-copy-primary mb-2" for="message">
                            Message
                        </label>

                        <textarea id="message" rows="3" name="message" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-2 py-2" placeholder="Enter your message here." required v-model="formData.message"></textarea>
                    </div>

                    <div class="flex justify-end w-full">
                        <input type="submit" value="Submit" class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3">
                    </div>
                </form>
          </div>
        </div>
      </div> <!-- end hero -->
    </div>
    <div class="container-inner py-20 mx-auto px-2">
      <div class="font-bold w-full text-center sm:text-center mb-10">
        <h2 class="text-4xl leading-tight">Why Choose Centro Carpintero?</h2>
      </div>
      <p class="text-lg sm:text-xl">We have the expertise and experience to take care of home renovation or remodeling project. From initial planning, finding that balance between budget and wish list. Centro Carpintero is there to help you through each step.</p>
      <p class="text-lg sm:text-xl">If you are looking to think outside the box to better use of your residence’s space or looking to get those dream home renovations completed, then you will love our integrative wood-crafted solutions!</p>
      <p class="text-lg sm:text-xl">Infuse your home or business with our extensive experience in classy wood designs that stand the test of time and add value and personality to your estate. With a passion for carpentry and commitment to the quality of our work, we will partner with you to propose combinations of the latest trends in functionality, style, and beauty for all types of fine furniture and woodworking.</p>
    </div>
    <div class="bg-background-secondary">
      
      <div class="container-inner pt-20 pb-20 mx-auto px-2">
        <div class="font-bold w-full text-center sm:text-center mb-10">
          <div class="text-4xl leading-tight">Our Services</div>
          <h2 class="text-2xl leading-tight">What we offer to help with your next home renovations or remodel in Puerto Vallarta</h2>
        </div>
        <div class="flex flex-wrap justify-between items-center py-6 ">
          <div class="sw:w-full md:w-full lg:w-1/3 sm:text-center px-8 mx-auto">
            <g-image src="../../static/home1.jpg" alt="browser" class="mx-auto"/>
            <div class="text-2xl leading-tight mt-2">Custom Kitchens</div>
            <div class="leading-tight">Minimalist | Sophisticated | Rustic</div>
          </div>
          <div class="sw:w-full md:w-full lg:w-1/3 sm:text-center px-8 mx-auto">
            <g-image src="../../static/home2.jpg" alt="mobile" class="mx-auto" />
            <div class="text-2xl leading-tight mt-2">Bedrooms & Bathrooms</div>
            <div class="leading-tight">Cabinets | Remodeling | Lighting</div>
          </div>
          <div class="sw:w-full md:w-full lg:w-1/3 sm:text-center px-8 mx-auto">
            <g-image src="../../static/home3.jpg" alt="mobile" class="mx-auto" />
            <div class="text-2xl leading-tight mt-2">Custom Carpentry</div>
            <div class="leading-tight">Closets | Frames | Decoration</div>
          </div>
        </div>
        <div class="text-center mt-10">
          <g-link to="/about" class="inline-block bg-green-700 hover:bg-accentb text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3">Meet The Team</g-link>
        </div> 
      </div>
    </div>
    <div class="bg-background-primary">
      <div class="container-inner pt-20 pb-20 mx-auto px-2">
        <div class="text-4xl text-white font-hairline italic">All in all, we have done four large projects in 2019 and 2020 with Centro Carpentry and each time, I am more impressed with the skills of their craftsmen, the integrity of the owners and their focus on customer satisfaction.</div>
        <div class="text-2xl text-white">- Happy Customer</div>
      </div>
    </div>
    <div class="container-inner py-20 mx-auto px-2">
      <div class="font-bold w-full text-center sm:text-center mb-10">
        <h2 class="text-4xl leading-tight">Home Renovations and Remodeling</h2>
        <h3 class="text-2xl leading-tight">Custom fine carpentry and woodworking</h3>
      </div>
      <div class="flex flex-wrap justify-between items-center py-6">
        <div class="w-full lg:w-1/3 md:w-1/2 px-8 py-8 sm:py-0 text-center">
          <g-image src="../../static/gallery/new.jpg" alt="Custom Wooden Side Table" />
          <div class="text-green font-bold leading-tight mt-4">Custom Wooden Side Table</div>
        </div>
        <div class="w-full lg:w-1/3 md:w-1/2 px-8 py-8 sm:py-0 text-center">
          <g-image src="../../static/gallery/new2.jpg" alt="Fine Carpentry Wooden Bench" />
          <div class="text-green font-bold leading-tight mt-4">Fine Carpentry Wooden Bench</div>
        </div>
        <div class="w-full lg:w-1/3 md:w-1/2 px-8 py-8 sm:py-0 text-center">
          <g-image src="../../static/gallery/new6.jpg" alt="browser" />
          <div class="text-green font-bold leading-tight mt-4">Custom Wooden Headboard</div>
        </div>
      </div>
      <div class="text-center mt-10">
        <g-link to="/gallery" class="inline-block bg-green-700 hover:bg-accentb text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3">Visit Our Gallery</g-link>
      </div>
    </div>
    <div class="bg-background-secondary">
      <div class="container-inner mx-auto py-20">
        <div class="font-bold w-full text-center sm:text-center mb-10">
          <div class="text-4xl leading-tight">Our Blog</div>
        </div>
        <div class="flex flex-wrap">
          <div v-for="post in $page.posts.edges" :key="post.id" class="md:w-full w-full lg:w-1/3 px-8 post border-gray-400 border-b mb-12">
            <h3 class="text-2xl font-bold leading-none mb-4"><g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link></h3>
            <div class="text-copy-secondary mb-4">
              <span>{{ post.node.date }}</span>
              <span> &middot; </span>
              <span>{{ post.node.timeToRead }} min read</span>
            </div>

            <div class="text-lg mb-4">
              {{ post.node.summary }}
            </div>

            <div class="mb-8">
              <g-link :to="post.node.path" class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">Read More</g-link>
            </div>
          </div> <!-- end post -->
        </div>
        <div class="text-center mt-10">
          <g-link to="/blog" class="inline-block bg-green-700 hover:bg-accentb text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3">Visit Our Blog</g-link>
        </div>
      </div>
    </div>
    <div class="container-inner py-20 mx-auto px-2">
      <div class="flex flex-wrap py-6">
        <div class="sw:w-full md:w-full lg:w-1/2 w-full px-8 mx-auto pb-8">
          <div class="text-4xl leading-tight md:text-left sm:text-center">Contact Us</div>
          <div class="text-1xl leading-tight mt-4">
            <strong>Centro Cerpintero PV</strong><br>
            Carretera a las Palmas #2523<br>
            Puerto Vallarta, Jalisco 48280<br>
            <a href="tel:+52-322-190-1508">[+52] 322-190-1508</a><br>
            Cel. <a href="tel:322-121-6778">322-121-6778</a><br>
            <a href="mailto:centrocarpinteropv@gmail.com">centrocarpinteropv@gmail.com</a>
          </div>
        </div>
        <div class="sw:w-full md:w-full lg:w-1/2 w-full px-8 mx-auto">
          <div class="text-4xl leading-tight">Send Us A Message</div>
          <div class="contact-me pt-4">
            <form name="hpcontact" method="post" v-on:submit.prevent="handleSubmit" action="/thankyou/" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>
                        Don’t fill this out: <input name="bot-field" />
                      </label>
                    </p>
                    <div class="flex flex-wrap mb-6 -mx-4">
                        <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                            <label class="block mb-2 text-copy-primary" for="name">
                                Name
                            </label>

                            <input type="text" name="name" id="name" placeholder="Jon Snow" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required v-model="formData.name">
                        </div>

                        <div class="w-full px-4 md:w-1/2">
                            <label class="block text-copy-primary mb-2" for="email">
                                Email Address
                            </label>

                            <input type="email" name="email" id="email" placeholder="email@example.com"  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required v-model="formData.email">
                        </div>
                    </div>

                    <div class="w-full mb-12">
                        <label class="block text-copy-primary mb-2" for="message">
                            Message
                        </label>

                        <textarea id="message" rows="5" name="message" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4" placeholder="Enter your message here." required v-model="formData.message"></textarea>
                    </div>

                    <div class="flex justify-end w-full">
                        <input type="submit" value="Submit" class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3">
                    </div>
                </form>
           </div> <!-- end contact-me -->
         </div>
      </div>
    </div>
    
  </Layout>
</template>
<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
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
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Remodeling and Renovations | Centro Carpintero | Puerto Vallarta ',
    meta: [
      { name: 'description', content:  'Looking for a contractor to help you with your next remodeling or renovation project in Puerto Vallarta? Martha and her team of expert carpenters are ready to make your dreams come true.'},
      { property: 'og:title', content: "Remodeling and Renovations | Centro Carpintero | Puerto Vallarta"},
      { property: 'og:site_name', content: 'Centro Carpintero'},
      {property: 'og:type', content: 'website'},    
      {name: 'robots', content: 'index,follow'} 
    ]
  },
  data() {
    return {
      formData: {},
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/thankyou'))
      .catch(error => alert(error))
    }
  }
}
</script>

