<template>
  <Layout>
    <div class="hero">
      <div class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20">
        <div class="font-bold w-full text-center sm:text-center">
          <div class="text-4xl md:text-5xl font-serif font-light text-white leading-tight">Contact Centro Carpintero</div>
        </div>
      </div> <!-- end hero -->
    </div>
    <div class="container-inner py-20 mx-auto px-2">
      <div class="flex flex-wrap py-6">
        <div class="sw:w-full md:w-full lg:w-1/2 px-8 mx-auto">
          <div class="text-4xl font-serif font-light leading-tight">Contact Us</div>
          <div class="text-xl leading-tight mt-4">
            Centro Cerpintero PV<br>
            Carretera a las Palmas #2523<br>
            Puerto Vallarta, Jalisco 48280<br>
             
            Cel. <a href="tel:322-121-6778">322-121-6778</a><br>
            <a href="mailto:centrocarpinteropv@gmail.com">centrocarpinteropv@gmail.com</a>
          </div>
        </div>
        <div class="sw:w-full md:w-full lg:w-1/2 px-8 mx-auto">
          <div class="text-4xl font-serif font-light leading-tight">Send Us A Message</div>
          <div class="contact-me pt-4">
             <div class="mx-auto text-xl pb-4 relative">
                <div class="text-lg sm:text-lg">
                  <form name="contact" method="post" v-on:submit.prevent="handleSubmit" action="/thankyou/" data-netlify="true" data-netlify-honeypot="bot-field">
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
                </div>
             </div>
           </div> <!-- end contact-me -->
         </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact Puerto Vallarta Carpenter | Centro Carpintero',
    titleTemplate: '%s', 
     meta: [
        { name: 'description', 
          key: 'description', 
          content:  "Got any questions about are service, contact us here."
        },
        { property: 'og:title', content: "Contact Puerto Vallarta Carpenter | Centro Carpintero"},
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

