<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <RouterLink to="/game">JEU</RouterLink>
    <RouterLink to="/paysList">LISTE DES PAYS</RouterLink>

  <RouterView />
</template>

