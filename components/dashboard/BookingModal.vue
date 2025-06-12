<template>
  <div v-if="show" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-2xl font-bold">Reservar Cita</h3>
        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>

      <form @submit.prevent="handleBooking" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <input 
            v-model="form.name"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC9B27] focus:border-transparent"
            required
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
          <input 
            v-model="form.phone"
            type="tel"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC9B27] focus:border-transparent"
            required
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Servicio</label>
          <select 
            v-model="form.service"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC9B27] focus:border-transparent"
            required
          >
            <option value="">Selecciona un servicio</option>
            <option v-for="service in services" :key="service.title" :value="service.title">
              {{ service.title }} - {{ service.price }}
            </option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
          <input 
            v-model="form.date"
            type="date"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC9B27] focus:border-transparent"
            required
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Hora</label>
          <select 
            v-model="form.time"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC9B27] focus:border-transparent"
            required
          >
            <option value="">Selecciona una hora</option>
            <option v-for="time in availableTimes" :key="time" :value="time">
              {{ time }}
            </option>
          </select>
        </div>

        <button 
          type="submit"
          class="w-full bg-[#EC9B27] text-white py-3 rounded-lg font-semibold hover:bg-[#d88a1f] transition-colors duration-300"
        >
          Confirmar Reserva
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close', 'booking'])

const form = ref({
  name: '',
  phone: '',
  service: '',
  date: '',
  time: ''
})

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

const availableTimes = [
  '09:00', '10:00', '11:00', '12:00', '13:00',
  '14:00', '15:00', '16:00', '17:00', '18:00'
]

const handleBooking = () => {
  emit('booking', form.value)
  form.value = {
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  }
  emit('close')
}
</script> 