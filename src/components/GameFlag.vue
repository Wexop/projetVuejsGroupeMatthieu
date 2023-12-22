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
    <div style="display: flex;flex-direction: column;align-items: center">
        <img style="border: 2px solid black" class="mb-4" :src="image" alt="gameFlag" width="auto">
        <h3 v-if="showAnswer">{{name}}</h3>
    </div>
</template>

