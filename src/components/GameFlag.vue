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
    <h3 :style="showAnswer ? 'display:block' : 'display:none'">{{name}}</h3>
</template>

