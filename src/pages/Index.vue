<template>
  <Layout>
    <div class="bg-white">
      <div class="container-inner mx-auto flex py-24 md:items-center  md:flex-row-reverse flex-wrap">
        <div class="w-full md:w-5/12 font-bold w-full text-center  align-middle">
          <g-image src="@/assets/img/centro-hero.jpg" alt="Centro Carpintero Renovations"/>
        </div>
        <div class="w-full mt-4 md:mt-0 md:w-7/12 font-bold w-full text-center md:text-left lg:pr-10 align-middle">
          <h1 class="text-4xl md:text-5xl font-serif font-light text-primary leading-tight">Home Renovations & Remodeling in Puerto Vallarta</h1>
          <p class="text-2xl mt-4 text-tertiary font-light leading-tight">Focused on functional furnishing & elegant design in high-quality wood.</p>
          <div class="flex flex-wrap mt-10">
              <div class="w-full md:w-1/2 text-center md:text-left my-4 px-0 border-box">
                  <g-link to="/contact" class="inline-block bg-accenta hover:bg-accentb text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3">Contact Martha</g-link>
              </div>
              <div class="w-full md:w-1/2 text-center md:text-left my-4 px-0 border-box">
                  <g-link to="/gallery" class="inline-block bg-primary hover:bg-tertiary md:ml-4 text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3">View Our Gallery</g-link>
              </div>
          </div>
        </div>
        
      </div> <!-- end hero -->
    </div>
    
    <div class="container-inner py-20 mx-auto px-2">
      <div class="font-bold w-full mb-10 text-center">
        <h2 class="text-4xl md:text-5xl font-serif font-light leading-tight">Why Choose Centro Carpintero?</h2>
      </div>
      <div class="container-inner mx-auto flex pb-24 md:items-center flex-wrap">
        <div class="w-full md:w-5/12 font-bold w-full text-left  align-middle md:pr-8">
          <g-image src="@/assets/img/centro-custom-cabinetry.jpg" alt="Centro Carpintero Renovations"/>
        </div>
        <div class="w-full md:w-7/12 w-full text-left  align-middle">
          <p class="text-lg sm:text-xl">We have the expertise and experience to take care of home renovation or remodeling project. From initial planning, finding that balance between budget and wish list. Centro Carpintero is there to help you through each step.</p>
          <p class="text-lg sm:text-xl">If you are looking to think outside the box to better use of your residence’s space or looking to get those dream home renovations completed, then you will love our integrative wood-crafted solutions!</p>
          <p class="text-lg sm:text-xl">Infuse your home or business with our extensive experience in classy wood designs that stand the test of time and add value and personality to your estate. With a passion for carpentry and commitment to the quality of our work, we will partner with you to propose combinations of the latest trends in functionality, style, and beauty for all types of fine furniture and woodworking.</p>
        </div>
      </div>
    </div>
    <div class="bg-background-secondary flex flex-wrap">
        <div class="w-full md:w-full lg:w-1/2 font-bold w-full text-left align-middle side-bg">
        </div>
        <div class="w-full md:w-full py-20 lg:w-1/2 font-bold w-full text-left align-middle px-4 md:px-10 lg:px-20">
            <div class="bg-background-white p-8 rounded">
              <div class="text-3xl text-pink text-center leading-tight font-light mb-6">CONTACT MARTHA FOR A FREE ESTIMATE</div>
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
      
    </div>
    <div>
      
      <div class="container-inner pt-20 pb-20 mx-auto px-2">
        <div class="font-bold w-full text-center sm:text-center mb-10">
          <div class="text-4xl md:text-5xl font-serif font-light">Our Services</div>
          <h2 class="text-2xl leading-tight font-light">What we offer to help with your next home renovations or remodel in Puerto Vallarta</h2>
        </div>
        <div class="flex flex-wrap justify-between items-center py-6 ">
          <div class="sw:w-full md:w-full lg:w-1/3 sm:text-center px-8 mx-auto mb-8 md:mb-0">
            <g-image src="../../static/home1.jpg" alt="browser" class="mx-auto"/>
            <div class="text-2xl leading-tight mt-2">Custom Kitchens</div>
            <div class="leading-tight">Minimalist | Sophisticated | Rustic</div>
          </div>
          <div class="sw:w-full md:w-full lg:w-1/3 sm:text-center px-8 mx-auto mb-8 md:mb-0">
            <g-image src="../../static/home2.jpg" alt="mobile" class="mx-auto" />
            <div class="text-2xl leading-tight mt-2">Bedrooms & Bathrooms</div>
            <div class="leading-tight">Cabinets | Remodeling | Lighting</div>
          </div>
          <div class="sw:w-full md:w-full lg:w-1/3 sm:text-center px-8 mx-auto mb-0 md:mb-0">
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
    <div class="warehouse bg-primary">
      <div class="container-inner py-20 lg:py-40 mx-auto px-2">
        <div class="text-4xl font-serif text-white font-hairline italic">All in all, we have done four large projects in 2019 and 2020 with Centro Carpentry and each time, I am more impressed with the skills of their craftsmen, the integrity of the owners and their focus on customer satisfaction.</div>
        <div class="text-2xl mt-4 font-light text-white">- Happy Customer</div>
      </div>
    </div>
    <div class="container-inner py-20 mx-auto px-2">
      <div class="font-bold w-full text-center sm:text-center mb-10">
        <h2 class="text-4xl font-serif font-light">Home Renovations and Remodeling</h2>
        <h3 class="text-2xl font-light leading-tight">Custom fine carpentry and woodworking</h3>
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
          <div class="text-4xl font-serif font-light leading-tight">Our Blog</div>
        </div>
        <div class="flex flex-wrap">
          <div v-for="post in $page.posts.edges" :key="post.id" class="md:w-full w-full lg:w-1/3 px-8 post mb-12">
            <div class="shadow-md h-full pb-20 relative">
              <g-image alt="Cover image" v-if="post.node.cover_image" class="post-card__image" :src="post.node.cover_image" />
              <h3 class="text-2xl font-bold leading-none mb-4 mt-4 px-4"><g-link :to="post.node.path" class="text-copy-primary font-medium leading-snug">{{ post.node.title }}</g-link></h3>
              <div class="text-copy-secondary mb-4  px-4">
                <span>{{ post.node.date }}</span>
                <span> &middot; </span>
                <span>{{ post.node.timeToRead }} min read</span>
              </div>

              <div class="text-lg mb-4 px-4">
                {{ post.node.summary }}
              </div>

              <div class="mb-8 px-4 block absolute bottom-0 left">
                <g-link :to="post.node.path" class="bg-transparent inline-block hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">Read More</g-link>
              </div>
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
          <div class="text-4xl  font-serif font-light leading-tight md:text-left sm:text-center">Contact Martha</div>
          <div class="text-1xl leading-tight mt-4">
            <strong>Centro Cerpintero PV</strong><br>
            Carretera a las Palmas #2523<br>
            Puerto Vallarta, Jalisco 48280<br>
             
            Cel. <a href="tel:322-121-6778">322-121-6778</a><br>
            <a href="mailto:centrocarpinteropv@gmail.com">centrocarpinteropv@gmail.com</a>
          </div>
        </div>
        <div class="sw:w-full md:w-full lg:w-1/2 w-full px-8 mx-auto">
          <div class="text-4xl font-serif font-light leading-tight">Get a Quote</div>
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
        cover_image (width: 760, height: 399, blur: 10)
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Bucerias Project | Custom Woodworking | Puerto Vallarta ',
    titleTemplate: '%s',
    meta: [
      { name: 'description', 
        key: 'description',
        content:  'Custom Woodworking project made from solid amapa wood in Bucerias, Nayarit, Mexico.'
      },
      { property: 'og:title', content: "Bucerias Project | Custom Woodworking | Puerto Vallarta"},
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

