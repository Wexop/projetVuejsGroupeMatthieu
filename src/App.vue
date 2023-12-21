<template>
  <div class="">
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
          <form class="d-flex ms-auto">
            <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Rechercher</button>
          </form>
        </div>
      </div>
    </nav>

    <div class="">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>

</style>
