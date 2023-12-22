<template>
    <header class="w-100">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <RouterLink class="navbar-brand" to="/game">Jeu des drapeaux</RouterLink>
            <RouterLink class="navbar-brand" to="/paysList">Liste des drapeaux</RouterLink>

        </nav>
    </header>

    <RouterView/>
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<style>

</style>
