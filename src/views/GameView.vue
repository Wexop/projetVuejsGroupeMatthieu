<script setup>
import GameFlag from "@/components/GameFlag.vue";
import GameSuggestion from "@/components/GameSuggestion.vue";
</script>

<template>
  <main style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; min-width: 100vw; gap:2rem">
        <h1>SCORE : {{ score }}</h1>
        <div style="display: flex; flex-direction: row; align-items: center;width: 40vw; justify-content: space-between">
            <button v-if="isCorrect" v-on:click="nextFlag">SUIVANT</button>
            <div v-if="!isCorrect">
                <input class="input" type="text" v-model="name" placeholder="Nom du pays" @keyup="inputChanged(name)">
                <input type="submit" value="OK" @click="onGetName(name)">
                <GameSuggestion @pressed="inputChanged" v-if="paysSuggestion.length > 0 && name"
                                :pays="paysSuggestion"/>
            </div>
            <GameFlag v-if="actualPays" :image="actualPays?.image" :name="actualPays?.name" :show-answer="isCorrect"/>
        </div>
  </main>


</template>

<script>
import axios from "axios";
import router from "@/router/index.js";

export default {
    data() {
        return {
            actualPays: undefined,
            callEnabled: true,
            pays: [],
            score: 0,
            isCorrect: false,
            paysSuggestion: [],
            name: ""
        }
    },
    created() {
        this.getData()
    },
    name: 'GameView',

    methods: {

        getData: async function () {


            try {
                if (!this.callEnabled) return
                const apiURL = "https://restcountries.com/v3.1/all/?fields=name,translations,flags,capitalInfo,postalCode,maps,capital"
                const response = await axios.get(apiURL)
                const res = response.data
                this.pays = []
                res.forEach(pays => {
                    this.pays.push({image: pays?.flags?.png, name: pays?.translations?.fra.common})
                })

                this.callEnabled = false
                this.getRandomPays()
            } catch (e) {
                console.log(e)
            }
        },
        getRandomPays: function () {
            if (this.pays?.length === 0) {
                this.getData()
                return
            }

            const random = Math.round(Math.random() * this.pays.length)
            this.actualPays = this.pays[random]
        },
        nextFlag: function () {

            this.isCorrect = false
            this.name = ""
            this.getRandomPays()
        },
        removeAccents(str) {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        },
        onGetName: function (name) {
            this.isCorrect = this.removeAccents(name) === this.removeAccents(this.actualPays?.name)

            if (!this.isCorrect) {
                localStorage.setItem('score', this.score);
                localStorage.setItem('paysFailedName', this.actualPays.name);
                localStorage.setItem('paysFailedImg', this.actualPays.image);
                router.push({ name: 'gameOver' });
            } else {
                this.score++
            }

        },

        inputPressed(name) {
            this.onGetName(name)
        },

        inputChanged(name) {

            this.name = name
            this.paysSuggestion = this.pays.filter(a => this.removeAccents(a.name).includes(this.removeAccents(name))).slice(0, 5)
        }
    }
}
</script>
