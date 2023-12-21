<template>
  <div>
    <h1>Liste des Drapeaux</h1>
    <ul>
      <li v-for="country in countries" :key="country.name.common">
        {{ country.name.common }} - <img :src="country.flags.png" alt="Drapeau">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      countries: [],
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all?translations=fra');
        this.countries = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des pays', error);
      }
    },
  },
};
</script>

<style>
/* Vos styles CSS ici */
</style>
