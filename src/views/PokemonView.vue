<script setup>
import { ref } from 'vue' 
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

     const props = defineProps({
        name: {
            type: String,
            required: true
        }
      })

        const route = useRoute()
        const router = useRouter()
        // console.log(router.params.name)
        const name = route.params.name

        const pokemon = ref({})

       const getData = async () => {
       try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        pokemon.value = data
       } catch (error) {
        console.log(error);
        pokemon.value = null
       }
     }
     getData()


     const back = () => {
      router.push({name:'pokemons'})
     }
 
</script> 

<template> 
<div v-if="pokemon">
    <h1> {{name}}</h1>  
    <img :src="pokemon.sprites?.front_default" />
</div>
<h1 v-else>No existe el pokemon</h1>
    <button @click="back">Regresar</button>
     <!-- <p>{{pokemon}}</p> -->
</template> 

<style lang='scss' scoped> 

</style>