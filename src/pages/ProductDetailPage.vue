<template>
    <img :src="product.image" alt="">
    <h1>{{ product.name }}</h1>
    <h3>{{ product.price }}</h3>
    <h1>Hello</h1>
</template>

<script setup>
import {products} from '../temp-data';
import { useRoute } from "vue-router";


const router = useRoute()
const product = products.find(product => product.id === router.params.productID)
console.log(product)
</script>