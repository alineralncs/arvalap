<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

    <header>
    
<nav class="flex items-center m-10 justify-between py-4">
  <div class="flex items-center">
    <div class="mx-auto content-center">
      <RouterLink to="/">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      </RouterLink>
    </div>
  </div>
  <div class="ml-auto">
    <RouterLink to="/about" class="mr-4 font-gilroy">Sobre</RouterLink>
  </div>
</nav>


  </header>

  <RouterView />

</template>