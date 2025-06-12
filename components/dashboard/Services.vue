<template>
  <div class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="index" 
             class="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="text-[#EC9B27] text-4xl mb-4">
            <i :class="service.icon"></i>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
          <p class="text-gray-600">{{ service.description }}</p>
          <p class="text-[#EC9B27] font-bold mt-4">{{ service.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    title: 'Corte de Cabello',
    description: 'Corte personalizado con las últimas tendencias',
    price: '$15.000',
    icon: 'fas fa-cut'
  },
  {
    title: 'Barba',
    description: 'Diseño y mantenimiento de barba profesional',
    price: '$10.000',
    icon: 'fas fa-razor'
  },
  {
    title: 'Corte + Barba',
    description: 'Combo completo de corte y barba',
    price: '$20.000',
    icon: 'fas fa-user-tie'
  }
]
</script> 