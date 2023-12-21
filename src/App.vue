<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <RouterLink class="navbar-brand" to="/game">Jeu des drapeaux</RouterLink>
            <RouterLink class="navbar-brand" to="/paysList">Liste des drapeaux</RouterLink>

        </nav>
    </header>

    <body>
        <RouterView/>
    </body>
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<style>

</style>
