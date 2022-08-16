<script setup>
import { ref } from 'vue' 
import { RouterLink } from 'vue-router'
     import axios from 'axios'

     const pokemons = ref([])

     const getData = async () => {
       try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
        pokemons.value = data.results
       } catch (error) {
        console.log(error);
       }
     }
     getData()
</script> 

<template> 
     <h1>Pokemon view</h1> 
     <ul><li v-for="pokemon in pokemons">
        <router-link :to="{name:'pokemon', params: { name: pokemon.name  }}">
         {{pokemon.name}}
        </router-link>  
     </li></ul>
</template> 

<style scoped> 

</style>