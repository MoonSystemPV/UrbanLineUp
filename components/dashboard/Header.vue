<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-[#E4E1D9] text-black shadow-lg">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <button class="md:hidden" @click="toggleMobileMenu">
        <i class="fas fa-bars text-xl"></i>
      </button>
      
      <NuxtLink to="/" class="flex items-center">
        <h1 class="text-2xl font-bold">
          <span class="text-[#EC9B27]">Urban</span>LineUp
        </h1>
      </NuxtLink>
      
      <div class="hidden md:flex space-x-4">
        <button @click="showBookingModal = true" class="font-bold uppercase">Reservas</button>
        <NuxtLink to="/servicios" class="font-bold uppercase">Servicios</NuxtLink>
        <NuxtLink to="/galeria" class="font-bold uppercase">Galería</NuxtLink>
        <NuxtLink to="/contacto" class="font-bold uppercase">Contacto</NuxtLink>
        <NuxtLink to="/tienda" class="font-bold uppercase">Tienda</NuxtLink>
      </div>
      
      <div class="flex items-center space-x-2">
        <a href="#" target="_blank" class="p-2">
          <i class="fab fa-instagram text-xl"></i>
        </a>
        <a href="#" target="_blank" class="p-2">
          <i class="fab fa-facebook text-xl"></i>
        </a>
        <a href="#" target="_blank" class="p-2">
          <i class="fab fa-tiktok text-xl"></i>
        </a>
      </div>
    </div>
  </header>

  <!-- Mobile Menu -->
  <nav :class="['fixed top-16 left-0 bottom-0 w-64 bg-white z-40 transform transition-transform duration-300 md:hidden', isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full']">
    <div class="py-4">
      <NuxtLink to="/" class="flex items-center px-4 py-2 text-black hover:bg-gray-100">
        <i class="fas fa-home mr-3"></i>
        <span>Inicio</span>
      </NuxtLink>
      <button @click="showBookingModal = true" class="w-full flex items-center px-4 py-2 text-black hover:bg-gray-100">
        <i class="fas fa-calendar mr-3"></i>
        <span>Reserva</span>
      </button>
      <NuxtLink to="/servicios" class="flex items-center px-4 py-2 text-black hover:bg-gray-100">
        <i class="fas fa-list mr-3"></i>
        <span>Servicios</span>
      </NuxtLink>
      <NuxtLink to="/galeria" class="flex items-center px-4 py-2 text-black hover:bg-gray-100">
        <i class="fas fa-images mr-3"></i>
        <span>Galería</span>
      </NuxtLink>
      <NuxtLink to="/contacto" class="flex items-center px-4 py-2 text-black hover:bg-gray-100">
        <i class="fas fa-envelope mr-3"></i>
        <span>Contacto</span>
      </NuxtLink>
      <NuxtLink to="/tienda" class="flex items-center px-4 py-2 text-black hover:bg-gray-100">
        <i class="fas fa-store mr-3"></i>
        <span>Tienda</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const isMobileMenuOpen = ref(false)
const showBookingModal = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Emitir eventos para el modal de reservas
const emit = defineEmits(['showBookingModal'])

watch(showBookingModal, (newValue) => {
  emit('showBookingModal', newValue)
})
</script> 