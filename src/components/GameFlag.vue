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
    <img :src="image" alt="gameFlag" width="auto">
    <h3 v-if="showAnswer">{{name}}</h3>
</template>

