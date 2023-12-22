<script setup>
defineProps({
    pays: {
        type: [],
        required: true
    }
})
</script>

<template>
    <ul>
        <li v-bind:key="p.name" v-for="p in pays">{{ p.name }}</li>
    </ul>
</template>

