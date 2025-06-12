<template>
  <div class="min-h-screen bg-gray-100">
    <dashboard-Header @showBookingModal="showBookingModal = true" />
    <dashboard-Hero @showBookingModal="showBookingModal = true" />
    <dashboard-Services />
    <dashboard-About />
    <dashboard-Gallery />
    <dashboard-Contact />
    <dashboard-Footer />
    <dashboard-BookingModal 
      :show="showBookingModal"
      @close="showBookingModal = false"
      @booking="handleBooking"
    />
  </div>
</template>

<script setup>
const showBookingModal = ref(false)

const handleBooking = (bookingData) => {
  // Aquí iría la lógica para procesar la reserva
  console.log('Reserva:', bookingData)
  // Mostrar mensaje de éxito
  alert('¡Reserva realizada con éxito!')
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
</style>
