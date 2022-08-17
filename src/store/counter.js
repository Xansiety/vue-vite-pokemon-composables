import { defineStore } from "pinia";
import { ref, computed } from "vue"
 

 
//Store OPTIONS API
export const useCounterStore = defineStore("counter", {
    // data reactiva
    state: () => ({
        count: 0,
    }),
    // methods
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
    },
    // computed
    getters: {
        double: (state) => state.count * 2,
    },
});

// Setup Stores#
// There is also another possible syntax to define stores. Similar to the Vue Composition API's setup function, we can pass in a function that defines reactive properties and methods and returns an object with the properties and methods we want to expose.

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)

//   function increment() {
//     count.value++
//   }
  
//   function decrement() {
//     count.value--
//   }  

//   const double = computed(() => count.value * 2)

//   return { count, increment,decrement, double }
// })
// In Setup Stores:

// ref()s become state properties
// computed()s become getters
// function()s become actions
