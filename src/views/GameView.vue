<script setup>
import GameFlag from "@/components/GameFlag.vue";
import GameInput from "@/components/GameInput.vue";
import GameSuggestion from "@/components/GameSuggestion.vue";
</script>

<template>
    <main>
        <h1>SCORE : {{ score }}</h1>
        <button v-if="isCorrect" v-on:click="nextFlag">NEXT</button>
        <GameInput v-if="!isCorrect" @inputPressed="inputPressed" @inputChanged="inputChanged"/>
        <GameFlag v-if="actualPays" :image="actualPays?.image" :name="actualPays?.name" :show-answer="isCorrect"/>
        <GameSuggestion v-if="paysSuggestion.length > 0" :pays="paysSuggestion"/>
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
            paysSuggestion: []
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
            this.getRandomPays()
        },
        removeAccents(str) {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        },
        onGetName: function (name) {
            this.isCorrect = this.removeAccents(name) === this.removeAccents(this.actualPays?.name)

            if (!this.isCorrect) {
                router.push({name: 'gameOver', params: {score: this.score}})
            } else {
                this.score++
            }

        },

        inputPressed(name) {
            this.onGetName(name)
        },

        inputChanged(name) {
            this.paysSuggestion = this.pays.filter(a => this.removeAccents(a.name).includes(this.removeAccents(name))).slice(0, 4)
        }
    }
}
</script>
