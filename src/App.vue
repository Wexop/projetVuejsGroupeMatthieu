<template>
  <div>
    <input v-model="searchQuery" placeholder="Rechercher...">
    <RouterLink to="/game">JEU</RouterLink>
    <RouterLink to="/paysList">LISTE DES PAYS</RouterLink>

    <RouterView :searchQuery="searchQuery" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const searchQuery = ref('');
</script>
