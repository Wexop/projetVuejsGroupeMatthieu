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
    <input type="text" v-model="this.inputValue">
    <input type="submit" value="OK"  @click="$emit('inputPressed', this.inputValue)">
</template>

