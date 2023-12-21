<script setup>
defineProps({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    showAnswer: {
        type: Boolean,
        required: true
    }
})
</script>

<template>
    <img :src="this.image" alt="gameFlag" width="auto">
    <h3 :style="this.showAnswer ? 'display:block' : 'display:none'">{{this.name}}</h3>
</template>

