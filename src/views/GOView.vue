<template>
    <div class="game-over-container">
        <div class="game-over-box">
            <h1>GAME OVER</h1>
            <p>SCORE : 2</p>
            <div class="buttons">
                <button @click="restartGame">RECOMMENCER</button>
                <button @click="goHome">ACCUEIL</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'GameOver',
    methods: {
        restartGame() {
        },
        goHome() {
        }
    }
};
</script>
  
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
  