<template>
  <Layout>
    <div class="hero">
      <div class="container-inner mx-auto flex flex-col sm:flex-row justify-between py-20">
        <div class="font-bold w-full text-center sm:text-center">
          <div class="text-6xl text-white leading-tight">Nuestros servicios</div>
          <h1 class="text-2xl text-white font-light leading-tight">Carpintería a medida para reformas y remodelaciones de viviendas</h1>
        </div>
      </div> <!-- end hero -->
    </div>
    <div class="container-inner mx-auto py-20">
      <div class="flex flex-wrap justify-between items-center ">
        <div class="w-full px-8 sm:py-0">
          <p>Si está buscando a alguien que pueda renovar su hogar, o busca a alguien que haga muebles de madera personalizados que se vean únicos en su hogar, Centro carpintero es el lugar para usted, con carpinteros capacitados que tienen el talento para crear madera de alta calidad en Arte.</p>
<p>Lo que nos diferencia de los demás renovadores de viviendas es que utilizamos la mejor madera de alta calidad que podemos encontrar y entregamos lo que el cliente desea.</p>
        </div>
      </div>
      <div class="flex flex-wrap justify-between items-center pt-10 align-top">
        <div class="w-full lg:w-1/4 px-8 sm:py-0 text-center align-top">
          <g-image src="@/assets/img/sketch.svg" class="sm-icon"></g-image>
          <div>Diseño y remodelación</div>
        </div>
        <div class="w-full lg:w-1/4 px-8 sm:py-0 text-center align-top">
          <g-image src="@/assets/img/kitchen.svg" class="sm-icon"></g-image>
          <div>Renovaciones de cocinas y baños</div>
        </div>
        <div class="w-full lg:w-1/4 px-8 sm:py-0 text-center align-top">
          <g-image src="@/assets/img/cabinet.svg" class="sm-icon"></g-image>
          <div>Muebles de madera personalizados</div>
        </div>
        <div class="w-full lg:w-1/4 px-8 sm:py-0 text-center align-top">
          <g-image src="@/assets/img/handsaw.svg" class="sm-icon"></g-image>
          <div>Carpintería fina y carpintería</div>
        </div>
      </div>
    </div>
    <div class="bg-background-primary">
      <div class="container-inner mx-auto py-10">
        <div class="flex flex-wrap justify-between items-center ">
          <div class="w-full px-8 sm:py-0">
            <h2 class="text-center text-white text-6xl"><strong>Que hacemos</strong></h2>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-background-secondary">
      <div class="container-inner mx-auto py-20">
        <div class="flex flex-wrap justify-between items-center ">
          <div class="w-full px-8 sm:py-0">
            <h3 class="text-center text-4xl">Diseño y remodelación</h3>
            <p>Para que estés frustrado o cansado de la apariencia de tu hogar, tal vez necesite ser un poco más modernizado o quieras la sensación de lujo en el hogar, en Centro carpintero tenemos los profesionales que necesitas para agregar esa chispa en tu hogar.</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container-inner mx-auto py-20">
        <div class="flex flex-wrap justify-between items-center ">
          <div class="w-full px-8 sm:py-0">
            <h3 class="text-center text-4xl">Renovaciones de la cocina al baño</h3>
            <p>Tu cocina y baño es uno de los lugares más utilizados en tu hogar, así que ¿por qué no darle un poco de amor y darle esa mejora que necesita? En Centro carpintero podemos actualizar cualquier habitación que necesites de vieja a nueva.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-background-secondary">
      <div class="container-inner mx-auto py-20">
        <div class="flex flex-wrap justify-between items-center ">
          <div class="w-full px-8 sm:py-0">
            <h3 class="text-center text-4xl">Muebles de madera personalizados</h3>
            <p>Si desea tener algo que sea único como un mueble en su hogar que sea de alta calidad y hecho a medida, podemos entregarle cualquier tipo de mueble que necesite, como escritorios, somieres, mesas, sillas y mucho más. más cosas que podemos hacer en Centro carpintero.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-background-secondary">
      <div class="container-inner mx-auto py-20">
        <div class="flex flex-wrap justify-between items-center ">
          <div class="w-full px-8 sm:py-0">
            <h3 class="text-center text-4xl">Carpintería fina y carpintería</h3>
            <p>Si desea tener algo que sea único como un mueble en su hogar que sea de alta calidad y hecho a medida, podemos entregarle cualquier tipo de mueble que necesite, como escritorios, somieres, mesas, sillas y mucho más. más cosas que podemos hacer en Centro carpintero.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Carpintería fina | Carpintería | Centro Carpintero Puert Vallarta',
    titleTemplate: '%s',
     meta: [
      { name: 'description', 
        key: 'description',
        content:  'Eche un vistazo a lo que hacemos y en lo que nos especializamos.'
      },
      { property: 'og:title', content: "Carpintería fina | Carpintería | Centro Carpintero Puert Vallarta"},
      { property: 'og:site_name', content: 'Centro Carpintero'},
      {property: 'og:type', content: 'website'},    
      {name: 'robots', content: 'index,follow'} 
    ]

  }
}
</script>