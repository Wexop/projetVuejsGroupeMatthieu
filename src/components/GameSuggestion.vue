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
        <li @click="$emit('pressed', p.name)" class="suggestionContainer" v-bind:key="p.name" v-for="p in pays">
            <p class="m-0">{{p.name}}</p>
        </li>
    </ul>
</template>

<style>
.suggestionContainer {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #e5e5e5;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    margin: 1rem 0;
    transition: 0.7s;
    transform: scale(1);
    justify-content: center;
}
.suggestionContainer:hover {
    transition: 0.5s;
    transform: scale(1.1);
    background-color: #5abaff;
}
</style>

