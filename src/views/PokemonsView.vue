<script setup> 
import { RouterLink } from 'vue-router' 
import { useGetData } from '../composables/useGetData'; 
     //mi primer composable
     const {getData, data, loading, errorData} = useGetData() 
     getData('https://pokeapi.co/api/v2/pokemon')
</script> 

<template> 
     <h1>Pokemon view</h1> 
     <p v-if="loading">Cargando información...</p>
     <div class="alert alert-danger mt-2" role="alert" v-if="errorData">
          {{errorData}}
     </div>
     <div v-if="data">
          <ul class="list-group list-group-flush">
               <li v-for="pokemon in data.results" class="list-group-item">
               <router-link :to="{name:'pokemon', params: { name: pokemon.name  }}">
                    {{pokemon.name}}
               </router-link>  
               </li>
          </ul>
          <div class="mt-2"> 
               <button :disabled="!data.previous" class="btn btn-warning me-2" @click="getData(data.previous)">Prev</button>
               <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">Next</button>
          </div>
          
     </div>
    
</template> 

<style scoped> 

</style>