<script setup>
import { ref } from 'vue' 
import { usePokemonStore } from '@/store/pokemon'; 
import { storeToRefs } from 'pinia';
import { useRouter, RouterLink  } from 'vue-router'
     
     const usePokemon = usePokemonStore() 
     const  router = useRouter()

    //destructuracion de acciones
    const { favoritos } = storeToRefs( usePokemon)
    const { removeFavorito } = usePokemon
 
//  const redirect = (name) => {
//         router.push( {name:'pokemon', params: { name: name } })
//  }
</script> 

<template> 
     <h1> Favoritos </h1>
     <p v-if="favoritos.length <= 0"> <h1>Sin favoritos</h1></p> 
     <ul v-else class="list-group list-group-flush">
        <li v-for="pokemon in favoritos" class="list-group-item" :key="pokemon.id">
             <div> {{pokemon.name}}</div>
             <div> 
                 <!-- <button class="btn btn-primary btn-sm" @click="redirect(pokemon.name)">Mayor información</button> --> 
                     <RouterLink class="btn btn-primary btn-sm" :to="{ name:'pokemon' , params: { name: pokemon.name }}" >Mayor información</RouterLink>
                     <button class="btn btn-danger btn-sm" @click="removeFavorito(pokemon.id)">Remover</button>
             </div>
        </li>
     </ul>
</template> 

<style lang='scss' scoped> 

</style>