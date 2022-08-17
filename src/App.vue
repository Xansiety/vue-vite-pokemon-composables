<script setup>
import { RouterLink, RouterView } from 'vue-router' 
</script>

<template>
<nav class="navbar bg-dark navbar-dark">
  <div class="container-fluid">
    <RouterLink to="/" class="navbar-brand">
      <img src="@/assets/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
      PokeAPI
    </RouterLink>
    <div>
        <RouterLink class="btn btn-outline-primary me-2" to="/">Home ☆*: .｡. o(≧▽≦)o .｡.:*☆</RouterLink> 
        <RouterLink class="btn btn-outline-primary me-2" :to="{name: 'pokemons'}">Pokemones 🐢</RouterLink>
        <RouterLink class="btn btn-outline-primary" :to="{name: 'favoritos'}">Favoritos ⭐ </RouterLink>
    </div>
  </div>
</nav>
 
 <div class="container text-center"> 
   <RouterView />
 </div>
</template>

