<script setup>
import { ref } from 'vue'  
import { useRoute, useRouter } from 'vue-router'
import { useGetData } from '../composables/useGetData';
        
     const route = useRoute()
     const router = useRouter()  
     const {getData, data, loading, errorData} = useGetData()

     getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
     const pokemon = ref(data)

     const back = () => {
      router.push({name:'pokemons'})
     }
 
</script> 

<template> 
      <div v-if="loading">Espere por favor...</div>

      <div class="alert alert-danger mt-2" role="alert" v-if="errorData">
          {{errorData}}
     </div>

      <div v-if="pokemon">
      <h1> {{name}}</h1>  
          <img :src="pokemon.sprites?.front_default" />
      </div>  
   
   <button @click="back">Regresar</button>
</template> 

<style lang='scss' scoped> 

</style>