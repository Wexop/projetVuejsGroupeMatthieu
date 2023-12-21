<template>
  <div>
    <h1>Liste des Drapeaux</h1>
    <div class="flag-grid">
      <div v-for="country in countries" :key="country.name.common" class="flag-item">
        <img :src="country.flags.png" alt="Drapeau">
        <div>{{ country.name.common }}</div>
      </div>
    </div>
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
.flag-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.flag-item {
  flex: 1 1 calc(33.33% - 1rem);
  max-width: calc(33.33% - 1rem);
  text-align: center;
  margin-bottom: 16px;
}

.flag-item img {
  max-width: 100%;
  height: auto;
}

/* Vos styles CSS ici */
</style>
