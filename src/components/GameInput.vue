<script>
export default {
  name: 'GameInput',
  data() {
    return {
      inputValue: ''
    }
  }

}
</script>

<template>
    <input class="input" type="text" v-model="this.inputValue" placeholder="Nom du pays">
    <input type="submit" value="OK"  @click="$emit('inputPressed', this.inputValue)">
</template>

