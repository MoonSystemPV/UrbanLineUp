<template>
  <div class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">Nuestros Trabajos</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="i in 4" :key="i" class="aspect-square bg-gray-300 rounded-lg hover:shadow-xl transition-all duration-300"></div>
      </div>
      <div class="text-center mt-8">
        <NuxtLink to="/galeria" class="inline-block px-8 py-4 bg-[#EC9B27] text-white font-bold uppercase rounded-lg hover:bg-[#d88a1f] transition-colors duration-300">
          Ver Galería Completa
        </NuxtLink>
      </div>
    </div>
  </div>
</template> 