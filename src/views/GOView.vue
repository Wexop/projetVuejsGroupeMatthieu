<script setup>
import router from "@/router/index.js";
</script>
<template>
    <div class="game-over-container">
        <div class="game-over-box">
            <h1>GAME OVER</h1>
            <p>SCORE : {{ $route.params.score }}</p>
            <div class="buttons">
                <RouterLink to="/game">RECOMMENCER</RouterLink>
                <RouterLink to="/">ACCUEIL</RouterLink>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.game-over-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.game-over-box {
    text-align: center;
    border: 2px solid black;
    padding: 20px;
}

.buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

button {
    padding: 10px 20px;
    cursor: pointer;
}
</style>
  