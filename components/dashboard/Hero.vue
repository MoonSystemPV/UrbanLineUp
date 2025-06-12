<template>
  <div class="relative h-screen">
    <div class="absolute inset-0 bg-black/60 z-10"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-20"></div>
    
    <div class="relative z-30 h-full flex items-center">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
            <span class="text-[#EC9B27]">Urban</span>LineUp
          </h1>
          <p class="text-xl text-gray-200 mb-8">
            Estilo y precisión en cada corte. Reserva tu cita y transforma tu look.
          </p>
          <button 
            @click="$emit('showBookingModal', true)"
            class="bg-[#EC9B27] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#d88a1f] transition-all duration-300 transform hover:scale-105"
          >
            Reservar Ahora
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['showBookingModal'])
</script> 