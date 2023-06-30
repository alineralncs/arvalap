<template>
<header>    
<nav class="flex items-center justify-between py-4  rounded " >
  <div class="flex items-center">
    <div class="mx-auto content-center">
      <RouterLink to="/">
        <img alt="Vue logo" class="logo m-2" src="@/assets/logo.svg" width="125" height="125" />
      </RouterLink>
    </div>
  </div>
  <div class="ml-auto">
    <RouterLink to="/about" class="mr-4 font-sans font-bold">Te amo</RouterLink>
  </div>
</nav>
  </header>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
</script>