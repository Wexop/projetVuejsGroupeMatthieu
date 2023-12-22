<template>
    <header class="w-100">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <RouterLink class="navbar-brand" to="/game">Jeu des drapeaux</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="navbar-brand" to="/paysList">Liste des drapeaux</RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <div class="align-content-center align-items-center mx-auto">
        <RouterView/>
    </div>
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<style>

</style>
