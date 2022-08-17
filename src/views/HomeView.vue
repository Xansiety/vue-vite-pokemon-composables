<script setup>
import {toRefs, reactive, ref} from 'vue'
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from 'pinia'

// const useCounter = useCounterStore();
const useCounter = useCounterStore();

//destructuracion de acciones
const { increment, decrement } = useCounter

//destructuracion state y getter
const { count, double } =  storeToRefs(useCounter)

// const decrement = () => {
//     useCounter.decrement();
// }
</script>

<template>
    <!-- <h1>Home Counter: {{ useCounter.count }}</h1>
    <h2>Double: {{ useCounter.double }}</h2>
    <button @click="useCounter.increment">Increment</button>
    <button @click="useCounter.decrement">Decrement</button> -->
    <h1>Home Counter: {{  count }}</h1>
    <h2>Double: {{ double }}</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
</template>