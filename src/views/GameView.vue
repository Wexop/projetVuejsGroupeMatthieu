<script setup>

import GameFlag from "@/components/GameFlag.vue";
</script>

<template>
    <main>
        <h1>SCORE : {{score}}</h1>
         <button v-if="isCorrect" v-on:click="nextFlag">NEXT</button>
         <button v-on:click="onGetName(actualPays?.name)">GOOD ONE</button>
         <button v-on:click="onGetName('ruc')">WRONG ONE</button>
        <GameFlag v-if="actualPays" :image="actualPays?.image" :name="actualPays?.name" :show-answer="isCorrect"/>

    </main>
</template>

<script>
import axios from "axios";
import router from "@/router/index.js";
export default {
    data()  {
        return {
            actualPays: undefined,
            callEnabled: true,
            pays: [],
            score: 0,
            isCorrect: false
        }
    },
    created() {
        this.getData()
    },
    name: 'GameView',

    methods: {

        getData: async function( ){


            try {
                if(!this.callEnabled) return
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
        getRandomPays: function() {
            if(this.pays?.length === 0) {
                this.getData()
                return
            }

            const random = Math.round(Math.random() * this.pays.length)
            this.actualPays = this.pays[random]
        },
        nextFlag: function () {

            this.isCorrect= false
            this.getRandomPays()
        },
        onGetName: function (name) {
            this.isCorrect = name === this.actualPays?.name

            if(!this.isCorrect) {
              router.push("/")
            }
            else {
                this.score++
            }

        }

    }
}
</script>
