<template>
  <header class="bg-white shadow-sm">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <!-- Logo -->
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Elite Barbershop</span>
          <div class="flex items-center space-x-2">
            <div class="h-8 w-8 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 flex items-center justify-center">
              <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <span class="text-xl font-bold text-gray-900">Elite Barber</span>
          </div>
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="flex lg:hidden">
        <button 
          type="button" 
          @click="toggleMobileMenu"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <span class="sr-only">{{ isMobileMenuOpen ? 'Close main menu' : 'Open main menu' }}</span>
          <svg 
            class="size-6 transition-transform duration-200" 
            :class="{ 'rotate-90': isMobileMenuOpen }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor"
          >
            <path 
              v-if="!isMobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M6 18 18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>

      <!-- Desktop navigation -->
      <div class="hidden lg:flex lg:gap-x-12">
        <!-- Services dropdown -->
        <div class="relative">
          <button 
            type="button" 
            @click="toggleServicesDropdown"
            @blur="handleDropdownBlur"
            class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 hover:text-amber-600 transition-colors"
          >
            Servicios
            <svg 
              class="size-5 flex-none text-gray-400 transition-transform duration-200" 
              :class="{ 'rotate-180': isServicesOpen }"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </button>

          <!-- Services flyout menu -->
          <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <div 
              v-if="isServicesOpen"
              class="absolute top-full -left-8 z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div class="p-4">
                <div 
                  v-for="service in services" 
                  :key="service.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white transition-colors">
                    <component 
                      :is="service.icon" 
                      class="size-6 text-gray-600 group-hover:text-amber-600 transition-colors"
                    />
                  </div>
                  <div class="flex-auto">
                    <a href="#" class="block font-semibold text-gray-900 hover:text-amber-600 transition-colors">
                      {{ service.name }}
                      <span class="absolute inset-0"></span>
                    </a>
                    <p class="mt-1 text-gray-600">{{ service.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a 
                  href="#" 
                  @click="showBookingModal = true"
                  class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  <svg class="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.236 4.53L7.53 10.53a.75.75 0 00-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                  </svg>
                  Reservar Cita
                </a>
                <a href="#" class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                  <svg class="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
                  </svg>
                  Contactar
                </a>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Other navigation links -->
        <a href="#" class="text-sm/6 font-semibold text-gray-900 hover:text-amber-600 transition-colors">Precios</a>
        <a href="#" class="text-sm/6 font-semibold text-gray-900 hover:text-amber-600 transition-colors">Galería</a>
        <a href="#" class="text-sm/6 font-semibold text-gray-900 hover:text-amber-600 transition-colors">Nosotros</a>
      </div>

      <!-- Login/CTA -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <button 
          @click="showBookingModal = true"
          class="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Reservar Cita
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="isMobileMenuOpen" class="lg:hidden" role="dialog" aria-modal="true">
        <div class="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" @click="isMobileMenuOpen = false"></div>
        <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Elite Barbershop</span>
              <div class="flex items-center space-x-2">
                <div class="h-8 w-8 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 flex items-center justify-center">
                  <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <span class="text-xl font-bold text-gray-900">Elite Barber</span>
              </div>
            </a>
            <button 
              type="button" 
              @click="isMobileMenuOpen = false"
              class="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <span class="sr-only">Close menu</span>
              <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <!-- Services mobile dropdown -->
                <div class="-mx-3">
                  <button 
                    type="button" 
                    @click="isMobileServicesOpen = !isMobileServicesOpen"
                    class="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    Servicios
                    <svg 
                      class="size-5 flex-none transition-transform duration-200" 
                      :class="{ 'rotate-180': isMobileServicesOpen }"
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06Z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  
                  <Transition
                    enter-active-class="transition-all duration-200 ease-out"
                    enter-from-class="opacity-0 max-h-0"
                    enter-to-class="opacity-100 max-h-96"
                    leave-active-class="transition-all duration-200 ease-in"
                    leave-from-class="opacity-100 max-h-96"
                    leave-to-class="opacity-0 max-h-0"
                  >
                    <div v-if="isMobileServicesOpen" class="mt-2 space-y-2 overflow-hidden">
                      <a 
                        v-for="service in services" 
                        :key="service.name"
                        href="#" 
                        class="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                      >
                        {{ service.name }}
                      </a>
                      <button 
                        @click="showBookingModal = true; isMobileMenuOpen = false"
                        class="block w-full text-left rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-amber-600 hover:bg-gray-50 transition-colors"
                      >
                        Reservar Cita
                      </button>
                    </div>
                  </Transition>
                </div>
                
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">Precios</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">Galería</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">Nosotros</a>
              </div>
              
              <div class="py-6">
                <button 
                  @click="showBookingModal = true; isMobileMenuOpen = false"
                  class="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-full text-base font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-200 shadow-md"
                >
                  Reservar Cita
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive state
const isMobileMenuOpen = ref(false)
const isServicesOpen = ref(false)
const isMobileServicesOpen = ref(false)
const showBookingModal = ref(false)

// Services data for barbershop
const services = ref([
  {
    name: 'Corte Clásico',
    description: 'Cortes tradicionales con técnicas profesionales',
    icon: 'CutIcon'
  },
  {
    name: 'Afeitado',
    description: 'Afeitado tradicional con navaja caliente',
    icon: 'BladeIcon'
  },
  {
    name: 'Barba & Bigote',
    description: 'Cuidado y diseño de barba profesional',
    icon: 'BeardIcon'
  },
  {
    name: 'Tratamientos',
    description: 'Tratamientos capilares y faciales',
    icon: 'TreatmentIcon'
  },
  {
    name: 'Eventos',
    description: 'Servicio para bodas y eventos especiales',
    icon: 'EventIcon'
  }
])

// Methods
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleServicesDropdown = () => {
  isServicesOpen.value = !isServicesOpen.value
}

const handleDropdownBlur = (event) => {
  // Close dropdown if clicking outside
  setTimeout(() => {
    if (!event.relatedTarget?.closest('.relative')) {
      isServicesOpen.value = false
    }
  }, 100)
}

const closeAllMenus = () => {
  isMobileMenuOpen.value = false
  isServicesOpen.value = false
  isMobileServicesOpen.value = false
}

// Event listeners
const handleClickOutside = (event) => {
  if (!event.target.closest('nav') && !event.target.closest('[role="dialog"]')) {
    closeAllMenus()
  }
}

const handleEscapeKey = (event) => {
  if (event.key === 'Escape') {
    closeAllMenus()
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscapeKey)
})

// Emit events
const emit = defineEmits(['showBookingModal'])

// Watch for booking modal changes
watch(showBookingModal, (newValue) => {
  emit('showBookingModal', newValue)
})

// Icon components (simplified inline SVGs)
const CutIcon = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
  </svg>`
}

const BladeIcon = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
  </svg>`
}

const BeardIcon = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>`
}

const TreatmentIcon = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>`
}

const EventIcon = {
  template: `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5M9 12.75h.008v.008H9V12.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0h.008v.008h-.008V12.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>`
}
</script>

<style scoped>
/* Custom transitions for smooth animations */
.max-h-0 {
  max-height: 0;
}

.max-h-96 {
  max-height: 24rem;
}
</style>