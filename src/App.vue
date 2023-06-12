<script setup>

import NavbarComponent from './components/NavbarComponent.vue'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div class="bg-neutral-50">
<NavbarComponent />

<div class="flex justify-center items-center h-screen">
    <!-- Your content here -->
    <RouterView />
    


  </div>
</div>

</template>

