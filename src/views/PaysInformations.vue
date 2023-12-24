<template>
  <main class="container-fluid">

    <div class="titre">
      <h1>Liste des Drapeaux</h1>
      <input type="text" v-model="searchText" placeholder="Rechercher un pays" />
    </div>

    <div class="flag-grid">
      <div v-for="country in filteredCountries" :key="country.name.common" class="flag-item" @click="goToCountryDetails(country)">
        <img :src="country.flags.png" alt="Drapeau">
        <div>{{ country.name.common }}</div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import router from "@/router/index.js";

export default {
  data() {
    return {
      countries: [],
      searchText: '',
    };
  },
  mounted() {
    this.fetchCountries();
  },
  computed: {
    filteredCountries() {
      const lowerCaseSearch = this.searchText.toLowerCase();
      return this.countries.filter(country =>
          country.name.common.toLowerCase().includes(lowerCaseSearch)
      );
    },
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
    goToCountryDetails(country) {
      router.push({ name: 'Detail', params: { id: country.cca3 } });
    },
  },

};
</script>

<style>
.flag-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  min-width: 100vw;
}

.flag-item {
  flex: 1 calc(33.33% - 1rem);
  max-width: 100%;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.flag-item img {
  max-width: 70%;
  height: 200px;
  margin-bottom: 1rem;
  border: 1px solid #000;
}

.titre {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  gap: 2rem;
}
</style>
