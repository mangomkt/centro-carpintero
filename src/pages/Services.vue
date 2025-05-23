<template>
    <Layout>
      <div class="hero">
        <div class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20">
          <div class="font-bold w-full text-center sm:text-center">
            <h1 class="text-4xl md:text-5xl font-serif font-light text-white leading-tight mb-4">Kitchen & Bathroom Renovations in Puerto Vallarta</h1>
            <div class="text-2xl text-white font-light leading-tight">Transform your home with expert craftsmanship. At Centro Carpintero PV, we specialize in high-quality kitchen and bathroom renovations, as well as custom fine furniture and cabinetry. Whether you're remodeling or designing a unique piece, our skilled team is here to bring your vision to life.</div>
            <div class="mt-4"><a href="tel:322-121-6778" class="bg-background-accenta text-white hover:text-white hover:bg-background-accentb rounded-full py-3 px-6 inline-block border-accenta hover:border-accentb border-2">Call Martha: 322-121-6778</a></div>
        </div>
        </div> <!-- end hero -->
      </div>
      <div class="content-center overflow-hidden">
      <div
        class="container-inner  mx-auto flex items-center flex-wrap py-20 md:flex-row-reverse px-4 md:px-10 lg:px-10"
      >
        <div class=" mx-auto px-2 w-full md:w-7/12  md:px-10">
          <div class="text-left mt-10">
            <h2
              class="text-3xl md:text-4xl font-serif font-light leading-tight mb-4"
            >
            Craftsmanship & Quality You Can Trust
            </h2>
            <p class="mb-4">
                With years of experience in custom carpentry and home remodeling, Centro Carpintero PV delivers precision, durability, and beauty in every project. From elegant kitchen cabinets to full bathroom renovations, we take pride in using the finest materials and expert techniques to ensure lasting results.
            </p>
            <a
              href="/gallery"
              class="inline-block bg-green-700 hover:bg-accentb text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3 mb-4"
              >View the gallery</a
            >
          </div>
        </div>
        <div class="w-full md:w-5/12 md:px-10">
            <g-image
            src="@/assets/img/centro-custom-cabinetry.jpg"
            alt="Centro Carpintero Renovations"
          />
        </div>
      </div>
      <div
        class="bg-background-secondary mx-auto flex items-center flex-wrap py-20  px-4 md:px-10 lg:px-20"
      >
        <div class=" mx-auto px-2 w-full md:w-5/12  md:px-10">
          <div class="text-left mt-10">
            <h2
              class="text-3xl md:text-4xl font-serif font-light leading-tight mb-4"
            >
            Our Custom Carpentry & Remodeling Services
            </h2>
            <ul class="list-disc ml-6 mb-6">
                <li><strong>Kitchen Remodeling</strong> – Custom cabinetry, countertops, and layout design.</li>
                <li><strong>Bathroom Renovations</strong> – Vanity installations, woodwork, and space optimization.</li>
                <li><strong>Custom Fine Furniture</strong> – Bespoke wooden tables, chairs, and shelving units.</li>
                <li><strong>Built-in Cabinetry</strong> – Wall units, storage solutions, and entertainment centers.</li>
                <li><strong>Wooden Doors & Windows</strong> – Elegant handcrafted doors and frames.</li>
            </ul>
            <div>
            <a
              href="/gallery"
              class="inline-block bg-green-700 hover:bg-accentb text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3 mb-4"
              >Call Martha</a
            > &nbsp;
            <a
              href="/gallery"
              class="inline-block bg-green-700 hover:bg-accentb text-white hover:text-white text-sm font-semibold tracking-wide uppercase shadow rounded-full cursor-pointer px-6 py-3 mb-4"
              >View the gallery</a
            >
            </div>
          </div>
        </div>
        <div class="w-full md:w-7/12 md:px-10">
          <VueSlickCarousel v-bind="settings">
            <div>
              <g-image
                src="@/assets/modern-kitchen/modern-kitchen-design.jpg"
                alt="Modern Kitchen Design"
                immediate="true"
              />
            </div>
            <div>
              <g-image
                src="@/assets/modern-kitchen/modern-kitchen-design-2.jpg"
                alt="Custom Modern Kitchen"
                immediate="true"
              />
            </div>
            <div>
              <g-image
                src="@/assets/modern-kitchen/modern-kitchen-design-3.jpg"
                alt="Beautiful Modern Kitchen"
                immediate="true"
              />
            </div>
            <div>
              <g-image
                src="@/assets/modern-kitchen/modern-bedroom-design.jpg"
                alt="Custom Bedroom Headboard"
                immediate="true"
              />
            </div>
            <div>
              <g-image
                src="@/assets/modern-kitchen/modern-bedroom-design-2.jpg"
                alt="Custom Modern Headboard"
                immediate="true"
              />
            </div>
            <div>
              <g-image
                src="@/assets/modern-kitchen/modern-bathroom-design.jpg"
                alt="Modern Bathroom Design"
                immediate="true"
              />
            </div>
            <div>
              <g-image
                src="@/assets/modern-kitchen/modern-bathroom-design-2.jpg"
                alt="Elegant Modern Bathroom"
                immediate="true"
              />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <div class="warehouse bg-primary">
      <div class="container-inner py-20 lg:py-40 mx-auto px-2">
        <div class="text-3xl leading-normal font-serif text-white font-hairline italic">
            Martha Navarro and her excellent staff have been my go-to crew for all construction work since 2012. Her group designed and built a gorgeous gourmet kitchen, repaired the roof when water problems developed, updated all 5 bathrooms and even refinished every door in the house. Her group routinely polishes and seals the terrace marble floors so they even come out of the rainy season looking good. Martha is reliable, prices the work fairly and always comes through. Highly recommended.
        </div>
        <div class="text-2xl mt-4 font-light text-white">- Happy Customer</div>
      </div>
    </div>
      <div class="bg-background-secondary flex flex-wrap">
      <div
        class="w-full md:w-full lg:w-1/2 font-bold w-full text-left align-middle side-bg"
      ></div>
      <div
        class="w-full md:w-full py-20 lg:w-1/2 font-bold w-full text-left align-middle px-4 md:px-10 lg:px-20"
      >
            <div class="bg-background-white p-8 rounded">
            <div
                class="text-3xl text-pink text-center leading-tight font-light mb-6"
            >
                CONTACT MARTHA FOR A FREE ESTIMATE
            </div>
            <form
                name="servicesestimate"
                method="post"
                v-on:submit.prevent="handleSubmit"
                action="/thankyou/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                <label> Don’t fill this out: <input name="bot-field" /> </label>
                </p>
                <div class="flex flex-wrap mb-6 -mx-4">
                <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                    <label class="block mb-2 text-copy-primary" for="name">
                    Name
                    </label>

                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jon Snow"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-2"
                    required
                    v-model="formData.name"
                    />
                </div>

                <div class="w-full px-4 md:w-1/2">
                    <label class="block text-copy-primary mb-2" for="email">
                    Email Address
                    </label>

                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email@example.com"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-2"
                    required
                    v-model="formData.email"
                    />
                </div>
                </div>

                <div class="w-full mb-12">
                <label class="block text-copy-primary mb-2" for="message">
                    Message
                </label>

                <textarea
                    id="message"
                    rows="3"
                    name="message"
                    class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-2 py-2"
                    placeholder="Enter your message here."
                    required
                    v-model="formData.message"
                ></textarea>
                </div>

                <div class="flex justify-end w-full">
                <input
                    type="submit"
                    value="Submit"
                    class="block bg-green-700 hover:bg-green-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3"
                />
                </div>
            </form>
            </div>
        </div>
    </div>
    </div>
    </Layout>
  </template>
  
  <script>
  import VueSlickCarousel from "vue-slick-carousel";
    import "vue-slick-carousel/dist/vue-slick-carousel.css";
    // optional style for arrows & dots
    import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
  export default {
    components: { VueSlickCarousel },
    metaInfo: {
      title: 'Fine Woodworking | Carpentry | Centro Carpintero Puert Vallarta',
      titleTemplate: '%s',
      meta: [
        { name: 'description', 
          key: 'description',
          content:  "Learn and get to know a bit better of who is working behind the scenes in making your dreams come true."
        },
        { property: 'og:title', content: "Fine Woodworking | Carpentry | Centro Carpintero Puert Vallarta"},
        { property: 'og:site_name', content: 'Centro Carpintero'},
        {property: 'og:type', content: 'website'},    
        {name: 'robots', content: 'index,follow'} 
      ]
    },
    data() {
        return {
            formData: {},
        };
    },
    methods: {
        handleSubmit(e) {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({
            "form-name": e.target.getAttribute("name"),
            ...this.formData,
            }),
        })
            .then(() => this.$router.push("/thankyou"))
            .catch((error) => alert(error));
        },
    },
  }
  </script>
  
  