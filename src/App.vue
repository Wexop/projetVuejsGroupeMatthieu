<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="">
        <RouterLink class="navbar-brand" to="/">Jeu des drapeaux</RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/game">JEU</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/paysList">LISTE DES PAYS</RouterLink>
            </li>
          </ul>

          <!-- Barre de recherche -->
          <form class="d-flex ms-auto" @submit.prevent="searchCountry">
            <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Rechercher</button>
          </form>

          <!-- Afficher les résultats de la recherche -->
          <div v-if="searchResults.length > 0" class="mt-2">
            <ul class="list-group">
              <li class="list-group-item" v-for="country in searchResults" :key="country.id">
                {{ country.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div class="mt-4">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const countries = [
  { id: 1, name: 'Pays1' },
  { id: 2, name: 'Pays2' },
  // ... ajoutez d'autres pays ici ...
]

const searchQuery = ref('')
const searchResults = ref([])

const searchCountry = () => {
  // Logique de recherche
  searchResults.value = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
}
</script>

<style>
  /* Ajoutez vos styles si nécessaire */
</style>
