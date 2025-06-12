<template>
  <div>
    <!-- Anuncia cambios de ruta para accesibilidad -->
    <NuxtRouteAnnouncer />
    
    <!-- Renderiza las páginas de /pages -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    
    <!-- Opcional: Loading indicator -->
    <NuxtLoadingIndicator />
  </div>
</template>

<script setup>
useHead({
  title: 'UrbanLineUp - Barbería',
  meta: [
    { name: 'description', content: 'UrbanLineUp - Tu barbería de confianza. Estilo y precisión en cada corte.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<style>
html {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #f3f4f6;
}
</style>

