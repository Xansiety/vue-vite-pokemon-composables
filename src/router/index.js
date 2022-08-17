import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  // linkExactActiveClass: "exact-active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import(/* webpackChunkName: "pokemones" */ '../views/PokemonsView.vue')
    },
     {
      path: '/pokemon/:name',
      name: 'pokemon',
      component: () => import(/* webpackChunkName: "pokemon" */ '../views/PokemonView.vue'),   
      props: (route) => {
        return {
          name: route.params.name
        }
      }
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import(/* webpackChunkName: "favoritos" */ '../views/FavoritosView.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFoundView.vue"),
    }, 
  ]
})

export default router
