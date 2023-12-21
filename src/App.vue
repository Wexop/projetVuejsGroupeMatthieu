<template>
    <div class="">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="">
                <RouterLink class="navbar-brand" to="/game">Jeu des drapeaux</RouterLink>
                <RouterLink class="navbar-brand" to="/paysList">Liste des drapeaux</RouterLink>


            </div>

        </nav>

        <div class="">
            <RouterView/>
        </div>
    </div>
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<style>

</style>
