<script>
export default {
  name: 'GameInput',
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    countryWrited() {
      this.$emit(this.inputValue)
    }
  }
}
</script>

<template>
    <input type="text" v-model="inputValue">
    <input type="submit" value="OK">
</template>

