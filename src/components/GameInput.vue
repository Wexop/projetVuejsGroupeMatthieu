<script setup>
defineProps({
    inputValue: {
        type: String,
        required: true
    }
})
</script>

<template>
    <input class="input" type="text" :v-model="inputValue" placeholder="Nom du pays" @keyup="$emit('inputChanged', this.inputValue)">
    <input type="submit" value="OK"  @click="$emit('inputPressed', this.inputValue)">
</template>

