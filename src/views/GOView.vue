<script>
import GameFlag from "@/components/GameFlag.vue";

export default {
    components: {GameFlag},
  data() {
    return {
      score: Number(localStorage.getItem('score')) || 0,
      paysFailedName: localStorage.getItem('paysFailedName') || "",
      paysFailedImage: localStorage.getItem('paysFailedImg') || ""
    };
  },
    beforeUnmount() {
    localStorage.removeItem('score');
    localStorage.removeItem('paysFailed');
  }
}
</script>
<template>
  <main style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; min-width: 100vw; gap:2rem">
    <div class="game-over-container">
        <div class="game-over-box">
            <h1>GAME OVER</h1>
            <h2>SCORE : {{ score }}</h2>
            <p>LE PAYS ETAIT :</p>
            <GameFlag show-answer="{{true}}" :name="paysFailedName" :image="paysFailedImage" />
            <div class="buttons">
                <RouterLink to="/game">RECOMMENCER</RouterLink>
                <RouterLink to="/">ACCUEIL</RouterLink>
            </div>
        </div>
    </div>
  </main>
</template>

<style scoped>
.game-over-container {
    display: flex;
    justify-content: center;
    align-items: center;
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
