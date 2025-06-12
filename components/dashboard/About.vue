<template>
  <div class="py-20 bg-gray-100">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 bg-[#EC9B27] p-8 md:p-12 relative">
          <div class="absolute top-0 left-0 p-8 transform translate-y-1/4">
            <h1 class="text-4xl md:text-5xl text-white uppercase font-black leading-tight">Urban</h1>
            <h1 class="text-4xl md:text-5xl text-white uppercase font-black leading-tight">Line</h1>
            <h1 class="text-4xl md:text-5xl text-white uppercase font-black leading-tight">Up</h1>
          </div>
        </div>
        
        <div class="md:w-1/2 bg-white p-8 md:p-12 flex flex-col items-center">
          <p class="text-gray-800 text-justify mb-8">
            En UrbanLineUp, nos especializamos en crear looks únicos y modernos que reflejen tu personalidad. Nuestro equipo de barberos profesionales está comprometido con la excelencia y la atención al detalle.
            <br><br>
            Ofrecemos un ambiente acogedor donde podrás disfrutar de un café mientras te atendemos. Cada servicio incluye una consulta personalizada para asegurar que obtengas exactamente el look que deseas.
            <br><br>
            Nuestro compromiso es brindarte una experiencia premium con los mejores productos y técnicas del mercado.
          </p>
          
          <NuxtLink to="/sobre-nosotros" class="px-8 py-4 bg-gray-900 text-[#EC9B27] font-bold uppercase hover:bg-[#EC9B27] hover:text-white transition-colors duration-300">
            Conoce más sobre nosotros
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template> 