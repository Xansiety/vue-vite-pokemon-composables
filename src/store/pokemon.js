import { ref } from 'vue' 
import { defineStore } from "pinia"; 
 
export const usePokemonStore = defineStore('pokemonStore', () => {
  const favoritos = ref([])
  

   if (localStorage.getItem("favoritos")) {
        favoritos.value = JSON.parse(localStorage.getItem("favoritos"))
    }


  const addFavorito = (poke) => { 
        favoritos.value.push(poke);
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
    };

    const removeFavorito = (id) => {
        favoritos.value = favoritos.value.filter(favorito => favorito.id !== id);
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
    }


    const findPokemon = name =>  favoritos.value.find(pokemon => pokemon.name === name);

  return { favoritos, addFavorito, removeFavorito, findPokemon }
})